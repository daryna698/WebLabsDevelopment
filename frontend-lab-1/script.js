// script.js — мінімальна інтерактивність для ЛР-1:
// 1) перемикач теми (light/dark) зі збереженням вибору в localStorage
// 2) лічильник з кнопками +/-

(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const toggleLabel = toggleBtn.querySelector('.theme-toggle__label');
  const toggleIcon = toggleBtn.querySelector('.theme-toggle__icon');
  const STORAGE_KEY = 'frontend-lab-1-theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      toggleBtn.setAttribute('aria-pressed', 'true');
      toggleLabel.textContent = 'Світла тема';
      toggleIcon.textContent = '☀';
    } else {
      root.removeAttribute('data-theme');
      toggleBtn.setAttribute('aria-pressed', 'false');
      toggleLabel.textContent = 'Темна тема';
      toggleIcon.textContent = '☾';
    }
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  let currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  toggleBtn.addEventListener('click', function () {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem(STORAGE_KEY, currentTheme);
  });

  // Лічильник
  const counterValue = document.getElementById('counter-value');
  const incrementBtn = document.getElementById('increment');
  const decrementBtn = document.getElementById('decrement');
  let count = 0;

  function renderCount() {
    counterValue.textContent = String(count);
  }

  incrementBtn.addEventListener('click', function () {
    count += 1;
    renderCount();
  });

  decrementBtn.addEventListener('click', function () {
    count -= 1;
    renderCount();
  });

  // Рік у футері
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
