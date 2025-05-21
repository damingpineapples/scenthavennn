const container = document.querySelector('.products');
document.querySelector('.scroll-btn.left').addEventListener('click', () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
});
document.querySelector('.scroll-btn.right').addEventListener('click', () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
});
