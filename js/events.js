/* CHRD Training Academy - Event Modal Popup & Registration System Engine */

// All 14 Districts of Kerala
const KERALA_DISTRICTS = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod"
];

let activeModalEscListener = null;

// Helper: Get Open / Upcoming Events from Dataset
function getOpenEvents() {
  if (typeof window !== 'undefined' && typeof window.getUpcomingEvents === 'function') {
    return window.getUpcomingEvents();
  }
  return typeof eventsData !== 'undefined' ? eventsData : [];
}

// Render Upcoming Events Grid or Event Enquiry Form on events.html
function renderUpcomingEventsGrid() {
  const targetArea = document.getElementById('eventsSectionContent') || document.getElementById('dynamicEventsGrid') || document.querySelector('#upcoming-events .container');
  if (!targetArea) return;

  const events = getOpenEvents();

  // Case 1: If no upcoming events exist, render Left "No Upcoming Events" panel + Right "Event Enquiry Form"
  if (events.length === 0) {
    targetArea.innerHTML = `
      <div class="reveal fade-up stagger-1" style="background: var(--card-bg); border-radius: var(--radius-xl); border: 1px solid var(--border-subtle); overflow: hidden; box-shadow: var(--shadow-lg);">
        <div class="grid grid-cols-2" style="gap: 0; align-items: stretch;">
          
          <!-- Left Panel: Existing No Upcoming Events Design -->
          <div style="position: relative; padding: clamp(2rem, 3.5vw, 3rem); background: var(--secondary-bg); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border-right: 1px solid var(--border-subtle);">
            <div style="position: absolute; top: 1.25rem; left: 1.25rem;">
              <span class="badge badge-purple">Coming Soon</span>
            </div>
            
            <div style="margin-top: 1.25rem; margin-bottom: 1.25rem; width: 90px; height: 90px; background: rgba(0, 200, 150, 0.08); border: 1px solid var(--accent-emerald); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 25px rgba(0, 200, 150, 0.15);">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#00C896" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <path d="M8 14h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 18h.01"></path>
                <path d="M12 18h.01"></path>
              </svg>
            </div>

            <h3 style="font-size: clamp(1.35rem, 2vw, 1.65rem); color: var(--text-primary); margin-bottom: 0.75rem; font-family: var(--font-heading);">
              No Upcoming Events
            </h3>

            <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem; max-width: 380px; margin: 0 auto;">
              There are currently no upcoming workshops or professional development programmes scheduled. New events will be announced here soon. Stay connected with CHRD Training Academy for future updates.
            </p>
          </div>

          <!-- Right Panel: Event Enquiry Form -->
          <div style="padding: clamp(2rem, 3.5vw, 3rem); display: flex; flex-direction: column; justify-content: center;">
            <div style="margin-bottom: 1.25rem;">
              <span class="badge badge-emerald" style="margin-bottom: 0.5rem; display: inline-block;">Event Enquiry</span>
              <h3 style="font-size: clamp(1.35rem, 2vw, 1.65rem); color: var(--text-primary); margin: 0 0 0.4rem 0; font-family: var(--font-heading);">
                Didn't Find an Event?
              </h3>
              <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height: 1.55;">
                Interested in our upcoming workshops, seminars, or training programmes? Submit your enquiry and we'll notify you when registrations open.
              </p>
            </div>

            <div id="enquirySuccessBanner" style="display: none; background: rgba(0, 200, 150, 0.12); border: 1px solid var(--accent-emerald); border-radius: var(--radius-md); padding: 0.85rem; margin-bottom: 1rem; text-align: center; font-size: 0.88rem; color: var(--accent-emerald);">
              ✓ Your enquiry has been prepared. You will now be redirected to WhatsApp.
            </div>

            <form id="eventsPageEnquiryForm" onsubmit="handleEventsEnquirySubmit(event)" novalidate>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem;" class="grid-cols-2">
                <div class="modal-form-group" style="margin-bottom: 0.85rem;">
                  <label class="modal-form-label" style="font-size: 0.82rem;">Full Name <span style="color: #FF6B6B;">*</span></label>
                  <input type="text" id="enqFullName" class="modal-form-control" placeholder="Your full name" style="padding: 0.65rem 0.85rem; font-size: 0.9rem;">
                  <span id="err-enqFullName" class="modal-error-msg"></span>
                </div>

                <div class="modal-form-group" style="margin-bottom: 0.85rem;">
                  <label class="modal-form-label" style="font-size: 0.82rem;">Place <span style="color: #FF6B6B;">*</span></label>
                  <input type="text" id="enqPlace" class="modal-form-control" placeholder="e.g. Vengara" style="padding: 0.65rem 0.85rem; font-size: 0.9rem;">
                  <span id="err-enqPlace" class="modal-error-msg"></span>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem;" class="grid-cols-2">
                <div class="modal-form-group" style="margin-bottom: 0.85rem;">
                  <label class="modal-form-label" style="font-size: 0.82rem;">District <span style="color: #FF6B6B;">*</span></label>
                  <select id="enqDistrict" class="modal-form-control" style="padding: 0.65rem 0.85rem; font-size: 0.9rem; cursor: pointer;">
                    <option value="">-- Select --</option>
                    ${KERALA_DISTRICTS.map(d => `<option value="${d}">${d}</option>`).join('')}
                  </select>
                  <span id="err-enqDistrict" class="modal-error-msg"></span>
                </div>

                <div class="modal-form-group" style="margin-bottom: 0.85rem;">
                  <label class="modal-form-label" style="font-size: 0.82rem;">Mobile Number <span style="color: #FF6B6B;">*</span></label>
                  <input type="tel" id="enqPhone" class="modal-form-control" maxlength="10" placeholder="10-digit mobile" style="padding: 0.65rem 0.85rem; font-size: 0.9rem;">
                  <span id="err-enqPhone" class="modal-error-msg"></span>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem;" class="grid-cols-2">
                <div class="modal-form-group" style="margin-bottom: 0.85rem;">
                  <label class="modal-form-label" style="font-size: 0.82rem;">Email Address <span style="color: #FF6B6B;">*</span></label>
                  <input type="email" id="enqEmail" class="modal-form-control" placeholder="name@email.com" style="padding: 0.65rem 0.85rem; font-size: 0.9rem;">
                  <span id="err-enqEmail" class="modal-error-msg"></span>
                </div>

                <div class="modal-form-group" style="margin-bottom: 0.85rem;">
                  <label class="modal-form-label" style="font-size: 0.82rem;">Interested In <span style="color: var(--text-muted); font-weight: normal;">(Optional)</span></label>
                  <input type="text" id="enqInterested" class="modal-form-control" placeholder="e.g. Public Speaking" style="padding: 0.65rem 0.85rem; font-size: 0.9rem;">
                </div>
              </div>

              <div class="modal-form-group" style="margin-bottom: 1.1rem;">
                <label class="modal-form-label" style="font-size: 0.82rem;">Message / Enquiry <span style="color: #FF6B6B;">*</span></label>
                <textarea id="enqMessage" class="modal-form-control" rows="2" placeholder="I'm interested in the next Public Speaking Workshop. Please notify me when registrations open." style="padding: 0.65rem 0.85rem; font-size: 0.9rem;"></textarea>
                <span id="err-enqMessage" class="modal-error-msg"></span>
              </div>

              <button type="submit" id="enqSubmitBtn" class="btn btn-primary btn-md" style="width: 100%; justify-content: center; font-weight: 700; font-size: 0.95rem;">
                Send Enquiry →
              </button>
            </form>
          </div>

        </div>
      </div>
    `;
    return;
  }

  // Case 2: If at least one event exists, hide empty state card completely and render 3-col Event Grid
  targetArea.innerHTML = `
    <div class="events-grid-wrapper">
      ${events.map(evt => {
        const title = evt.title || evt.name;
        const image = evt.poster || evt.banner || evt.image || 'assets/blog-featured.jpg';
        const desc = evt.shortDesc || evt.description;
        const dateText = evt.displayDate || evt.date;
        const feeText = typeof evt.totalFee === 'number' ? `₹${evt.totalFee}` : evt.fee;
        const seatsText = typeof evt.availableSeats === 'number' ? `${evt.availableSeats} Seats Available` : (evt.seats || 'Available');

        return `
          <div class="event-card-item">
            
            <!-- Featured Image Header Section -->
            <div style="height: 220px; position: relative; overflow: hidden; border-radius: var(--radius-xl) var(--radius-xl) 0 0;">
              <img src="${image}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover; object-position: center; transition: transform 0.4s ease;">
              <div style="position: absolute; top: 1rem; left: 1rem; right: 1rem; display: flex; justify-content: space-between; align-items: center; z-index: 2;">
                <span class="badge badge-emerald">${evt.status || 'Registration Open'}</span>
                <span class="badge badge-white" style="font-weight: 800; font-size: 0.88rem; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">${feeText}</span>
              </div>
            </div>

            <!-- Content Body Section -->
            <div style="padding: 1.5rem; display: flex; flex-direction: column; flex: 1;">
              
              <!-- Date & Time Row -->
              <div style="display: flex; gap: 1rem; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem; flex-wrap: wrap;">
                <span>📅 <strong>${dateText}</strong></span>
                <span style="color: var(--text-muted);">🕒 ${evt.time}</span>
              </div>

              <!-- Event Title -->
              <h3 style="font-size: 1.25rem; color: var(--text-primary); font-family: var(--font-heading); font-weight: 700; margin-bottom: 0.6rem; line-height: 1.35;">
                ${title}
              </h3>

              <!-- Short Description -->
              <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
                ${desc}
              </p>

              <!-- Separate Details Box -->
              <div style="background: var(--secondary-bg); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.55rem; font-size: 0.88rem; color: var(--text-secondary);">
                <div>📍 <strong>Venue:</strong> ${evt.venue}</div>
                <div>👨‍🏫 <strong>Trainer:</strong> ${evt.trainer || 'CHRD Expert Faculty'}</div>
                <div>🪑 <strong>Seats:</strong> <span style="color: var(--accent-emerald); font-weight: 700;">${seatsText}</span></div>
              </div>

              <!-- Register Now Button -->
              <div style="margin-top: auto;">
                <button onclick="openEventRegistrationModal('${evt.id}')" class="btn btn-primary btn-md" style="width: 100%; justify-content: center; font-weight: 700; font-size: 0.95rem;">
                  Register Now →
                </button>
              </div>
            </div>

          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Event Enquiry Form Handler (No Upcoming Events)
function handleEventsEnquirySubmit(event) {
  event.preventDefault();

  // Clear previous errors
  ['enqFullName', 'enqPlace', 'enqDistrict', 'enqPhone', 'enqEmail', 'enqMessage'].forEach(id => {
    const errEl = document.getElementById(`err-${id}`);
    if (errEl) errEl.textContent = '';
  });

  const name = document.getElementById('enqFullName').value.trim();
  const place = document.getElementById('enqPlace').value.trim();
  const district = document.getElementById('enqDistrict').value;
  const phone = document.getElementById('enqPhone').value.trim();
  const email = document.getElementById('enqEmail').value.trim();
  const interestedIn = document.getElementById('enqInterested').value.trim();
  const message = document.getElementById('enqMessage').value.trim();

  let hasError = false;

  if (!name) {
    document.getElementById('err-enqFullName').textContent = 'Full Name is required';
    hasError = true;
  }

  if (!place) {
    document.getElementById('err-enqPlace').textContent = 'Place is required';
    hasError = true;
  }

  if (!district) {
    document.getElementById('err-enqDistrict').textContent = 'Please select a district';
    hasError = true;
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phone) {
    document.getElementById('err-enqPhone').textContent = 'Mobile Number is required';
    hasError = true;
  } else if (!phoneRegex.test(phone)) {
    document.getElementById('err-enqPhone').textContent = 'Please enter a valid 10-digit mobile number';
    hasError = true;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document.getElementById('err-enqEmail').textContent = 'Email Address is required';
    hasError = true;
  } else if (!emailRegex.test(email)) {
    document.getElementById('err-enqEmail').textContent = 'Please enter a valid email address';
    hasError = true;
  }

  if (!message) {
    document.getElementById('err-enqMessage').textContent = 'Message / Enquiry is required';
    hasError = true;
  }

  if (hasError) return;

  const nowTime = new Date().getTime();

  // Save enquiry record locally (modular for future backend integration)
  const enquiryRecord = {
    id: `ENQ-${nowTime}-${Math.floor(1000 + Math.random() * 9000)}`,
    submittedAt: new Date().toISOString(),
    name: name,
    place: place,
    district: district,
    phone: phone,
    email: email,
    interestedIn: interestedIn || 'General Workshop / Event',
    message: message,
    status: 'New'
  };

  const existingEnquiries = JSON.parse(localStorage.getItem('chrd_event_enquiries') || '[]');
  existingEnquiries.push(enquiryRecord);
  localStorage.setItem('chrd_event_enquiries', JSON.stringify(existingEnquiries));

  const submitBtn = document.getElementById('enqSubmitBtn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
  }

  const whatsappMessage = `Hello CHRD Training Academy,

I would like to enquire about your upcoming events.

Name: ${name}
Place: ${place}
District: ${district}
Mobile: ${phone}
Email: ${email}
${interestedIn ? `\nInterested In:\n${interestedIn}\n` : ''}
Message:
${message}

Please let me know when the next batch or workshop is announced.

Thank you.`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/919383442028?text=${encodedMessage}`;

  const successBanner = document.getElementById('enquirySuccessBanner');
  if (successBanner) {
    successBanner.style.display = 'block';
  }

  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
    const form = document.getElementById('eventsPageEnquiryForm');
    if (form) form.reset();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Enquiry →';
    }
  }, 700);
}

// Open Centered Glassmorphism Registration Popup Modal
function openEventRegistrationModal(eventId) {
  const evt = typeof window.getEventById === 'function' ? window.getEventById(eventId) : (window.eventsData || []).find(e => e.id === eventId);
  if (!evt) return;

  const eventTitle = evt.title || evt.name;
  const eventDateText = evt.displayDate || evt.date;

  let modal = document.getElementById('eventRegistrationModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'eventRegistrationModal';
    modal.className = 'event-modal-overlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modalTitle');
    document.body.appendChild(modal);
  }

  const districtOptionsHtml = KERALA_DISTRICTS.map(d => `<option value="${d}">${d}</option>`).join('');

  modal.innerHTML = `
    <div class="event-modal-container" id="eventModalContainer" tabindex="-1">
      <button class="event-modal-close" onclick="closeEventRegistrationModal()" aria-label="Close modal">✕</button>

      <div style="text-align: center; margin-bottom: 1.5rem;">
        <span class="badge badge-emerald" style="margin-bottom: 0.5rem; display: inline-block;">Event Registration</span>
        <h2 id="modalTitle" style="color: var(--text-primary); font-size: clamp(1.4rem, 2.5vw, 1.75rem); margin: 0 0 0.35rem 0; font-weight: 800;">
          Register for This Event
        </h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height: 1.5;">
          Complete the form below to reserve your seat or enquire about this event.
        </p>
      </div>

      <div id="modalSuccessBanner" style="display: none; background: rgba(0, 200, 150, 0.12); border: 1px solid var(--accent-emerald); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; text-align: center;">
        <div style="color: var(--accent-emerald); font-weight: 700; font-size: 1rem; margin-bottom: 0.25rem;">✓ Registration Details Submitted!</div>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin: 0;">Opening WhatsApp to finalize your seat confirmation with CHRD Academy...</p>
      </div>

      <form id="popupRegistrationForm" novalidate>
        <!-- Hidden Event Identifiers -->
        <input type="hidden" id="modalEventId" value="${evt.id}">
        <input type="hidden" id="modalEventDate" value="${eventDateText}">

        <!-- Event Name (Read-Only) -->
        <div class="modal-form-group">
          <label class="modal-form-label">Event Name <span style="color: #FF6B6B;">*</span></label>
          <input type="text" id="modalEventName" class="modal-form-control" value="${eventTitle}" readonly>
        </div>

        <!-- Full Name -->
        <div class="modal-form-group">
          <label for="modalFullName" class="modal-form-label">Full Name <span style="color: #FF6B6B;">*</span></label>
          <input type="text" id="modalFullName" class="modal-form-control" placeholder="Enter your full name">
          <span id="err-fullName" class="modal-error-msg"></span>
        </div>

        <!-- Place & District Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;" class="grid-cols-2">
          <div class="modal-form-group">
            <label for="modalPlace" class="modal-form-label">Place / Town <span style="color: #FF6B6B;">*</span></label>
            <input type="text" id="modalPlace" class="modal-form-control" placeholder="e.g. Vengara">
            <span id="err-place" class="modal-error-msg"></span>
          </div>

          <div class="modal-form-group">
            <label for="modalDistrict" class="modal-form-label">District <span style="color: #FF6B6B;">*</span></label>
            <select id="modalDistrict" class="modal-form-control" style="cursor: pointer;">
              <option value="">-- Select District --</option>
              ${districtOptionsHtml}
            </select>
            <span id="err-district" class="modal-error-msg"></span>
          </div>
        </div>

        <!-- Mobile & Email Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;" class="grid-cols-2">
          <div class="modal-form-group">
            <label for="modalPhone" class="modal-form-label">Mobile Number <span style="color: #FF6B6B;">*</span></label>
            <input type="tel" id="modalPhone" class="modal-form-control" maxlength="10" placeholder="10-digit mobile number">
            <span id="err-phone" class="modal-error-msg"></span>
          </div>

          <div class="modal-form-group">
            <label for="modalEmail" class="modal-form-label">Email Address <span style="color: #FF6B6B;">*</span></label>
            <input type="email" id="modalEmail" class="modal-form-control" placeholder="name@example.com">
            <span id="err-email" class="modal-error-msg"></span>
          </div>
        </div>

        <!-- Optional Message -->
        <div class="modal-form-group">
          <label for="modalMessage" class="modal-form-label">Message / Enquiry <span style="font-weight: normal; color: var(--text-muted);">(Optional)</span></label>
          <textarea id="modalMessage" class="modal-form-control" rows="3" placeholder="Any questions or additional requirements..."></textarea>
        </div>

        <!-- Fallback Copy Card Container (If Popup Blocker Prevents Direct WhatsApp Open) -->
        <div id="whatsappFallbackCard" style="display: none; background: var(--secondary-bg); border: 1px solid var(--accent-emerald); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; text-align: left;">
          <div style="font-weight: 700; color: var(--accent-emerald); margin-bottom: 0.5rem; font-size: 0.9rem;">📲 WhatsApp Message Ready:</div>
          <textarea id="fallbackMsgText" class="modal-form-control" rows="7" readonly style="font-size: 0.82rem; margin-bottom: 0.75rem; background: rgba(0,0,0,0.3); font-family: monospace;"></textarea>
          <button type="button" onclick="copyWhatsAppMessage()" class="btn btn-secondary btn-sm" style="width: 100%; justify-content: center;">
            📋 Copy Message & Open WhatsApp
          </button>
        </div>

        <!-- Submit Button -->
        <button type="submit" id="modalSubmitBtn" class="btn btn-primary btn-md" style="width: 100%; justify-content: center; font-weight: 700; font-size: 1rem; padding: 0.85rem;">
          Register Now
        </button>
      </form>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Move focus into container
  const container = document.getElementById('eventModalContainer');
  if (container) container.focus();

  // Form Submission Event Handler
  const form = document.getElementById('popupRegistrationForm');
  if (form) {
    form.onsubmit = handleModalFormSubmit;
  }

  // Backdrop click closes popup
  modal.onclick = (e) => {
    if (e.target === modal) {
      closeEventRegistrationModal();
    }
  };

  // ESC key listener
  if (activeModalEscListener) {
    document.removeEventListener('keydown', activeModalEscListener);
  }
  activeModalEscListener = (e) => {
    if (e.key === 'Escape') {
      closeEventRegistrationModal();
    }
  };
  document.addEventListener('keydown', activeModalEscListener);
}

// Close Modal Handler
function closeEventRegistrationModal() {
  const modal = document.getElementById('eventRegistrationModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (activeModalEscListener) {
    document.removeEventListener('keydown', activeModalEscListener);
    activeModalEscListener = null;
  }
}

// Form Submission & Validation Engine
function handleModalFormSubmit(event) {
  event.preventDefault();

  // Clear previous errors
  document.querySelectorAll('.modal-error-msg').forEach(el => el.textContent = '');
  const globalErr = document.getElementById('modalGlobalError');
  if (globalErr) {
    globalErr.style.display = 'none';
    globalErr.textContent = '';
  }

  const eventId = document.getElementById('modalEventId').value;
  const eventName = document.getElementById('modalEventName').value.trim();
  const eventDate = document.getElementById('modalEventDate').value;
  const name = document.getElementById('modalFullName').value.trim();
  const place = document.getElementById('modalPlace').value.trim();
  const district = document.getElementById('modalDistrict').value;
  const phone = document.getElementById('modalPhone').value.trim();
  const email = document.getElementById('modalEmail').value.trim();
  const message = document.getElementById('modalMessage').value.trim();

  let hasError = false;

  // Validation 1: Full Name
  if (!name) {
    document.getElementById('err-fullName').textContent = 'Full Name is required';
    hasError = true;
  }

  // Validation 2: Place
  if (!place) {
    document.getElementById('err-place').textContent = 'Place / Town is required';
    hasError = true;
  }

  // Validation 3: District
  if (!district) {
    document.getElementById('err-district').textContent = 'Please select a district';
    hasError = true;
  }

  // Validation 4: Mobile Number (Exactly 10 digits)
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phone) {
    document.getElementById('err-phone').textContent = 'Mobile Number is required';
    hasError = true;
  } else if (!phoneRegex.test(phone)) {
    document.getElementById('err-phone').textContent = 'Please enter a valid 10-digit mobile number';
    hasError = true;
  }

  // Validation 5: Email Address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document.getElementById('err-email').textContent = 'Email Address is required';
    hasError = true;
  } else if (!emailRegex.test(email)) {
    document.getElementById('err-email').textContent = 'Please enter a valid email address';
    hasError = true;
  }

  if (hasError) return;

  const nowTime = new Date().getTime();

  // Step 2: Prepare Registration Record Object
  const registrationRecord = {
    id: `REG-${nowTime}-${Math.floor(1000 + Math.random() * 9000)}`,
    submittedAt: new Date().toISOString(),
    eventId: eventId,
    eventName: eventName,
    name: name,
    place: place,
    district: district,
    phone: phone,
    email: email,
    message: message,
    status: "New"
  };

  // Save registration record locally (modular for future backend integration)
  const existingRegistrations = JSON.parse(localStorage.getItem('chrd_event_registrations') || '[]');
  existingRegistrations.push(registrationRecord);
  localStorage.setItem('chrd_event_registrations', JSON.stringify(existingRegistrations));

  // Set Submitting state on button
  const submitBtn = document.getElementById('modalSubmitBtn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
  }

  // Step 3: Format Professional WhatsApp Pre-filled Message
  const whatsappMessage = `Hello CHRD Training Academy,

I would like to register for the following event.

*EVENT DETAILS*
Event: ${eventName}

*PERSONAL DETAILS*
Name: ${name}
Place: ${place}
District: ${district}
Mobile: ${phone}
Email: ${email}
${message ? `\nMessage:\n${message}\n` : ''}
Kindly confirm my registration.

Thank you.`;

  window.lastWhatsAppMsg = whatsappMessage;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/919383442028?text=${encodedMessage}`;

  // Step 4: Show Success Banner & Trigger WhatsApp Redirect
  const successBanner = document.getElementById('modalSuccessBanner');
  if (successBanner) {
    successBanner.style.display = 'block';
  }

  setTimeout(() => {
    const win = window.open(whatsappUrl, '_blank');

    // If popup blocker prevents window.open, show Copy Message fallback card
    if (!win || win.closed || typeof win.closed === 'undefined') {
      const fallbackCard = document.getElementById('whatsappFallbackCard');
      const fallbackText = document.getElementById('fallbackMsgText');
      if (fallbackCard && fallbackText) {
        fallbackText.value = whatsappMessage;
        fallbackCard.style.display = 'block';
      }
    } else {
      // Clear form and close modal after short delay
      setTimeout(() => {
        closeEventRegistrationModal();
      }, 1500);
    }
  }, 600);
}

// Copy WhatsApp Message Handler for Fallback
function copyWhatsAppMessage() {
  const fallbackText = document.getElementById('fallbackMsgText');
  if (fallbackText) {
    fallbackText.select();
    navigator.clipboard.writeText(fallbackText.value).then(() => {
      alert("✓ Message copied to clipboard! Opening WhatsApp...");
      window.open('https://wa.me/919383442028', '_blank');
      closeEventRegistrationModal();
    }).catch(() => {
      window.open('https://wa.me/919383442028', '_blank');
      closeEventRegistrationModal();
    });
  }
}

let activeGeneralModalEscListener = null;

// Open General Event Enquiry Popup Modal (Independent Component)
function openGeneralEventEnquiryModal() {
  let modal = document.getElementById('generalEventEnquiryModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'generalEventEnquiryModal';
    modal.className = 'event-modal-overlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'generalModalTitle');
    document.body.appendChild(modal);
  }

  const districtOptionsHtml = KERALA_DISTRICTS.map(d => `<option value="${d}">${d}</option>`).join('');

  modal.innerHTML = `
    <div class="event-modal-container" id="generalModalContainer" tabindex="-1">
      <button class="event-modal-close" onclick="closeGeneralEventEnquiryModal()" aria-label="Close modal">✕</button>

      <div style="text-align: center; margin-bottom: 1.5rem;">
        <span class="badge badge-purple" style="margin-bottom: 0.5rem; display: inline-block;">General Enquiry</span>
        <h2 id="generalModalTitle" style="color: var(--text-primary); font-size: clamp(1.4rem, 2.5vw, 1.75rem); margin: 0 0 0.35rem 0; font-weight: 800;">
          General Event Enquiry
        </h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height: 1.5;">
          Interested in an upcoming workshop, seminar, certification programme, or training course? Complete the form below and our team will contact you.
        </p>
      </div>

      <div id="genEnquirySuccessBanner" style="display: none; background: rgba(0, 200, 150, 0.12); border: 1px solid var(--accent-emerald); border-radius: var(--radius-md); padding: 0.85rem; margin-bottom: 1.25rem; text-align: center; font-size: 0.88rem; color: var(--accent-emerald);">
        ✓ Your enquiry has been prepared. You will now be redirected to WhatsApp.
      </div>

      <form id="generalEventEnquiryForm" onsubmit="handleGeneralEnquirySubmit(event)" novalidate>
        
        <!-- Full Name & Place Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;" class="grid-cols-2">
          <div class="modal-form-group">
            <label for="genFullName" class="modal-form-label">Full Name <span style="color: #FF6B6B;">*</span></label>
            <input type="text" id="genFullName" class="modal-form-control" placeholder="Enter your full name">
            <span id="err-genFullName" class="modal-error-msg"></span>
          </div>

          <div class="modal-form-group">
            <label for="genPlace" class="modal-form-label">Place / Town <span style="color: #FF6B6B;">*</span></label>
            <input type="text" id="genPlace" class="modal-form-control" placeholder="e.g. Vengara">
            <span id="err-genPlace" class="modal-error-msg"></span>
          </div>
        </div>

        <!-- District & Mobile Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;" class="grid-cols-2">
          <div class="modal-form-group">
            <label for="genDistrict" class="modal-form-label">District <span style="color: #FF6B6B;">*</span></label>
            <select id="genDistrict" class="modal-form-control" style="cursor: pointer;">
              <option value="">-- Select District --</option>
              ${districtOptionsHtml}
            </select>
            <span id="err-genDistrict" class="modal-error-msg"></span>
          </div>

          <div class="modal-form-group">
            <label for="genPhone" class="modal-form-label">Mobile Number <span style="color: #FF6B6B;">*</span></label>
            <input type="tel" id="genPhone" class="modal-form-control" maxlength="10" placeholder="10-digit mobile number">
            <span id="err-genPhone" class="modal-error-msg"></span>
          </div>
        </div>

        <!-- Email & Interested Programme Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;" class="grid-cols-2">
          <div class="modal-form-group">
            <label for="genEmail" class="modal-form-label">Email Address <span style="color: #FF6B6B;">*</span></label>
            <input type="email" id="genEmail" class="modal-form-control" placeholder="name@example.com">
            <span id="err-genEmail" class="modal-error-msg"></span>
          </div>

          <div class="modal-form-group">
            <label for="genInterested" class="modal-form-label">Interested Course / Programme <span style="font-weight: normal; color: var(--text-muted);">(Optional)</span></label>
            <input type="text" id="genInterested" class="modal-form-control" placeholder="e.g. Public Speaking / Teacher Training">
          </div>
        </div>

        <!-- Preferred Month -->
        <div class="modal-form-group">
          <label for="genMonth" class="modal-form-label">Preferred Month <span style="font-weight: normal; color: var(--text-muted);">(Optional)</span></label>
          <input type="text" id="genMonth" class="modal-form-control" placeholder="e.g. September 2026 / October 2026">
        </div>

        <!-- Message / Enquiry -->
        <div class="modal-form-group" style="margin-bottom: 1.5rem;">
          <label for="genMessage" class="modal-form-label">Message / Enquiry <span style="color: #FF6B6B;">*</span></label>
          <textarea id="genMessage" class="modal-form-control" rows="3" placeholder="I would like to know when the next Public Speaking Workshop or Teacher Training Programme will be conducted."></textarea>
          <span id="err-genMessage" class="modal-error-msg"></span>
        </div>

        <!-- Submit Button -->
        <button type="submit" id="genSubmitBtn" class="btn btn-primary btn-md" style="width: 100%; justify-content: center; font-weight: 700; font-size: 1rem; padding: 0.85rem;">
          Send Enquiry →
        </button>
      </form>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  const container = document.getElementById('generalModalContainer');
  if (container) container.focus();

  modal.onclick = (e) => {
    if (e.target === modal) {
      closeGeneralEventEnquiryModal();
    }
  };

  if (activeGeneralModalEscListener) {
    document.removeEventListener('keydown', activeGeneralModalEscListener);
  }
  activeGeneralModalEscListener = (e) => {
    if (e.key === 'Escape') {
      closeGeneralEventEnquiryModal();
    }
  };
  document.addEventListener('keydown', activeGeneralModalEscListener);
}

// Close General Event Enquiry Modal Handler
function closeGeneralEventEnquiryModal() {
  const modal = document.getElementById('generalEventEnquiryModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (activeGeneralModalEscListener) {
    document.removeEventListener('keydown', activeGeneralModalEscListener);
    activeGeneralModalEscListener = null;
  }
}

// General Event Enquiry Form Submission Handler
function handleGeneralEnquirySubmit(event) {
  event.preventDefault();

  // Clear previous errors
  ['genFullName', 'genPlace', 'genDistrict', 'genPhone', 'genEmail', 'genMessage'].forEach(id => {
    const errEl = document.getElementById(`err-${id}`);
    if (errEl) errEl.textContent = '';
  });

  const name = document.getElementById('genFullName').value.trim();
  const place = document.getElementById('genPlace').value.trim();
  const district = document.getElementById('genDistrict').value;
  const phone = document.getElementById('genPhone').value.trim();
  const email = document.getElementById('genEmail').value.trim();
  const interestedProgramme = document.getElementById('genInterested').value.trim();
  const preferredMonth = document.getElementById('genMonth').value.trim();
  const message = document.getElementById('genMessage').value.trim();

  let hasError = false;

  if (!name) {
    document.getElementById('err-genFullName').textContent = 'Full Name is required';
    hasError = true;
  }

  if (!place) {
    document.getElementById('err-genPlace').textContent = 'Place / Town is required';
    hasError = true;
  }

  if (!district) {
    document.getElementById('err-genDistrict').textContent = 'Please select a district';
    hasError = true;
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phone) {
    document.getElementById('err-genPhone').textContent = 'Mobile Number is required';
    hasError = true;
  } else if (!phoneRegex.test(phone)) {
    document.getElementById('err-genPhone').textContent = 'Please enter a valid 10-digit mobile number';
    hasError = true;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document.getElementById('err-genEmail').textContent = 'Email Address is required';
    hasError = true;
  } else if (!emailRegex.test(email)) {
    document.getElementById('err-genEmail').textContent = 'Please enter a valid email address';
    hasError = true;
  }

  if (!message) {
    document.getElementById('err-genMessage').textContent = 'Message / Enquiry is required';
    hasError = true;
  }

  if (hasError) return;

  const nowTime = new Date().getTime();

  // Save general enquiry record locally (modular for future backend integration)
  const enquiryRecord = {
    id: `GEN-ENQ-${nowTime}-${Math.floor(1000 + Math.random() * 9000)}`,
    submittedAt: new Date().toISOString(),
    name: name,
    place: place,
    district: district,
    phone: phone,
    email: email,
    interestedProgramme: interestedProgramme || 'General Upcoming Programmes',
    preferredMonth: preferredMonth || 'Flexible',
    message: message,
    status: 'New'
  };

  const existingEnquiries = JSON.parse(localStorage.getItem('chrd_general_enquiries') || '[]');
  existingEnquiries.push(enquiryRecord);
  localStorage.setItem('chrd_general_enquiries', JSON.stringify(existingEnquiries));

  const submitBtn = document.getElementById('genSubmitBtn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
  }

  const whatsappMessage = `Hello CHRD Training Academy,

I would like to enquire about your upcoming programmes.

Name: ${name}
Place: ${place}
District: ${district}
Mobile: ${phone}
Email: ${email}

Interested Programme: ${interestedProgramme || 'General Upcoming Programmes'}
Preferred Month: ${preferredMonth || 'Flexible'}

Message:
${message}

Please inform me when registrations open.

Thank you.`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/919383442028?text=${encodedMessage}`;

  const successBanner = document.getElementById('genEnquirySuccessBanner');
  if (successBanner) {
    successBanner.style.display = 'block';
  }

  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
    closeGeneralEventEnquiryModal();
  }, 700);
}

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderUpcomingEventsGrid();
});

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  renderUpcomingEventsGrid();
}
