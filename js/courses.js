/* CHRD Training Academy - Courses Dataset & Interactive Modal Script */
/* Midnight Indigo (#0B1120) + Emerald (#00C896) + Purple (#7C5CFF) */

const coursesData = [
  {
    id: "pre-primary-ttc",
    name: "Pre-Primary TTC",
    category: "teacher-training",
    badge: "Most Popular",
    duration: "1 Year",
    mode: "Online & Offline",
    eligibility: "SSLC / Plus Two / Any Degree",
    shortDesc: "Comprehensive early childhood teacher training preparing educators for pre-primary school instruction and child development.",
    fullDesc: "The Pre-Primary Teacher Training Course at CHRD Training Academy prepares aspiring educators for rewarding careers in early childhood education. Certified under ISO 9001:2015 standards, the curriculum integrates early childhood psychology, modern teaching methodology, lesson planning, and practical classroom internships.",
    internship: "Students will undergo a 15-day offline practical internship to gain real classroom teaching experience under expert guidance, helping them develop confidence and practical teaching skills.",
    modules: [
      "Pre-Primary Teaching Methodology",
      "Child Psychology & Early Development",
      "Lesson Planning & Classroom Management",
      "Activity-Based Learning & Teaching Aids",
      "School Administration & Child Safety",
      "Supervised Classroom Internship"
    ],
    careers: ["Pre-Primary Teacher", "Kindergarten Educator", "Daycare Supervisor", "Academic Assistant", "School Administration Staff"],
    certification: "ISO 9001:2015 Certified & University Approved Diploma"
  },
  {
    id: "montessori-ttc",
    name: "Montessori TTC",
    category: "teacher-training",
    badge: "High Demand",
    duration: "1 Year",
    mode: "Online & Offline",
    eligibility: "SSLC / Plus Two / Any Degree",
    shortDesc: "Globally recognized Montessori early-childhood teaching method with comprehensive classroom apparatus practice.",
    fullDesc: "The Montessori Teacher Training Course at CHRD Training Academy prepares educators in authentic Montessori apparatus training, child psychology, sensorial life exercises, and specialized classroom management.",
    internship: "Students will undergo a 15-day offline practical internship to gain real classroom teaching experience under expert guidance, helping them develop confidence and practical teaching skills.",
    modules: [
      "Montessori Philosophy & Methodology",
      "Sensorial & Practical Life Exercises",
      "Language & Mathematics Apparatus Training",
      "Child Psychology & Individualized Learning",
      "Montessori Classroom Setup & Environment",
      "Supervised Apparatus Internship"
    ],
    careers: ["Montessori Teacher", "Montessori School Directress", "Kindergarten Coordinator", "Daycare Founder", "Montessori Educator"],
    certification: "ISO 9001:2015 Certified Montessori Diploma"
  },
  {
    id: "arabic-primary-ttc",
    name: "Arabic Primary TTC",
    category: "teacher-training",
    badge: "Specialized",
    duration: "1 Year",
    mode: "Online & Offline",
    eligibility: "Plus Two or Equivalent",
    shortDesc: "Pedagogical methodology, phonetics, grammar, and modern classroom delivery for Arabic educators.",
    fullDesc: "Designed for language enthusiasts and educators aiming to teach Arabic in schools and institutions. Covers Arabic phonetics, grammar instruction techniques, curriculum planning, and interactive classroom teaching strategies.",
    internship: "Students will undergo a 15-day offline practical internship to gain real classroom teaching experience under expert guidance, helping them develop confidence and practical teaching skills.",
    modules: [
      "Arabic Language Structure & Applied Grammar",
      "Phonetics & Pronunciation Mastery",
      "Teaching Methodology & Pedagogy",
      "Instructional Material Design",
      "Digital Teaching Tools for Arabic",
      "Teaching Practice & Evaluation"
    ],
    careers: ["Arabic Primary School Teacher", "Language Instructor", "Curriculum Assistant", "Private Tutor"],
    certification: "CHRD Certified Teacher Training Certificate"
  },
  {
    id: "digital-marketing",
    name: "AI Integrated Digital Marketing",
    category: "professional",
    badge: "AI Powered",
    duration: "5 Months",
    mode: "Online & Offline",
    eligibility: "Plus Two / Graduate",
    shortDesc: "Learn modern digital marketing using AI-powered tools, SEO, Meta & Google Ads, and automation.",
    fullDesc: "Learn modern digital marketing using AI-powered tools and practical strategies. The programme covers SEO, Social Media Marketing, Google Ads, Meta Ads, Website Development, Content Marketing, Analytics, AI Productivity Tools, and Automation through live practical sessions.",
    modules: [
      "AI Tools for Marketing",
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Meta Ads",
      "Google Ads",
      "Website Development",
      "WordPress",
      "Content Marketing",
      "Google Analytics",
      "Marketing Automation",
      "Live Projects",
      "Placement Assistance",
      "Industry Certification"
    ],
    careers: ["Digital Marketing Executive", "SEO Specialist", "Performance Marketer", "Social Media Manager", "Content Strategist", "Google Ads Specialist", "Meta Ads Specialist", "AI Marketing Specialist", "Freelancer", "Entrepreneur"],
    certification: "CHRD Professional AI Digital Marketer Certification + Google Badges Prep"
  },
  {
    id: "hospital-administration",
    name: "Hospital Administration",
    category: "healthcare",
    badge: "Career Focused",
    duration: "6 Months",
    mode: "Offline",
    eligibility: "Plus Two / Any Degree",
    shortDesc: "Career-ready training for hospital management, medical billing, front-desk, and patient care coordination.",
    fullDesc: "Prepares students for administrative and managerial positions in healthcare institutions, clinics, and multi-specialty hospitals across Kerala and the GCC region.",
    modules: [
      "Healthcare Systems & Hospital Organization",
      "Medical Terminology & Documentation",
      "Patient Reception & Care Coordination",
      "Hospital Billing, Insurance & TPA Operations",
      "Medical Records Management",
      "Hospital Quality Standards & NABH Basics"
    ],
    careers: ["Hospital Front Desk Executive", "Patient Care Coordinator", "Billing Executive", "Medical Records Officer", "Clinic Manager"],
    certification: "CHRD Diploma in Hospital Administration"
  },
  {
    id: "office-administration",
    name: "Office Administration & Executive Secretarial",
    category: "professional",
    badge: "Versatile",
    duration: "6 Months",
    mode: "Online / Offline",
    eligibility: "Plus Two / Any Degree",
    shortDesc: "Build the front-office, administrative, and digital productivity skills needed in modern companies.",
    fullDesc: "Essential administrative skill program covering MS Office Suite, document formatting, email etiquette, scheduling, meeting organization, and business correspondence.",
    modules: [
      "Advanced MS Office (Word, Excel, PowerPoint)",
      "Business Email Writing & Professional Communication",
      "File & Record Management Systems",
      "Front-Desk Reception & Guest Relations",
      "Calendar Management & Meeting Minutes",
      "Basic Accounting & Office Budgeting"
    ],
    careers: ["Office Administrator", "Executive Assistant", "Front Office Manager", "Administrative Secretary"],
    certification: "CHRD Office Administration Certificate"
  },
  {
    id: "legal-assistant",
    name: "Legal Assistant",
    category: "legal-studies",
    badge: "New Program",
    duration: "6 Months",
    mode: "Online & Offline",
    eligibility: "Plus Two Students / Graduates / Job Seekers / Professionals seeking legal administration careers",
    shortDesc: "Develop practical legal and administrative skills required to support advocates, law firms, legal departments, and corporate organizations.",
    fullDesc: "Develop practical legal and administrative skills required to support advocates, law firms, legal departments, and corporate organizations. Learn legal documentation, drafting, office procedures, client communication, legal research, and professional ethics through practical training.",
    modules: [
      "Practical Legal Documentation",
      "Legal Drafting & Office Procedures",
      "Client Communication Skills",
      "Legal Research Basics",
      "Court & Office Administration",
      "Industry-Oriented Practical Training",
      "Certificate on Successful Completion"
    ],
    careers: ["Legal Assistant", "Advocate Office Assistant", "Legal Clerk", "Court Office Assistant", "Corporate Legal Executive", "Documentation Executive"],
    certification: "CHRD Legal Assistant Professional Certificate (ISO 9001:2015 Approved)"
  }
];

// Open Detailed Course Modal with Midnight Indigo & Emerald Styling
function openCourseModal(courseId) {
  const course = coursesData.find(c => c.id === courseId);
  if (!course) return;

  const modalOverlay = document.getElementById('courseModal');
  const modalBody = document.getElementById('modalContent');

  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="badge badge-emerald">${course.duration}</span>
      <span class="badge badge-purple" style="margin-left: 0.5rem;">${course.mode}</span>
      <h2 style="margin-top: 0.75rem; margin-bottom: 0.5rem; color: var(--text-primary);">${course.name}</h2>
      <p style="color: var(--text-secondary); font-size: 1.05rem;">${course.fullDesc}</p>
    </div>

    ${course.internship ? `
      <div style="background: var(--secondary-bg); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--accent-emerald); margin-bottom: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem; color: var(--accent-emerald); display: flex; align-items: center; gap: 0.5rem;">
          <span>🏫</span> Practical Training — 15 Days Offline Internship
        </h4>
        <p style="font-size: 0.95rem; margin: 0; color: var(--text-secondary); line-height: 1.6;">${course.internship}</p>
      </div>
    ` : ''}

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;" class="grid-cols-2">
      <div style="background: var(--secondary-bg); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="margin-bottom: 0.5rem; color: var(--accent-emerald);">Eligibility</h4>
        <p style="font-size: 0.95rem; margin: 0; color: var(--text-secondary);">${course.eligibility}</p>
      </div>
      <div style="background: var(--secondary-bg); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="margin-bottom: 0.5rem; color: var(--accent-purple);">Certification</h4>
        <p style="font-size: 0.95rem; margin: 0; color: var(--text-secondary);">${course.certification}</p>
      </div>
    </div>

    <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-primary);">Key Learning Modules</h3>
    <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 2rem;" class="grid-cols-2">
      ${course.modules.map(mod => `
        <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem; color: var(--text-secondary);">
          <span style="color: var(--accent-emerald); font-weight: bold;">✓</span> ${mod}
        </li>
      `).join('')}
    </ul>

    <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--text-primary);">Career Opportunities</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
      ${course.careers.map(car => `<span style="background: var(--secondary-bg); border: 1px solid var(--border-subtle); padding: 0.4rem 0.85rem; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 600; color: var(--text-primary);">${car}</span>`).join('')}
    </div>

    <div class="course-modal-footer">
      <div class="course-modal-footer-info">
        <span class="course-modal-footer-badge">Admissions Open for Next Batch</span>
        <strong class="course-modal-footer-highlight">Free Admission Counselling Included</strong>
      </div>
      <a href="contact.html?course=${encodeURIComponent(course.name)}" class="btn btn-primary btn-lg course-modal-cta-btn">Apply Now →</a>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCourseModal() {
  const modalOverlay = document.getElementById('courseModal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Attach Event Listeners for course filter buttons if present
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.course-filter-btn');
  const courseItems = document.querySelectorAll('.course-card-wrapper');

  if (filterBtns.length > 0 && courseItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('btn-primary'));
        filterBtns.forEach(b => b.classList.add('btn-secondary'));
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');

        const filter = btn.getAttribute('data-filter');

        courseItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Close modal when clicking background overlay
  const modalOverlay = document.getElementById('courseModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeCourseModal();
    });
  }
});
