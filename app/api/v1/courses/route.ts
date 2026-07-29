import { NextResponse } from 'next/server';

export async function GET() {
  const courses = [
    {
      id: 'montessori-ttc',
      title: 'Pre-Primary & Montessori TTC',
      slug: 'montessori-ttc',
      category: 'Teacher Training',
      duration: '1 Year',
      mode: 'Online / Offline',
      fees: 'Contact Admissions',
      description: 'Globally recognized early-childhood teaching methodology with hands-on apparatus training and classroom practice.',
      status: 'PUBLISHED'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Masterclass',
      slug: 'digital-marketing',
      category: 'Tech & Marketing',
      duration: '3 Months',
      mode: 'Live Ads & Practical',
      fees: 'Contact Admissions',
      description: 'Master SEO, Google Ads, Instagram campaigns, website creation, and analytics through live practical projects.',
      status: 'PUBLISHED'
    },
    {
      id: 'hospital-administration',
      title: 'Hospital Administration',
      slug: 'hospital-administration',
      category: 'Healthcare',
      duration: '6 Months',
      mode: 'Healthcare Admin',
      fees: 'Contact Admissions',
      description: 'Career-ready training for hospital management, medical billing, front desk, and patient care coordination.',
      status: 'PUBLISHED'
    }
  ];

  return NextResponse.json({
    success: true,
    count: courses.length,
    data: courses
  });
}
