/* CHRD Training Academy - Dynamic Blog Search & Filter Controller */

document.addEventListener('DOMContentLoaded', () => {
  const blogCategoriesContainer = document.getElementById('blogCategories');
  const sidebarCategoriesList = document.getElementById('sidebarCategoriesList');
  const blogCards = document.querySelectorAll('.blog-post-card');
  const searchInput = document.getElementById('blogSearchInput');
  const sidebarSearch = document.getElementById('sidebarSearch');
  const loadMoreBtn = document.getElementById('loadMoreBlogBtn');

  // Category Display Name Mapping
  const categoryNames = {
    'all': 'All',
    'career': 'Career Guidance',
    'education': 'Education',
    'skills': 'Skill Development',
    'news': 'Academy News',
    'digital': 'Digital Skills',
    'teaching': 'Teacher Training',
    'healthcare': 'Healthcare Admin',
    'legal-studies': 'Legal Studies'
  };

  // 1. Automatically inspect published blogs and gather category usage & counts
  const categoryCounts = {};
  blogCards.forEach(card => {
    const cat = card.getAttribute('data-category');
    if (cat) {
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    }
  });

  // 2. Dynamically build top category filter buttons (if container exists)
  if (blogCategoriesContainer) {
    let filterHTML = `<button class="btn btn-sm btn-primary category-btn active" data-category="all">All</button>`;
    
    Object.keys(categoryCounts).forEach(cat => {
      if (categoryCounts[cat] > 0) {
        const displayName = categoryNames[cat] || (cat.charAt(0).toUpperCase() + cat.slice(1));
        filterHTML += ` <button class="btn btn-sm btn-outline-white category-btn" data-category="${cat}">${displayName}</button>`;
      }
    });

    blogCategoriesContainer.innerHTML = filterHTML;
  }

  // 3. Dynamically build sidebar categories list (if container exists)
  if (sidebarCategoriesList) {
    let sidebarHTML = '';
    Object.keys(categoryCounts).forEach(cat => {
      if (categoryCounts[cat] > 0) {
        const displayName = categoryNames[cat] || (cat.charAt(0).toUpperCase() + cat.slice(1));
        const count = categoryCounts[cat];
        sidebarHTML += `<li style="display: flex; justify-content: space-between;"><a href="javascript:void(0)" class="category-link" data-category="${cat}" style="color: var(--text-secondary); text-decoration: none;">${displayName}</a> <span style="color: var(--accent-emerald); font-weight: 700;">(${count})</span></li>`;
      }
    });

    if (sidebarHTML === '') {
      sidebarHTML = `<li style="color: var(--text-muted); font-size: 0.85rem;">No active categories</li>`;
    }

    sidebarCategoriesList.innerHTML = sidebarHTML;
  }

  // 4. Query newly rendered filter buttons and links
  const categoryBtns = document.querySelectorAll('.category-btn');
  const categoryLinks = document.querySelectorAll('.category-link');

  // Filter function
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

  // Bind top filter button clicks
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      filterByCategory(category);
    });
  });

  // Bind sidebar category link clicks
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.getAttribute('data-category');
      filterByCategory(category);
      window.scrollTo({ top: 200, behavior: 'smooth' });
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
