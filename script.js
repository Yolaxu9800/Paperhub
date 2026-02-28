const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const digestLinks = document.querySelectorAll('.digest-card');

digestLinks.forEach((link) => {
  link.addEventListener('click', () => {
    digestLinks.forEach((card) => card.classList.remove('active'));
    link.classList.add('active');
  });
});
