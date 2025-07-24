// 🎬 Fade-Out Page Transition on Link Click
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Ignore anchor/hash links
    if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      e.preventDefault();
      document.body.classList.add('fade-out');

      // Delay navigation to allow animation
      setTimeout(() => {
        window.location.href = href;
      }, 500); // matches CSS fadeOutPage duration
    }
  });
});

// ✨ Optional: Scroll to top on page load
window.scrollTo({ top: 0, behavior: 'smooth' });
