/* CHRD Training Academy - Courses Dataset & Interactive Modal Script */
/* Midnight Indigo (#0B1120) + Emerald (#00C896) + Purple (#7C5CFF) */

const coursesData = [
  {
    id: "montessori-ttc",
    name: "Pre-Primary & Montessori TTC",
    category: "teacher-training",
    badge: "Most Popular",
    duration: "1 Year",
    mode: "Online / Offline",
    eligibility: "SSLC / Plus Two / Any Degree",
    shortDesc: "Globally recognized early-childhood teaching method with comprehensive classroom practice and child psychology.",
    fullDesc: "The Pre-Primary & Montessori Teacher Training Course at CHRD Training Academy prepares aspiring educators for rewarding careers in early childhood education. Certified under ISO 9001:2015 standards, the curriculum integrates modern Montessori apparatus training, child psychology, lesson planning, and practical classroom internships.",
    modules: [
      "Montessori Philosophy & Methodology",
      "Child Psychology & Development Stages",
      "Sensorial & Practical Life Exercises",
      "Language & Mathematics Apparatus Training",
      "School Administration & Classroom Management",
      "Supervised Classroom Internship"
    ],
    careers: ["Montessori Teacher", "Pre-Primary Educator", "Kindergarten Supervisor", "Daycare Founder", "Academic Coordinator"],
    certification: "ISO 9001:2015 Certified & University Approved Diploma"
  },
  {
    id: "arabic-primary-ttc",
    name: "Arabic Primary TTC",
    category: "teacher-training",
    badge: "Specialized",
    duration: "6 Months",
    mode: "Online / Offline",
    eligibility: "Plus Two or Equivalent",
    shortDesc: "Pedagogical methodology, phonetics, grammar, and modern classroom delivery for Arabic educators.",
    fullDesc: "Designed for language enthusiasts and educators aiming to teach Arabic in schools and institutions. Covers Arabic phonetics, grammar instruction techniques, curriculum planning, and interactive classroom teaching strategies.",
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
    name: "Digital Marketing Masterclass",
    category: "professional",
    badge: "High Demand",
    duration: "3 Months",
    mode: "Online / Offline",
    eligibility: "Plus Two / Graduate",
    shortDesc: "Master SEO, social media marketing, Google Ads, website building, and analytics through live campaigns.",
    fullDesc: "Get job-ready with hands-on digital marketing training. You'll run live ad campaigns, build optimized websites, perform SEO audits, and manage real social media brands under industry mentor supervision.",
    modules: [
      "Search Engine Optimization (SEO) & Keyword Strategy",
      "Social Media Marketing (Meta, Instagram, LinkedIn Ads)",
      "Google Search Ads & Display Campaigns",
      "Content Marketing & Copywriting Fundamentals",
      "WordPress Website Setup & Landing Pages",
      "Google Analytics 4 & Performance Reporting"
    ],
    careers: ["Digital Marketing Executive", "SEO Specialist", "Social Media Manager", "PPC Campaign Specialist", "Freelancer"],
    certification: "CHRD Professional Digital Marketer Certification + Google Badges Prep"
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
    id: "accounting-tally",
    name: "Practical Accounting with Tally & GST",
    category: "professional",
    badge: "Industry Preferred",
    duration: "4 Months",
    mode: "Offline",
    eligibility: "Plus Two (Commerce preferred) / Graduate",
    shortDesc: "Hands-on business bookkeeping, Tally Prime, GST filing, TDS, and corporate financial accounting.",
    fullDesc: "Master practical accounting with real business case studies. Learn to maintain company ledgers, prepare balance sheets, generate GST returns, and handle payroll systems.",
    modules: [
      "Financial Accounting Principles & Journal Entries",
      "Tally Prime Complete Hands-on Module",
      "Goods & Services Tax (GST) Portal & Filing",
      "TDS & Income Tax Basics",
      "Payroll & Employee Benefit Accounting",
      "Auditing Preparation & Financial Reporting"
    ],
    careers: ["Junior Accountant", "Tally Operator", "GST Practitioner Assistant", "Accounts Executive", "Billing Officer"],
    certification: "CHRD Certified Accounting Professional"
  },
  {
    id: "spoken-english",
    name: "Spoken English & Personality Development",
    category: "languages",
    badge: "Skill Booster",
    duration: "2 Months",
    mode: "Online / Offline",
    eligibility: "Open to All",
    shortDesc: "Speak fluently and confidently in job interviews, professional workplaces, and daily conversations.",
    fullDesc: "Overcome fear and hesitation in English speaking. Interactive accent neutralization, vocabulary building, interview simulation, group discussions, and public speaking practice.",
    modules: [
      "Fluency Building & Vocabulary Expansion",
      "Practical Grammar & Everyday Sentence Framing",
      "Accent Neutralization & Pronunciation",
      "Public Speaking & Presentation Skills",
      "Job Interview Preparation & Mock Interviews",
      "Corporate Etiquette & Email Writing"
    ],
    careers: ["Customer Success Representative", "Front Office Executive", "Corporate Communicator", "Interview Readiness"],
    certification: "CHRD Spoken English Proficiency Certificate"
  },
  {
    id: "office-administration",
    name: "Office Administration & Executive Secretarial",
    category: "professional",
    badge: "Versatile",
    duration: "3 Months",
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
    id: "fashion-designing",
    name: "Fashion Designing & Garment Construction",
    category: "vocational",
    badge: "Creative Stream",
    duration: "6 Months",
    mode: "Offline",
    eligibility: "SSLC / Plus Two",
    shortDesc: "Pattern drafting, garment stitching, illustration, draping, and boutique management skills.",
    fullDesc: "Turn creativity into a career. Comprehensive vocational course covering fashion illustration, fabric selection, custom drafting, sewing techniques, and starting your own design boutique.",
    modules: [
      "Fashion Illustration & Color Theory",
      "Pattern Drafting & Grading Techniques",
      "Garment Construction & Stitching Practice",
      "Embroidery & Surface Ornamentation",
      "Fabric Science & Textile Care",
      "Boutique Management & Fashion Marketing"
    ],
    careers: ["Fashion Designer", "Boutique Owner", "Pattern Maker", "Fashion Illustrator", "Garment Stylist"],
    certification: "CHRD Vocational Certificate in Fashion Design"
  },
  {
    id: "graphic-designing",
    name: "Graphic Designing & Brand Identity",
    category: "professional",
    badge: "Creative Tech",
    duration: "4 Months",
    mode: "Offline / Online",
    eligibility: "Plus Two / Any Stream",
    shortDesc: "Design stunning graphics, brand logos, marketing collateral, and UI mockups using industry standard software.",
    fullDesc: "Master Photoshop, Illustrator, Canva, and Figma. Build an impressive portfolio of real brand projects, social media assets, posters, and print media.",
    modules: [
      "Design Principles, Layout & Typography",
      "Adobe Photoshop: Image Editing & Manipulation",
      "Adobe Illustrator: Vector Art & Logo Design",
      "Social Media Content & Ad Banner Design",
      "Print Media: Brochures, Flyers & Banners",
      "Portfolio Building & Freelance Guidance"
    ],
    careers: ["Graphic Designer", "Brand Identity Specialist", "UI/UX Assistant", "Social Media Visual Artist", "Freelance Designer"],
    certification: "CHRD Graphic Design Specialist Certification"
  },
  {
    id: "computer-courses",
    name: "Essential Computer Skills & MS Office",
    category: "languages",
    badge: "Foundational",
    duration: "2 Months",
    mode: "Online / Offline",
    eligibility: "Open to All Learners",
    shortDesc: "Master operating systems, MS Word, Excel, PowerPoint, internet security, and typing speed.",
    fullDesc: "A complete computer literacy program ensuring proficiency in modern workplace software, file handling, cloud storage, spreadsheet formulas, and online security.",
    modules: [
      "Computer Hardware & Windows Fundamentals",
      "MS Word: Document Formatting & Reports",
      "MS Excel: Formulas, Charts & Data Tables",
      "MS PowerPoint: Slide Presentations",
      "Internet Research, Email & Cloud Tools",
      "Keyboarding Speed & Cyber Safety Basics"
    ],
    careers: ["Data Entry Operator", "Computer Lab Assistant", "Office Assistant", "General Computer User"],
    certification: "CHRD Certificate in Computer Applications"
  },
  {
    id: "language-courses",
    name: "Global Language Academy (German / Arabic / French)",
    category: "languages",
    badge: "Abroad Ready",
    duration: "3 Months",
    mode: "Online / Offline",
    eligibility: "Open to Students & Job Seekers",
    shortDesc: "Learn foreign languages for higher studies, healthcare opportunities, and overseas employment.",
    fullDesc: "Structured language learning modules for German (A1/A2), Conversational Arabic, and French. Focuses on speaking fluency, grammar fundamentals, and embassy exam orientation.",
    modules: [
      "Phonetics, Script & Basic Pronunciation",
      "Essential Everyday Vocabulary & Phrases",
      "Grammar Framework & Sentence Construction",
      "Listening Comprehension & Audio Drills",
      "Cultural Context & Conversational Practice",
      "Certification Exam Orientation"
    ],
    careers: ["Overseas Healthcare/Job Applicant", "Language Interpreter Assistant", "Embassy Exam Preparation"],
    certification: "CHRD Foreign Language Certification"
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

    <div style="border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; display: flex; gap: 1rem; align-items: center; justify-content: space-between;" class="hero-actions">
      <div>
        <span style="font-size: 0.85rem; color: var(--text-muted); display: block;">Admissions Open for Next Batch</span>
        <strong style="color: var(--accent-emerald);">Free Admission Counselling Included</strong>
      </div>
      <a href="contact.html?course=${encodeURIComponent(course.name)}" class="btn btn-primary btn-lg">Apply for Course →</a>
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
