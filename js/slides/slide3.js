/**
 * slide3.js — What Our Simulations Reveal
 * Interactive element: clickable panel switcher that highlights a card and
 * reveals a mock CFD image placeholder with description.
 */

window.SlideModules = window.SlideModules || [];

window.SlideModules.push({
  title: 'What Our Simulations Reveal',

  getHTML() {
    return /* html */`
      <div class="slide-inner">

        <!-- Header -->
        <div class="section-tag">Module 03 — Simulation Capabilities</div>
        <h1 class="slide-title">What Our <span class="accent">Simulations</span><br>Reveal</h1>
        <p class="slide-subtitle">
          Select an analysis type to explore what each simulation uncovers — and how each insight
          drives better design decisions before any hardware is manufactured.
        </p>

        <!-- Analysis type tab buttons -->
        <div id="s3-tabs" style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:24px;">
          <button class="s3-tab s3-tab-active" data-idx="0">
            <span class="s3-tab-icon"><i data-lucide="waves" style="width:14px;height:14px;vertical-align:-2px;stroke-width:2;"></i></span> Velocity Field
          </button>
          <button class="s3-tab" data-idx="1">
            <span class="s3-tab-icon"><i data-lucide="circle-dot" style="width:14px;height:14px;vertical-align:-2px;stroke-width:2;"></i></span> Bubble Trajectory
          </button>
          <button class="s3-tab" data-idx="2">
            <span class="s3-tab-icon"><i data-lucide="target" style="width:14px;height:14px;vertical-align:-2px;stroke-width:2;"></i></span> Port Placement
          </button>
          <button class="s3-tab" data-idx="3">
            <span class="s3-tab-icon"><i data-lucide="wind" style="width:14px;height:14px;vertical-align:-2px;stroke-width:2;"></i></span> Sloshing
          </button>
        </div>

        <!-- Panel detail area -->
        <div id="s3-detail" style="display:grid; grid-template-columns:1fr 1fr; gap:24px; align-items:stretch;">

          <!-- Left: description panel (swapped per tab) -->
          <div id="s3-desc-panel" class="card" style="min-height:360px; border-color:var(--clr-primary); transition: border-color .3s;">
            <!-- Content injected by JS -->
          </div>

          <!-- Right: mock CFD visualisation -->
          <div id="s3-cfd-panel" class="card" style="min-height:360px; overflow:hidden; padding:0; height:100%;">
            <!-- CFD placeholder injected by JS -->
          </div>

        </div>

        <style>
          .s3-tab {
            display: flex; align-items: center; gap: 8px;
            padding: 10px 20px;
            background: var(--clr-surface-2);
            border: 1px solid var(--clr-border);
            border-radius: 8px;
            color: var(--clr-text-muted);
            font-family: 'Inter', sans-serif;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: background .2s, border-color .2s, color .2s;
          }
          .s3-tab:hover { border-color: var(--clr-primary); color: var(--clr-text); }
          .s3-tab-active {
            background: var(--clr-primary-glow) !important;
            border-color: var(--clr-primary) !important;
            color: var(--clr-primary) !important;
          }

          /* CFD gradient canvases */
          .cfd-placeholder {
            width: 100%; height: 100%; min-height: 360px;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            position: relative; overflow: hidden;
          }

          .cfd-label {
            position: absolute; top: 16px; left: 16px;
            font-family: monospace; font-size: 0.65rem; letter-spacing: .1em;
            text-transform: uppercase; color: var(--clr-primary);
            background: var(--clr-surface); border: 1px solid var(--clr-primary);
            padding: 3px 10px; border-radius: 20px;
          }

          .cfd-legend {
            position: absolute; bottom: 16px; right: 16px;
            display: flex; flex-direction: column; gap: 4px;
          }

          .cfd-legend-item {
            display: flex; align-items: center; gap: 6px;
            font-family: monospace; font-size: 0.65rem; color: var(--clr-text-muted);
          }

          .cfd-legend-color {
            width: 24px; height: 6px; border-radius: 3px;
          }
        </style>
      </div>
    `;
  },

  /**
   * Data for each analysis type: title, bullets, CFD visual config.
   */
  _panels: [
    {
      icon: '<i data-lucide="waves" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i>',
      title: 'Velocity Field Analysis',
      tag: 'CFD · Velocity Magnitude',
      color: '#0ea5e9',
      bullets: [
        'High-velocity zones flag where return and suction port fittings should be upsized to reduce momentum and turbulence.',
        'Quantifies splash risk at the oil surface — areas where the return jet reaches the free surface and directly entrains atmospheric air.',
        'Dead zones and thermal pockets are identified: regions of low flow velocity where oil stagnates and degrades.',
        'Cross-sectional velocity contours — longitudinal and transverse — reveal whether baffle or diffuser geometry needs adjustment.',
        'Peak velocity values at each port inlet are extracted to directly inform HYDAC Air-X filter specification and sizing.',
        'Velocity field output feeds directly into bubble trajectory analysis: the flow field drives bubble transport.',
      ],
      gradient: 'linear-gradient(135deg, #0a0d14 0%, #001845 30%, #003270 50%, #0ea5e9 70%, #22d3ee 85%, #f59e0b 95%, #ef4444 100%)',
      legendItems: [
        { color: '#ef4444', label: 'High (>1.0 m/s)' },
        { color: '#f59e0b', label: 'Medium (0.2–1.0 m/s)' },
        { color: '#0ea5e9', label: 'Low (<0.2 m/s)' },
      ],
      cfdLines: '',
    },
    {
      icon: '<i data-lucide="circle-dot" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i>',
      title: 'Bubble Trajectory Analysis',
      tag: 'CFD · Particle Tracking',
      color: '#10b981',
      bullets: [
        'Tracks individual bubbles across a range of sizes,covering micro-bubble to coarse-bubble behaviour.',
        'Generates a separation efficiency curve per bubble size class, showing the percentage that escape to the free surface vs. are ingested at the suction.',
        'Quantifies worst-case air ingestion under peak flow conditions — the critical input for component damage risk assessment.',
        'Identifies the minimum separable bubble diameter: the threshold below which bubbles cannot reliably escape within the tank residence time.',
        'Provides the engineering basis for acceptance testing criteria — efficiency targets are grounded in simulation output, not assumptions.',
        'Directly links tank geometry and Air-X filter positioning to downstream component longevity and service interval predictions.',
      ],
      gradient: 'linear-gradient(160deg, #070d1a 0%, #0a1a2e 40%, #0a2540 70%, #063c2e 90%)',
      legendItems: [
        { color: '#10b981', label: '2.0 mm — Separated' },
      ],
      cfdLines: '',
    },
    {
      icon: '<i data-lucide="target" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i>',
      title: 'Port Placement & Tilt-Angle Check',
      tag: 'CFD · Port Geometry',
      color: '#f59e0b',
      bullets: [
        'Return ports positioned above the oil surface are immediately flagged: they cause direct splash aeration at high flow rates, making aeration a concern before any deaeration is considered.',
        'Suction port depth is verified at worst-case tilt to prevent vortex formation and air ingestion — the most acute failure mode in mobile machines — with the angles derived from machine specifications.',
        'A calculated tilt margin confirms adequate design clearance, providing the engineering data required for type-approval documentation.',
        'Vortex formation risk at the suction port inlet is assessed: shallow submergence combined with high flow velocity creates a vortex that ingests air even when the port is below the surface.',
        'Corrective geometry recommendations — port relocation, extended standpipes, or anti-vortex baffles — are provided with quantified improvement data.',
      ],
      gradient: 'linear-gradient(180deg, #0a0d14 0%, #1a1000 40%, #2a1a00 65%, #3d2600 80%, #f59e0b20 100%)',
      legendItems: [
        { color: '#10b981', label: 'Port — Safe depth' },
        { color: '#f59e0b', label: 'Tilt margin' },
        { color: '#ef4444', label: 'Splash risk zone' },
      ],
      cfdLines: 'ports',
    },
    {
      icon: '<i data-lucide="wind" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i>',
      title: 'Sloshing Simulation',
      tag: 'CFD · Free Surface Dynamics',
      color: '#a855f7',
      bullets: [
        'Braking, acceleration, and cornering manoeuvres are each assessed independently and in combined worst-case scenarios representative of real operating conditions.',
        'Breather vent fluid level is tracked throughout each manoeuvre to confirm oil cannot reach the breather to leak and contaminate the environment.',
        'Suction port submergence is monitored continuously across the full manoeuvre — a momentary exposure of even 50 ms is sufficient to ingest a damaging air slug.',
        'Baffle damping effectiveness is quantified: the simulation reveals whether surge waves are adequately attenuated by the current internal geometry or whether redesign is needed.',
        'Vehicle-specific measured acceleration and drive cycle data are used when supplied; recognised industry-standard profiles are applied when measured data is unavailable.',
      ],
      gradient: 'linear-gradient(200deg, #0a0d14 0%, #0c1040 35%, #1a0a3a 60%, #2d1060 80%, #a855f720 100%)',
      legendItems: [
        { color: '#a855f7', label: 'Wave crest' },
        { color: '#0ea5e9', label: 'Fluid bulk' },
        { color: '#ef4444', label: 'Breather risk zone' },
      ],
      cfdLines: 'slosh',
    },
  ],

  /**
   * init — sets up the tab switcher and renders the first panel.
   * @param {HTMLElement} el
   */
  init(el) {
    const panels  = this._panels;
    const tabs    = el.querySelectorAll('.s3-tab');
    const descEl  = el.querySelector('#s3-desc-panel');
    const cfdEl   = el.querySelector('#s3-cfd-panel');

    let activeIdx = 0;

    /**
     * Render the CFD canvas visualisation for the selected panel.
     * Uses a canvas drawing for an abstract, visually rich pseudo-CFD look.
     */
    function renderCFD(canvas, panel, idx) {
      const dpr  = window.devicePixelRatio || 1;
      const W    = canvas.offsetWidth;
      const H    = canvas.offsetHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);

      // Base gradient background
      const bg = ctx.createLinearGradient(0, 0, W, H);
      if (idx === 0) {
        bg.addColorStop(0, '#050810');
        bg.addColorStop(0.3, '#001233');
        bg.addColorStop(0.6, '#013a6b');
        bg.addColorStop(0.8, '#0ea5e940');
        bg.addColorStop(1, '#ef444440');
      } else if (idx === 1) {
        bg.addColorStop(0, '#050a10');
        bg.addColorStop(0.5, '#052a20');
        bg.addColorStop(1, '#083020');
      } else if (idx === 2) {
        bg.addColorStop(0, '#080600');
        bg.addColorStop(0.5, '#1a1100');
        bg.addColorStop(1, '#3d260020');
      } else {
        bg.addColorStop(0, '#060510');
        bg.addColorStop(0.4, '#10083a');
        bg.addColorStop(1, '#2d106020');
      }
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

if (idx === 2) {
        // Port geometry: schematic tank cross-section
        ctx.globalAlpha = 0.9;
        // Tank outline
        ctx.strokeStyle = 'var(--clr-border)';
        ctx.lineWidth   = 2;
        ctx.strokeRect(W * 0.1, H * 0.1, W * 0.8, H * 0.8);

        // Oil level
        ctx.fillStyle = '#0ea5e915';
        ctx.fillRect(W * 0.1, H * 0.4, W * 0.8, H * 0.5);
        ctx.strokeStyle = '#0ea5e9';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(W * 0.1, H * 0.4); ctx.lineTo(W * 0.9, H * 0.4); ctx.stroke();
        ctx.setLineDash([]);

        // Return port (top)
        ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(W * 0.25, H * 0.1); ctx.lineTo(W * 0.25, H * 0.3); ctx.stroke();
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath(); ctx.arc(W * 0.25, H * 0.3, 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#f59e0b80';
        ctx.font = '10px monospace'; ctx.fillText('RETURN', W * 0.27, H * 0.2);

        // Suction port (bottom)
        ctx.strokeStyle = '#10b981'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(W * 0.7, H * 0.9); ctx.lineTo(W * 0.7, H * 0.65); ctx.stroke();
        ctx.fillStyle = '#10b981';
        ctx.beginPath(); ctx.arc(W * 0.7, H * 0.65, 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#10b98180';
        ctx.fillText('SUCTION', W * 0.72, H * 0.75);

        // Tilt indicator
        ctx.strokeStyle = '#a855f740'; ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.moveTo(W * 0.05, H * 0.85); ctx.lineTo(W * 0.95, H * 0.15); ctx.stroke();
        ctx.setLineDash([]);

      } else {
        // Sloshing: wave surface
        ctx.globalAlpha = 0.9;
        const waveY = H * 0.45;
        // Fluid bulk
        const fluid = ctx.createLinearGradient(0, waveY, 0, H);
        fluid.addColorStop(0, '#0ea5e930');
        fluid.addColorStop(1, '#0ea5e910');
        ctx.fillStyle = fluid;
        ctx.beginPath();
        ctx.moveTo(0, H);
        for (let x = 0; x <= W; x += 4) {
          const wave = Math.sin(x * 0.025) * 20 + Math.sin(x * 0.07 + 1) * 10;
          ctx.lineTo(x, waveY + wave);
        }
        ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath(); ctx.fill();

        // Wave line
        ctx.strokeStyle = '#0ea5e9';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 4) {
          const wave = Math.sin(x * 0.025) * 20 + Math.sin(x * 0.07 + 1) * 10;
          x === 0 ? ctx.moveTo(x, waveY + wave) : ctx.lineTo(x, waveY + wave);
        }
        ctx.stroke();

        // Breather zone
        ctx.fillStyle = '#ef444420';
        ctx.fillRect(0, 0, W, H * 0.15);
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth   = 1;
        ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(0, H * 0.15); ctx.lineTo(W, H * 0.15); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#ef444470';
        ctx.font = '9px monospace';
        ctx.fillText('BREATHER RISK ZONE', 10, H * 0.11);
      }

      ctx.globalAlpha = 1;
    }

    /** Render description + CFD for a given panel index */
    function renderPanel(idx) {
      const p = panels[idx];

      descEl.style.borderColor = p.color;

      descEl.innerHTML = `
        <div class="card-title" style="color:${p.color};">
          ${p.icon} ${p.title}
        </div>
        <div style="font-family:monospace;font-size:0.65rem;letter-spacing:.1em;text-transform:uppercase;
          color:${p.color};background:${p.color}20;border:1px solid ${p.color}50;
          display:inline-block;padding:2px 10px;border-radius:20px;margin-bottom:14px;">
          ${p.tag}
        </div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;margin:0;padding:0;">
          ${p.bullets.map(b => `
            <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;">
              <span style="color:${p.color};font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>
              ${b}
            </li>
          `).join('')}
        </ul>
      `;
      if (window.lucide) lucide.createIcons({ node: descEl });

      // CFD visualisation
      const imageMap = { 0: 'components/velocity_field.png', 1: 'components/bubble_trajectory.png' };
      if (imageMap[idx]) {
        cfdEl.innerHTML = `
          <div class="cfd-placeholder" style="height:100%; min-height:360px; position:relative; overflow:hidden;">
            <img src="${imageMap[idx]}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover; display:block;" />
            <div class="cfd-label" style="color:${p.color}; border-color:${p.color};">${p.tag}</div>
            <div class="cfd-legend">
              ${p.legendItems.map(li => `
                <div class="cfd-legend-item">
                  <div class="cfd-legend-color" style="background:${li.color};"></div>
                  <span>${li.label}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      } else {
        cfdEl.innerHTML = `
          <div class="cfd-placeholder" style="height:100%; min-height:360px; position:relative; overflow:hidden;">
            <canvas id="s3-cfd-canvas" style="width:100%; height:100%; position:absolute; inset:0;"></canvas>
            <div class="cfd-label" style="color:${p.color}; border-color:${p.color};">${p.tag}</div>
            <div class="cfd-legend">
              ${p.legendItems.map(li => `
                <div class="cfd-legend-item">
                  <div class="cfd-legend-color" style="background:${li.color};"></div>
                  <span>${li.label}</span>
                </div>
              `).join('')}
            </div>
            <div style="
              position:absolute; bottom:50%; left:50%; transform:translate(-50%,50%);
              font-family:monospace; font-size:0.65rem; letter-spacing:.08em;
              color:${p.color}50; text-transform:uppercase; pointer-events:none;">
              Simulation Output
            </div>
          </div>
        `;

        // Draw after DOM is ready
        requestAnimationFrame(() => {
          const canvas = cfdEl.querySelector('#s3-cfd-canvas');
          if (!canvas) return;
          const cont = canvas.parentElement;
          canvas.style.width  = cont.offsetWidth  + 'px';
          canvas.style.height = cont.offsetHeight + 'px';
          renderCFD(canvas, p, idx);
        });
      }
    }

    /** Switch active tab styling */
    function activateTab(idx) {
      tabs.forEach((t, i) => {
        t.classList.toggle('s3-tab-active', i === idx);
      });
      // Mini cards
      for (let i = 0; i < 4; i++) {
        const mini = el.querySelector(`#s3-mini-${i}`);
        if (mini) {
          mini.style.borderColor = i === idx ? panels[i].color : '';
          mini.style.background  = i === idx ? panels[i].color + '15' : '';
        }
      }
    }

    /** Handle tab click */
    function selectPanel(idx) {
      activeIdx = idx;
      activateTab(idx);
      renderPanel(idx);
    }

    // Attach tab listeners
    tabs.forEach((tab, i) => tab.addEventListener('click', () => selectPanel(i)));

    // Attach mini card listeners
    for (let i = 0; i < 4; i++) {
      const mini = el.querySelector(`#s3-mini-${i}`);
      if (mini) mini.addEventListener('click', () => selectPanel(i));
    }

    // Initial render
    selectPanel(0);
  }
});
