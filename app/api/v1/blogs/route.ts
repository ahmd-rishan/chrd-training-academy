import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const query = searchParams.get('query');

  const blogs = [
    {
      id: '1',
      title: 'How Early Childhood Teacher Training is Shaping Modern Education in Kerala',
      slug: 'how-early-childhood-teacher-training-is-shaping-modern-education-in-kerala',
      excerpt: 'Early childhood education has evolved dramatically with the adoption of Montessori principles and activity-based learning.',
      category: 'Teaching & Training',
      status: 'PUBLISHED',
      published_at: '2026-07-28',
      reading_time: 5,
      featured_image: '/assets/hero-image.jpg',
      author: 'CHRD Academic Team'
    },
    {
      id: '2',
      title: 'Top 5 Digital Marketing Skills Employers Are Looking For in 2026',
      slug: 'top-5-digital-marketing-skills-employers-are-looking-for-in-2026',
      excerpt: 'From Performance Marketing and SEO to Social Media Analytics, explore the most high-demand digital skills for career growth.',
      category: 'Digital Skills',
      status: 'PUBLISHED',
      published_at: '2026-07-22',
      reading_time: 4,
      featured_image: '/assets/hero-image.jpg',
      author: 'CHRD Mentor'
    },
    {
      id: '3',
      title: 'Career Opportunities in Hospital Administration Across Kerala & GCC',
      slug: 'career-opportunities-in-hospital-administration-across-kerala-and-gcc',
      excerpt: 'Healthcare administration is expanding rapidly. Learn about job roles, medical billing, hospital desk management, and placement paths.',
      category: 'Healthcare',
      status: 'PUBLISHED',
      published_at: '2026-07-18',
      reading_time: 6,
      featured_image: '/assets/hero-image.jpg',
      author: 'Admin Faculty'
    }
  ];

  let filtered = blogs;
  if (category && category !== 'all') {
    filtered = filtered.filter(b => b.category.toLowerCase() === category.toLowerCase());
  }
  if (query) {
    filtered = filtered.filter(b => b.title.toLowerCase().includes(query.toLowerCase()));
  }

  return NextResponse.json({
    success: true,
    count: filtered.length,
    data: filtered
  });
}
