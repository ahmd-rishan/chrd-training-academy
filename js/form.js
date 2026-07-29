/* CHRD Training Academy - Contact Form & WhatsApp Integration Script */
/* Midnight Indigo (#0B1120) + Emerald (#00C896) + Purple (#7C5CFF) */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('chrdContactForm');
  const courseSelect = document.getElementById('formCourseSelect');

  // Pre-fill course from URL query string if present
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCourseParam = urlParams.get('course');

  if (selectedCourseParam && courseSelect) {
    for (let option of courseSelect.options) {
      if (option.text.toLowerCase().includes(selectedCourseParam.toLowerCase()) || option.value.toLowerCase().includes(selectedCourseParam.toLowerCase())) {
        option.selected = true;
        break;
      }
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName')?.value.trim();
      const phone = document.getElementById('formPhone')?.value.trim();
      const email = document.getElementById('formEmail')?.value.trim();
      const course = document.getElementById('formCourseSelect')?.value;
      const message = document.getElementById('formMessage')?.value.trim();

      if (!name || !phone) {
        showToast('Please provide your name and phone number so our advisor can reach you.', 'error');
        return;
      }

      // Format WhatsApp message
      const whatsappText = `Hello CHRD Training Academy! My name is ${encodeURIComponent(name)}.%0A%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email || 'N/A')}%0AInterested Course: ${encodeURIComponent(course || 'General Enquiry')}%0AMessage: ${encodeURIComponent(message || 'I would like to get more information about admission and fees.')}`;
      
      const whatsappURL = `https://wa.me/919745900084?text=${whatsappText}`;

      // Reset Form & Show Success Alert
      contactForm.reset();
      showToast('Thank you! Your enquiry has been received. Redirecting to WhatsApp for instant counseling...', 'success');

      setTimeout(() => {
        window.open(whatsappURL, '_blank');
      }, 1500);
    });
  }
});

// Global Toast Notification Helper
function showToast(message, type = 'success') {
  let toast = document.getElementById('chrdToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'chrdToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: #1B2645;
      color: #F8FAFC;
      padding: 1rem 1.75rem;
      border-radius: 9999px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.95rem;
      font-weight: 600;
      z-index: 3000;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      border: 1px solid #00C896;
    `;
    document.body.appendChild(toast);
  }

  const icon = type === 'success' ? '✓' : '⚠️';
  toast.innerHTML = `<span style="color: ${type === 'success' ? '#00C896' : '#EF4444'}; font-size: 1.2rem;">${icon}</span> <span>${message}</span>`;
  
  toast.style.transform = 'translateX(-50%) translateY(0)';

  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
  }, 4500);
}
