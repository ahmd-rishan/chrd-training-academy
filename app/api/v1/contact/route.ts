import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, course, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ success: false, error: 'Name and phone are required' }, { status: 400 });
    }

    // Insert into DB / Supabase
    const submission = {
      id: Date.now().toString(),
      name,
      email: email || '',
      phone,
      course_interest: course || 'General Inquiry',
      message: message || '',
      status: 'UNREAD',
      created_at: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      message: 'Contact submission received successfully',
      data: submission
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
