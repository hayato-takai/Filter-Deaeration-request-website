/**
 * app.js — Navigation Controller & Transition Engine
 * Manages the SlideModules registry, renders slides into the viewport,
 * handles directional CSS transitions, keyboard navigation, and dot/button UI.
 */

(function () {
  'use strict';

  /* ── State ─────────────────────────────────────────────────────────── */
  let currentIndex = 0;         // active slide index
  let isAnimating  = false;     // guard against rapid clicks
  const TRANSITION_DURATION = 380; // ms — must match CSS --transition-dur

  /* ── DOM References ─────────────────────────────────────────────────── */
  const viewport   = document.getElementById('slide-viewport');
  const btnPrev    = document.getElementById('btn-prev');
  const btnNext    = document.getElementById('btn-next');
  const dotsWrap   = document.getElementById('nav-dots');
  const counter    = document.getElementById('slide-counter');

  /* ── Validate modules ───────────────────────────────────────────────── */
  const slides = window.SlideModules;

  if (!Array.isArray(slides) || slides.length === 0) {
    viewport.innerHTML = '<p style="color:var(--clr-danger);padding:40px">Error: No slide modules found.</p>';
    return;
  }

  const total = slides.length;

  /* ── Build dot indicators ───────────────────────────────────────────── */
  function buildDots() {
    dotsWrap.innerHTML = '';
    slides.forEach((slide, i) => {
      const dot = document.createElement('button');
      dot.className   = 'nav-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}: ${slide.title}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
  }

  /* ── Update dot + counter + button states ───────────────────────────── */
  function updateUI(index) {
    // Dots
    dotsWrap.querySelectorAll('.nav-dot').forEach((d, i) => {
      d.classList.toggle('active', i === index);
      d.setAttribute('aria-selected', i === index);
    });
    // Counter
    counter.textContent = `Slide ${index + 1} of ${total}`;
    // Buttons
    btnPrev.disabled = (index === 0);
    btnNext.disabled = (index === total - 1);
  }

  /* ── Render a slide into a fresh container element ──────────────────── */
  function createSlideEl(slideModule) {
    const el = document.createElement('div');
    el.className = 'slide-container';
    el.innerHTML = slideModule.getHTML();
    return el;
  }

  /* ── Transition engine ──────────────────────────────────────────────── */
  /**
   * Navigate to a target slide index with a directional CSS transition.
   * @param {number} targetIndex
   */
  function goTo(targetIndex) {
    if (isAnimating || targetIndex === currentIndex) return;
    if (targetIndex < 0 || targetIndex >= total)    return;

    isAnimating = true;

    const direction  = targetIndex > currentIndex ? 'forward' : 'backward';
    const oldEl      = viewport.querySelector('.slide-container');
    const newModule  = slides[targetIndex];
    const newEl      = createSlideEl(newModule);

    // Position new slide off-screen in the correct direction
    newEl.classList.add(direction === 'forward' ? 'slide-enter-right' : 'slide-enter-left');
    viewport.appendChild(newEl);

    // Force reflow so the initial transform is rendered before transition starts
    void newEl.offsetWidth;

    // Slide old element out
    if (oldEl) {
      oldEl.classList.add(direction === 'forward' ? 'slide-exit-left' : 'slide-exit-right');
    }

    // Slide new element in
    newEl.classList.remove('slide-enter-right', 'slide-enter-left');
    newEl.classList.add('slide-active');

    // After transition completes: clean up, init new slide
    setTimeout(() => {
      if (oldEl && oldEl.parentNode) oldEl.remove();
      newEl.classList.remove('slide-active'); // keep styling without the class for cleanliness

      currentIndex = targetIndex;
      updateUI(currentIndex);

      // Call the slide's init hook so interactive elements can attach listeners
      if (typeof newModule.init === 'function') {
        newModule.init(newEl);
      }
      if (window.lucide) lucide.createIcons();

      isAnimating = false;
    }, TRANSITION_DURATION + 20);
  }

  /* ── Button listeners ───────────────────────────────────────────────── */
  btnPrev.addEventListener('click', () => goTo(currentIndex - 1));
  btnNext.addEventListener('click', () => goTo(currentIndex + 1));

  /* ── Keyboard navigation ────────────────────────────────────────────── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goTo(currentIndex + 1);
    if (e.key === 'ArrowLeft')  goTo(currentIndex - 1);
  });

  /* ── Initial render ─────────────────────────────────────────────────── */
  function init() {
    buildDots();

    // Render first slide directly (no transition)
    const firstEl = createSlideEl(slides[0]);
    firstEl.classList.add('slide-active');
    viewport.appendChild(firstEl);

    updateUI(0);

    if (typeof slides[0].init === 'function') {
      slides[0].init(firstEl);
    }
    if (window.lucide) lucide.createIcons();
  }

  init();

  /* ── Public API — allows slides to trigger navigation ───────────────── */
  window.AppController = {
    goTo,
    restart: () => goTo(0),
    current: () => currentIndex,
    total:   () => total,
  };

}());
