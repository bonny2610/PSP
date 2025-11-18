
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

  document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  

  function toggleMoreMenu() {
    const dropdown = document.querySelector('.more-menu .dropdown');
    dropdown.classList.toggle('hidden');
  }

  // Đóng dropdown khi click ra ngoài
  document.addEventListener('click', function(e) {
    const moreMenu = document.querySelector('.more-menu');
    if (!moreMenu.contains(e.target)) {
      document.querySelector('.more-menu .dropdown').classList.add('hidden');
    }
  });
  

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.slide-left, .slide-right').forEach(el => {
    observer.observe(el);
  });
