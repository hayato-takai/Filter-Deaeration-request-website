/**
 * slide6.js — Get Started
 * Interactive element: staggered fade-in for takeaway cards on load,
 * radial glow pulse on CTA button hover, and confetti burst on primary CTA click.
 */

window.SlideModules = window.SlideModules || [];

window.SlideModules.push({
  title: 'Get Started',

  /** Same CSV as slide5 — reused for the download CTA */
  _csvContent: [
    'HYDAC Tank Deaeration Analysis — Submission Template',
    'Generated: ' + new Date().toISOString().split('T')[0],
    '',
    'Section,Field,Value,Notes',
    'Project Info,Customer Name,,',
    'Project Info,Project Reference,,',
    'Project Info,Submission Date,,',
    'Project Info,HYDAC Contact,,',
    '',
    'Tank Geometry,Tank Internal Volume (L),,',
    'Tank Geometry,Tank Length (mm),,',
    'Tank Geometry,Tank Width (mm),,',
    'Tank Geometry,Tank Height (mm),,',
    '',
    'Port Details,Return Port Count,,',
    'Port Details,Return Port Diameter(s) (mm),,',
    'Port Details,Suction Port Diameter(s) (mm),,',
    'Port Details,Suction Port Depth Below Surface (mm),,',
    '',
    'Operating Conditions,Nominal Flow Rate (L/min),,',
    'Operating Conditions,Maximum Flow Rate (L/min),,',
    'Operating Conditions,Oil Type / Grade,,',
    '',
    'Supplied Files,Tank Opti Sheet (Excel),,Mandatory',
    'Supplied Files,Port Diagram,,Mandatory',
    'Supplied Files,CAD Model (STEP/IGES),,Mandatory',
    'Supplied Files,SpaceClaim / Photos,,Recommended',
    'Supplied Files,Acceleration / Drive Cycle Data,,Required for sloshing',
  ].join('\n'),

  getHTML() {
    return /* html */`
      <div class="slide-inner" style="text-align:center; padding-top:20px;">

        <!-- Section tag -->
        <div class="section-tag" style="display:inline-block;">Module 06 — Get Started</div>

        <!-- Hero headline -->
        <h1 class="slide-title" style="font-size:clamp(2rem,4vw,3rem); margin-bottom:16px;">
          Ready to <span class="accent">Optimise</span><br>Your System?
        </h1>

        <!-- Value proposition paragraph -->
        <p style="
          max-width:680px; margin:0 auto 36px; font-size:1rem;
          color:var(--clr-text-muted); line-height:1.75;">
          Our simulation-first approach means your hydraulic tank is assessed, optimised, and validated
          entirely in the digital domain — before a single prototype is committed to manufacture.
          One submission package delivers a complete deaeration analysis: velocity fields, bubble trajectories,
          port geometry validation, and sloshing confirmation.
        </p>

        <!-- CTA buttons row -->
        <div style="display:flex; align-items:center; justify-content:center; gap:16px; flex-wrap:wrap; margin-bottom:48px;">
          <button id="s6-download" class="btn-primary">
                        <i data-lucide="download" style="width:15px;height:15px;vertical-align:-2px;stroke-width:2;"></i> Download Request Form
          </button>
          <a href="https://www.hydac.com/en-us/contact-finder/" class="btn-secondary">
                        <i data-lucide="mail" style="width:15px;height:15px;vertical-align:-2px;stroke-width:2;"></i> Contact Our Engineering Team
          </a>
        </div>

        <!-- Three takeaway cards — staggered fade-in via JS -->
        <div id="s6-cards" style="display:grid; grid-template-columns:repeat(3,1fr); gap:20px; max-width:900px; margin:0 auto 36px; text-align:left;">

          <div class="card s6-card" style="opacity:0; transform:translateY(20px); transition:opacity .5s ease, transform .5s ease; border:1px solid var(--clr-primary);">
            <div style="margin-bottom:10px; color:var(--clr-primary);"><i data-lucide="microscope" style="width:28px;height:28px;stroke-width:1.75;"></i></div>
            <div style="font-weight:700; margin-bottom:6px;">Simulation-First,<br>Zero Prototype Risk</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.6;">
              Our CFD-based approach identifies and solves design issues entirely in the digital domain —
              no costly physical iteration cycles.
            </p>
          </div>

          <div class="card s6-card" style="opacity:0; transform:translateY(20px); transition:opacity .5s ease, transform .5s ease; border:1px solid var(--clr-secondary); transition-delay:.15s;">
            <div style="margin-bottom:10px; color:var(--clr-secondary);"><i data-lucide="package" style="width:28px;height:28px;stroke-width:1.75;"></i></div>
            <div style="font-weight:700; margin-bottom:6px;">Free Analysis Package</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.6;">
              Speak with our engineering team to receive a comprehensive analysis at no cost. 
            </p>
          </div>

          <div class="card s6-card" style="opacity:0; transform:translateY(20px); transition:opacity .5s ease, transform .5s ease; border:1px solid var(--clr-amber); transition-delay:.3s;">
            <div style="margin-bottom:10px; color:var(--clr-amber);"><i data-lucide="zap" style="width:28px;height:28px;stroke-width:1.75;"></i></div>
            <div style="font-weight:700; margin-bottom:6px;">Fast Turnaround,<br>Actionable Results</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.6;">
              Results delivered with clear recommendations your engineering team can act on immediately
              to reduce volume, weight, and cost.
            </p>
          </div>

        </div>

        <!-- Summary metric strip -->
        <div style="
          display:inline-grid; grid-template-columns:repeat(3,1fr);
          gap:24px; padding:20px 32px;
          background:var(--clr-surface); border:1px solid var(--clr-border);
          border-radius:12px; margin-bottom:36px; max-width:700px; width:100%;">
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

        <!-- Restart link -->
        <div>
          <button id="s6-restart" style="
            background:none; border:none; color:var(--clr-text-muted);
            font-family:'Inter',sans-serif; font-size:0.875rem; cursor:pointer;
            text-decoration:underline; text-underline-offset:3px;
            transition:color .2s;">
            ↩ Restart Slideshow
          </button>
        </div>

        <!-- Confetti canvas (hidden, shown on CTA click) -->
        <canvas id="s6-confetti" style="
          position:fixed; inset:0; pointer-events:none;
          z-index:9999; display:none;
        "></canvas>

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

    /* ── Download button ────────────────────────────────────────── */
    const downloadBtn = el.querySelector('#s6-download');
    const csvContent  = this._csvContent;

    downloadBtn.addEventListener('click', () => {
      const a    = document.createElement('a');
      a.href     = 'components/Hydac_Tank_Opti_Request_Form.xlsx';
      a.download = 'components/Hydac_Tank_Opti_Request_Form.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });

    /* ── Restart button ─────────────────────────────────────────── */
    el.querySelector('#s6-restart').addEventListener('click', () => {
      if (window.AppController) window.AppController.restart();
    });

  }
});
