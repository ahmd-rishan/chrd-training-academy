/* CHRD Training Academy - Blog Search & Filter Controller */

document.addEventListener('DOMContentLoaded', () => {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const blogCards = document.querySelectorAll('.blog-post-card');
  const searchInput = document.getElementById('blogSearchInput');
  const sidebarSearch = document.getElementById('sidebarSearch');
  const categoryLinks = document.querySelectorAll('.category-link');
  const loadMoreBtn = document.getElementById('loadMoreBlogBtn');

  // Filter by category
  function filterByCategory(category) {
    // Update active button state
    categoryBtns.forEach(btn => {
      if (btn.getAttribute('data-category') === category) {
        btn.classList.add('btn-primary', 'active');
        btn.classList.remove('btn-outline-white');
      } else {
        btn.classList.remove('btn-primary', 'active');
        btn.classList.add('btn-outline-white');
      }
    });

    // Filter cards
    blogCards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Bind category button clicks
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      filterByCategory(category);
    });
  });

  // Bind sidebar category links
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.getAttribute('data-category');
      filterByCategory(category);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    });
  });

  // Real-time search filter function
  function handleSearch(query) {
    const term = query.toLowerCase().trim();
    blogCards.forEach(card => {
      const title = card.querySelector('.course-title').innerText.toLowerCase();
      const desc = card.querySelector('.course-desc').innerText.toLowerCase();

      if (title.includes(term) || desc.includes(term)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      handleSearch(e.target.value);
    });
  }

  if (sidebarSearch) {
    sidebarSearch.addEventListener('input', (e) => {
      handleSearch(e.target.value);
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      loadMoreBtn.innerText = 'All Articles Loaded';
      loadMoreBtn.disabled = true;
      loadMoreBtn.style.opacity = '0.6';
    });
  }
});
