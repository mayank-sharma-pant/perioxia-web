// Test script to verify Node Mailer configuration
require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testEmail() {
    console.log('\n=== Node Mailer Configuration Test ===\n');

    // Check environment variables
    console.log('1. Checking Environment Variables:');
    const requiredVars = ['EMAIL_HOST', 'EMAIL_PORT', 'EMAIL_USER', 'EMAIL_PASS', 'EMAIL_TO'];
    const missingVars = [];

    requiredVars.forEach(varName => {
        if (process.env[varName]) {
            console.log(`   ✓ ${varName}: ${varName.includes('PASS') ? '***' : process.env[varName]}`);
        } else {
            console.log(`   ✗ ${varName}: MISSING`);
            missingVars.push(varName);
        }
    });

    if (missingVars.length > 0) {
        console.error('\n❌ Missing required environment variables:', missingVars.join(', '));
        console.log('\nPlease add these to your .env.local file:');
        console.log('EMAIL_HOST=smtp.gmail.com (or your SMTP server)');
        console.log('EMAIL_PORT=587 (or 465 for SSL)');
        console.log('EMAIL_USER=your-email@gmail.com');
        console.log('EMAIL_PASS=your-app-password');
        console.log('EMAIL_TO=recipient@example.com');
        return;
    }

    console.log('\n2. Creating Transporter:');
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: Number(process.env.EMAIL_PORT) === 465,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        console.log('   ✓ Transporter created successfully');

        console.log('\n3. Verifying SMTP Connection:');
        await transporter.verify();
        console.log('   ✓ SMTP connection verified successfully');

        console.log('\n4. Sending Test Email:');
        const info = await transporter.sendMail({
            from: `"Perioxia Test" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: 'Node Mailer Test - ' + new Date().toLocaleString(),
            html: `
                <h2>✅ Node Mailer Test Successful</h2>
                <p>This is a test email sent from your Perioxia web application.</p>
                <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Configuration:</strong></p>
                <ul>
                    <li>Host: ${process.env.EMAIL_HOST}</li>
                    <li>Port: ${process.env.EMAIL_PORT}</li>
                    <li>Secure: ${Number(process.env.EMAIL_PORT) === 465}</li>
                </ul>
                <p>If you received this email, your Node Mailer configuration is working correctly! 🎉</p>
            `,
        });

        console.log('   ✓ Test email sent successfully');
        console.log('   Message ID:', info.messageId);
        console.log('   Response:', info.response);

        console.log('\n✅ All tests passed! Node Mailer is configured correctly.\n');

    } catch (error) {
        console.error('\n❌ Error occurred:');
        console.error('   Error Type:', error.name);
        console.error('   Error Message:', error.message);

        if (error.code) {
            console.error('   Error Code:', error.code);
        }

        console.log('\n📋 Common Issues and Solutions:');

        if (error.message.includes('Invalid login')) {
            console.log('   • Invalid credentials - Check EMAIL_USER and EMAIL_PASS');
            console.log('   • For Gmail: Use an App Password, not your regular password');
            console.log('   • Enable "Less secure app access" or use OAuth2');
        }

        if (error.code === 'ECONNREFUSED') {
            console.log('   • Connection refused - Check EMAIL_HOST and EMAIL_PORT');
            console.log('   • Verify your SMTP server is accessible');
            console.log('   • Check firewall settings');
        }

        if (error.code === 'ETIMEDOUT') {
            console.log('   • Connection timeout - Check your internet connection');
            console.log('   • Verify SMTP server address and port');
        }

        if (error.message.includes('self signed certificate')) {
            console.log('   • SSL certificate issue - Try adding: tls: { rejectUnauthorized: false }');
        }

        console.log('\n');
    }
}

testEmail();
