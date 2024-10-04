          // Active link underline
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });

  // Optional: Show/hide navbar on scroll
  document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
      let navbar = document.querySelector('.navbar');
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden'); // Scroll ke bawah, sembunyikan
      } else {
        navbar.classList.remove('hidden'); // Scroll ke atas, tampilkan
      }
      lastScrollTop = scrollTop;
    });
  });
  