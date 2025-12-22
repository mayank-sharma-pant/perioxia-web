import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, service, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // In a real production app, you would save this to a database (e.g., MongoDB, PostgreSQL)
        // or send it to an email service.
        console.log('--- NEW LEAD CAPTURED ---');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Company: ${company || 'N/A'}`);
        console.log(`Service: ${service || 'General Inquiry'}`);
        console.log(`Message: ${message}`);
        console.log('-------------------------');

        return NextResponse.json(
            { message: 'Lead captured successfully. Our team will contact you soon.' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to process request.' },
            { status: 500 }
        );
    }
}
