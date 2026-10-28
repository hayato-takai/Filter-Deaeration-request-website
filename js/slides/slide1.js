/**
 * slide1.js — Get Started
 * Interactive element: staggered fade-in for takeaway cards on load,
 * radial glow pulse on CTA button hover, and confetti burst on primary CTA click.
 */

window.SlideModules = window.SlideModules || [];

window.SlideModules.push({
  title: 'Get Started',
  
  getHTML() {
    return /* html */`
      <div class="slide-inner" style="
        min-height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;
        gap:clamp(32px, 6vh, 64px); text-align:center;">

        <!-- Hero: headline, value proposition -->
        <div>
          <h1 class="slide-title" style="font-size:clamp(2rem,4vw,3rem); margin-bottom:16px;">
            Ready to <span class="accent">Filter Optimize</span><br>Your System?
          </h1>

          <p style="
            max-width:680px; margin:0 auto; font-size:1rem;
            color:var(--clr-text-muted); line-height:1.75;">
            Our simulation capability means your hydraulic tank is assessed, optimized, and validated
            before a single prototype is committed to manufacturing.
          </p>
        </div>

        <!-- Three takeaway cards — staggered fade-in via JS -->
        <div id="s6-cards" style="display:grid; grid-template-columns:repeat(3,1fr); gap:20px; width:100%; max-width:900px; text-align:left;">

          <div class="card s6-card" style="opacity:0; transform:translateY(20px); transition:opacity .5s ease, transform .5s ease; border:1px solid var(--clr-primary); box-shadow:none;">
            <div style="font-weight:700; margin-bottom:6px;">Simulation-First,<br>Zero Prototype Risk</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.6;">
              Our fluid dynamics methods identifies and solves design issues entirely in the prototype stage.
              no costly physical iteration cycles.
            </p>
          </div>

          <div class="card s6-card" style="opacity:0; transform:translateY(20px); transition:opacity .5s ease, transform .5s ease; border:1px solid var(--clr-secondary); box-shadow:none; transition-delay:.15s;">
            <div style="font-weight:700; margin-bottom:6px;">Free Analysis Package</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.6;">
              Speak with our engineering team to receive a comprehensive analysis at no cost. 
            </p>
          </div>

          <div class="card s6-card" style="opacity:0; transform:translateY(20px); transition:opacity .5s ease, transform .5s ease; border:1px solid var(--clr-amber); box-shadow:none; transition-delay:.3s;">
            <div style="font-weight:700; margin-bottom:6px;">Fast Turnaround,<br>Actionable Results</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.6;">
              Results delivered with clear recommendations your engineering team can act on immediately
              to reduce volume, weight, and cost.
            </p>
          </div>

        </div>

        <!-- Summary metric strip -->
        <div style="
          display:grid; grid-template-columns:repeat(3,1fr);
          gap:24px; padding:24px 32px;
          background:var(--clr-surface); border:1px solid var(--clr-border);
          border-radius:12px; max-width:900px; width:100%;">
          <div>
            <div class="stat-num">Up to 75%</div>
            <div style="font-size:0.75rem; color:var(--clr-text-muted); font-family:monospace; text-transform:uppercase; letter-spacing:.08em; margin-top:4px;">Oil Reduction</div>
          </div>
          <div>
            <div class="stat-num" style="color:var(--clr-secondary);">63</div>
            <div style="font-size:0.75rem; color:var(--clr-text-muted); font-family:monospace; text-transform:uppercase; letter-spacing:.08em; margin-top:4px;">Years of experience</div>
          </div>
          <div>
            <div class="stat-num" style="color:var(--clr-amber);">0</div>
            <div style="font-size:0.75rem; color:var(--clr-text-muted); font-family:monospace; text-transform:uppercase; letter-spacing:.08em; margin-top:4px;">Prototypes Needed</div>
          </div>
        </div>

        <!-- CTA buttons row -->
        <div style="display:flex; align-items:center; justify-content:center; gap:16px; flex-wrap:wrap;">
          <button id="s6-download" class="btn-primary">
                        <i data-lucide="download" style="width:15px;height:15px;vertical-align:-2px;stroke-width:2;"></i> Download Request Form
          </button>
          <a href="https://www.hydac.com/en-us/contact-finder/" class="btn-secondary">
                        <i data-lucide="mail" style="width:15px;height:15px;vertical-align:-2px;stroke-width:2;"></i> Contact Our Engineering Team
          </a>
          <button id="s6-learn-more" class="btn-secondary">
            Learn More <i data-lucide="arrow-right" style="width:15px;height:15px;vertical-align:-2px;stroke-width:2;"></i>
          </button>
        </div>

        <style>
        </style>
      </div>
    `;
  },

  /**
   * init — staggered card fade-in, download handler, confetti, restart button.
   * @param {HTMLElement} el
   */
  init(el) {
    /* ── Staggered card fade-in ─────────────────────────────────── */
    const cards = el.querySelectorAll('.s6-card');
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity   = '1';
        card.style.transform = 'translateY(0)';
      }, 200 + i * 160);
    });

    /* ── Learn More button ──────────────────────────────────────── */
    el.querySelector('#s6-learn-more').addEventListener('click', () => {
      window.AppController.goTo(window.AppController.current() + 1);
    });

    /* ── Download button ────────────────────────────────────────── */
    const downloadBtn = el.querySelector('#s6-download');
    const csvContent  = this._csvContent;

    downloadBtn.addEventListener('click', () => {
      const a    = document.createElement('a');
      a.href     = 'components/F-0262_03_Hydac_Tank_Opti_Request_Form.xlsx';
      a.download = 'F-0262_03_Hydac_Tank_Opti_Request_Form.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });



  }
});
