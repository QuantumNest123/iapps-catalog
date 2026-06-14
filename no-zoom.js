// Предотвращение масштабирования на мобильных устройствах
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

document.addEventListener('touchmove', function (e) {
  if (e.scale !== 1) {
    e.preventDefault();
  }
}, { passive: false });

// Предотвращение масштабирования при двойном тапе
let lastTouchEnd = 0;
document.addEventListener('touchend', function (e) {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    e.preventDefault();
  }
  lastTouchEnd = now;
}, { passive: false }); 