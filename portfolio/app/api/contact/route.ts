import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, etc.
    // 2. Store in a database
    // 3. Integrate with a CRM

    // For now, we'll just log it and return success
    console.log('Contact form submission:', { name, email, subject, message, timestamp: new Date().toISOString() });

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS if needed
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
