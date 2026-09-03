/* CHRD Training Academy - Gallery Filter & Lightbox Controller */

document.addEventListener('DOMContentLoaded', () => {
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryEmptyState = document.getElementById('galleryEmptyState');
  const galleryGrid = document.querySelector('.gallery-grid');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  function updateGalleryFilter(filter) {
    let visibleCount = 0;

    galleryItems.forEach(item => {
      const img = item.querySelector('img');
      const itemCategory = item.getAttribute('data-category');

      // Only display items that contain an actual <img> tag
      if (img && (filter === 'all' || itemCategory === filter)) {
        item.style.display = 'block';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    // Handle Empty State display
    if (galleryEmptyState) {
      if (visibleCount === 0) {
        galleryEmptyState.style.display = 'block';
        if (galleryGrid) galleryGrid.style.display = 'none';
      } else {
        galleryEmptyState.style.display = 'none';
        if (galleryGrid) galleryGrid.style.display = 'grid';
      }
    }
  }

  // Bind category filter buttons if present
  if (galleryFilterBtns.length > 0) {
    galleryFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        galleryFilterBtns.forEach(b => b.classList.remove('btn-primary'));
        galleryFilterBtns.forEach(b => b.classList.add('btn-secondary'));
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');

        const filter = btn.getAttribute('data-filter');
        updateGalleryFilter(filter);
      });
    });
  }

  // Initial check on load to show all gallery items
  updateGalleryFilter('all');

  // Lightbox click handler (Click real image to view full screen modal without text/captions)
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightboxModal && lightboxImage) {
        lightboxImage.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.innerText = '';
          lightboxCaption.style.display = 'none';
        }
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose && lightboxModal) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
