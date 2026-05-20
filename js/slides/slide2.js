/**
 * slide2.js — What Our Analysis Reveals
 * Carousel: 4 panels, each with CFD image on top and combined description below.
 * Merges engineering factor content (original slide2) with simulation capabilities (slide3).
 */

window.SlideModules = window.SlideModules || [];

window.SlideModules.push({
  title: 'What Our Analysis Reveals',

  getHTML() {
    return /* html */`
      <div class="slide-inner">

        <div class="section-tag">Module 02 — Engineering Factors</div>
        <h1 class="slide-title">What Our <span class="accent">Analysis </span>Reveals</h1>
        <p class="slide-subtitle">
          Three primary variables govern how well a hydraulic reservoir separates entrained air.
          Understanding the interplay between these factors is the foundation of effective tank design.
        </p>
        <!-- Tab buttons -->
        <div id="s2-tabs" style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:24px;">
          <button class="s2-tab s2-tab-active" data-idx="0">
            <span class="s2-tab-icon"><i data-lucide="waves" style="width:14px;height:14px;vertical-align:-2px;stroke-width:2;"></i></span> Velocity Field
          </button>
          <button class="s2-tab" data-idx="1">
            <span class="s2-tab-icon"><i data-lucide="circle-dot" style="width:14px;height:14px;vertical-align:-2px;stroke-width:2;"></i></span> Bubble Trajectory
          </button>
          <button class="s2-tab" data-idx="2">
            <span class="s2-tab-icon"><i data-lucide="target" style="width:14px;height:14px;vertical-align:-2px;stroke-width:2;"></i></span> Port Placement
          </button>
          <button class="s2-tab" data-idx="3">
            <span class="s2-tab-icon"><i data-lucide="wind" style="width:14px;height:14px;vertical-align:-2px;stroke-width:2;"></i></span> Sloshing
          </button>
        </div>

        <!-- Single large card: image top half, description bottom half -->
        <div id="s2-card" class="card" style="padding:0; overflow:hidden;">
          <div id="s2-image-panel" style="height:480px; position:relative; overflow:hidden; background:var(--clr-surface-2); padding:10px 32px;">
            <!-- CFD image / canvas injected by JS -->
          </div>
          <div id="s2-desc-panel" style="padding:24px; border-top:2px solid var(--clr-primary); transition:border-top-color .3s;">
            <!-- Description injected by JS -->
          </div>
        </div>

        <style>
          .s2-tab {
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
          .s2-tab:hover { border-color: var(--clr-primary); color: var(--clr-text); }
          .s2-tab-active {
            background: var(--clr-primary-glow) !important;
            border-color: var(--clr-primary) !important;
            color: var(--clr-primary) !important;
          }
          .s2-cfd-label {
            position: absolute; top: 16px; left: 16px;
            font-family: monospace; font-size: 0.65rem; letter-spacing: .1em;
            text-transform: uppercase;
            background: var(--clr-surface); border: 1px solid;
            padding: 3px 10px; border-radius: 20px;
          }
          .s2-cfd-legend {
            position: absolute; bottom: 16px; right: 16px;
            display: flex; flex-direction: column; gap: 4px;
          }
          .s2-cfd-legend-item {
            display: flex; align-items: center; gap: 6px;
            font-family: monospace; font-size: 0.65rem; color: var(--clr-text-muted);
          }
          .s2-cfd-legend-color { width: 24px; height: 6px; border-radius: 3px; }
        </style>

      </div>
    `;
  },

  _panels: [
    {
      title: 'Velocity Field Analysis',
      tag: 'CFD · Velocity Magnitude',
      color: '#0ea5e9',
      imageFile: 'components/velocity_field.png',
      legendItems: [
        { color: '#ef4444', label: 'High (>1.0 m/s)' },
        { color: '#f59e0b', label: 'Medium (0.2–1.0 m/s)' },
        { color: '#0ea5e9', label: 'Low (<0.2 m/s)' },
      ],
    },
    {
      title: 'Bubble Trajectory Analysis',
      tag: 'CFD · Bubble Tracking',
      color: '#10b981',
      imageFile: 'components/bubble_trajectory.png',
      legendItems: [
        { color: '#10b981', label: '2.0 mm — Separated' },
      ],
    },
    {
      title: 'Port Placement & Tilt-Angle Check',
      tag: 'CFD · Port Location',
      color: '#f59e0b',
      imageFile: null,
      legendItems: [
        { color: '#10b981', label: 'Port — Safe depth' },
        { color: '#f59e0b', label: 'Tilt margin' },
        { color: '#ef4444', label: 'Splash risk zone' },
      ],
    },
    {
      title: 'Sloshing Simulation',
      tag: 'CFD · Free Surface Dynamics',
      color: '#a855f7',
      imageFile: null,
      legendItems: [
        { color: '#a855f7', label: 'Wave crest' },
        { color: '#0ea5e9', label: 'Fluid bulk' },
        { color: '#ef4444', label: 'Breather risk zone' },
      ],
    },
  ],

  // ── Description HTML for each panel (all original text preserved) ──────────
  _descContent: [

    // Panel 0 — Velocity Field + Return Fluid Velocity
    `<div class="card-title" style="color:#0ea5e9; margin-bottom:8px;">
      <i data-lucide="waves" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i> Velocity Field Analysis
    </div>

    <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;margin:0 0 20px;padding:0;">
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#0ea5e9;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>High fluid velocity is the single most critical factor in unoptimised tanks. Without controlled internal flow paths, return jets generate turbulent kinetic energy that directly opposes the buoyancy-driven rise of entrained air bubbles.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#0ea5e9;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>When return velocity is excessive, the incoming jet reaches the oil surface and splashes — directly incorporating air into the fluid. This creates a self-reinforcing cycle: poor deaeration leads to more entrained air, which accelerates downstream component damage.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#0ea5e9;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>Dead zones and thermal pockets are identified: stagnant regions inaccessible to the main flow contribute neither to deaeration nor to heat dissipation, reducing the effective working volume of the tank.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#0ea5e9;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>The HYDAC Air-X filter is engineered to address this directly: it slows and distributes the return flow throughout the tank, converting a high-energy jet into a controlled, low-velocity cascade that promotes bubble rise without inducing surface splash.</li>
    </ul>`,

    // Panel 1 — Bubble Trajectory + Flow Rate & Residence Time + Tank Geometry & Volume
    `<div class="card-title" style="color:#10b981; margin-bottom:8px;">
      <i data-lucide="circle-dot" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i> Bubble Trajectory Analysis
    </div>
    <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;margin:0 0 20px;padding:0;">

      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#10b981;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>Residence time — the duration a bubble spends in the tank before reaching the suction port — is governed by fluid velocity and the return-to-suction distance. Greater residence time at lower velocity provides more opportunity for bubbles to rise. Critically, the minimum required time varies by bubble size: coarse bubbles separate readily, while micro-bubbles demand significantly longer dwell times and purpose-built coalescence filters.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#10b981;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>The relationship between tank geometry, fluid velocity, and separation efficiency is complex — which is why simulation is essential. Machines that operate across a wide flow range require analysis at each duty point to confirm the design performs adequately under all operating conditions.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#10b981;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>Greater tank volume increases the surface area available for bubble coalescence and provides a larger buffer against ingestion. However, excess volume carries real penalties in weight, cost, and thermal mass — making it essential to target the minimum volume sufficient for reliable separation, rather than oversizing as a blanket safety margin.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#10b981;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>The Filter Deaeration Analysis simultaneously maximises separation efficiency and identifies opportunities to reduce fluid volume — delivering a tank that meets performance requirements without carrying unnecessary weight or cost.</li>
    </ul>`,

    // Panel 2 — Port Placement & Tilt-Angle Check
    `<div class="card-title" style="color:#f59e0b; margin-bottom:8px;">
      <i data-lucide="target" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i> Port Placement &amp; Tilt-Angle Check
    </div>
    <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;margin:0;padding:0;">
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#f59e0b;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>Return ports positioned above the oil surface are immediately flagged: they cause direct splash aeration at high flow rates, making aeration a concern before any deaeration is considered.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#f59e0b;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>Suction port depth is verified at worst-case tilt to prevent vortex formation and air ingestion — the most acute failure mode in mobile machines — with the angles derived from machine specifications.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#f59e0b;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>Vortex formation risk at the suction port inlet is assessed: shallow submergence combined with high flow velocity creates a vortex that ingests air even when the port is below the surface.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#f59e0b;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>Corrective geometry recommendations — port relocation, extended standpipes, or anti-vortex baffles — are provided with quantified improvement data.</li>
    </ul>`,

    // Panel 3 — Sloshing Simulation
    `<div class="card-title" style="color:#a855f7; margin-bottom:8px;">
      <i data-lucide="wind" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i> Sloshing Simulation
    </div>

    <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;margin:0;padding:0;">
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#a855f7;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>Braking, acceleration, and cornering manoeuvres are each assessed independently and in combined worst-case scenarios representative of real operating conditions.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#a855f7;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>Breathers are tracked throughout each manoeuvre to confirm oil does not splash/leak and contaminate the environment.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#a855f7;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>Suction port submergence is monitored continuously across the full manoeuvre — even a momentary exposure is sufficient to ingest a damaging air slug.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#a855f7;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>Baffle damping effectiveness is quantified: the simulation reveals whether baffles are adequately attenuating surge waves or whether redesign is needed.</li>
      <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.875rem;color:var(--clr-text-muted);line-height:1.55;"><span style="color:#a855f7;font-size:0.8rem;margin-top:2px;flex-shrink:0;">▸</span>Vehicle-specific measured acceleration and drive cycle data are used when supplied; recognised industry-standard profiles are applied when measured data is unavailable.</li>
    </ul>`,
  ],

  init(el) {
    const panels = this._panels;
    const descContent = this._descContent;
    const tabs = el.querySelectorAll('.s2-tab');
    const imageEl = el.querySelector('#s2-image-panel');
    const descEl = el.querySelector('#s2-desc-panel');
    const card = el.querySelector('#s2-card');

    function renderCFD(canvas, idx) {
      const dpr = window.devicePixelRatio || 1;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);

      const bg = ctx.createLinearGradient(0, 0, W, H);
      if (idx === 2) {
        bg.addColorStop(0, '#080600'); bg.addColorStop(0.5, '#1a1100'); bg.addColorStop(1, '#3d260020');
      } else {
        bg.addColorStop(0, '#060510'); bg.addColorStop(0.4, '#10083a'); bg.addColorStop(1, '#2d106020');
      }
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      if (idx === 2) {
        // Port geometry schematic
        ctx.globalAlpha = 0.9;
        ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 2;
        ctx.strokeRect(W * 0.1, H * 0.1, W * 0.8, H * 0.8);
        ctx.fillStyle = '#0ea5e915';
        ctx.fillRect(W * 0.1, H * 0.4, W * 0.8, H * 0.5);
        ctx.strokeStyle = '#0ea5e9'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(W * 0.1, H * 0.4); ctx.lineTo(W * 0.9, H * 0.4); ctx.stroke();
        ctx.setLineDash([]);
        ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(W * 0.25, H * 0.1); ctx.lineTo(W * 0.25, H * 0.3); ctx.stroke();
        ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(W * 0.25, H * 0.3, 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#f59e0b80'; ctx.font = '10px monospace'; ctx.fillText('RETURN', W * 0.27, H * 0.2);
        ctx.strokeStyle = '#10b981'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(W * 0.7, H * 0.9); ctx.lineTo(W * 0.7, H * 0.65); ctx.stroke();
        ctx.fillStyle = '#10b981'; ctx.beginPath(); ctx.arc(W * 0.7, H * 0.65, 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#10b98180'; ctx.fillText('SUCTION', W * 0.72, H * 0.75);
        ctx.strokeStyle = '#a855f740'; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.moveTo(W * 0.05, H * 0.85); ctx.lineTo(W * 0.95, H * 0.15); ctx.stroke();
        ctx.setLineDash([]);
      } else {
        // Sloshing wave
        ctx.globalAlpha = 0.9;
        const waveY = H * 0.45;
        const fluid = ctx.createLinearGradient(0, waveY, 0, H);
        fluid.addColorStop(0, '#0ea5e930'); fluid.addColorStop(1, '#0ea5e910');
        ctx.fillStyle = fluid;
        ctx.beginPath(); ctx.moveTo(0, H);
        for (let x = 0; x <= W; x += 4) {
          const wave = Math.sin(x * 0.025) * 20 + Math.sin(x * 0.07 + 1) * 10;
          ctx.lineTo(x, waveY + wave);
        }
        ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = '#0ea5e9'; ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 4) {
          const wave = Math.sin(x * 0.025) * 20 + Math.sin(x * 0.07 + 1) * 10;
          x === 0 ? ctx.moveTo(x, waveY + wave) : ctx.lineTo(x, waveY + wave);
        }
        ctx.stroke();
        ctx.fillStyle = '#ef444420'; ctx.fillRect(0, 0, W, H * 0.15);
        ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 1; ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(0, H * 0.15); ctx.lineTo(W, H * 0.15); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#ef444470'; ctx.font = '9px monospace';
        ctx.fillText('BREATHER RISK ZONE', 10, H * 0.11);
      }
      ctx.globalAlpha = 1;
    }

    function renderPanel(idx) {
      const p = panels[idx];

      // Card border colour follows active panel
      card.style.borderColor = p.color;

      // ── Image / CFD top half ─────────────────────────────────────────────
      if (p.imageFile) {
        imageEl.innerHTML = `
          <img src="${p.imageFile}" alt="${p.title}" style="width:100%; height:100%; object-fit:contain; display:block;" />
          <div class="s2-cfd-label" style="color:${p.color}; border-color:${p.color};">${p.tag}</div>
          <div class="s2-cfd-legend">
            ${p.legendItems.map(li => `<div class="s2-cfd-legend-item"><div class="s2-cfd-legend-color" style="background:${li.color};"></div><span>${li.label}</span></div>`).join('')}
          </div>`;
      } else {
        imageEl.innerHTML = `
          <canvas id="s2-cfd-canvas" style="width:100%; height:100%; position:absolute; inset:0;"></canvas>
          <div class="s2-cfd-label" style="color:${p.color}; border-color:${p.color};">${p.tag}</div>
          <div class="s2-cfd-legend">
            ${p.legendItems.map(li => `<div class="s2-cfd-legend-item"><div class="s2-cfd-legend-color" style="background:${li.color};"></div><span>${li.label}</span></div>`).join('')}
          </div>`;
        requestAnimationFrame(() => {
          const canvas = imageEl.querySelector('#s2-cfd-canvas');
          if (!canvas) return;
          canvas.style.width = imageEl.offsetWidth + 'px';
          canvas.style.height = imageEl.offsetHeight + 'px';
          renderCFD(canvas, idx);
        });
      }

      // ── Description bottom half ──────────────────────────────────────────
      descEl.style.borderTopColor = p.color;
      descEl.innerHTML = descContent[idx];
      if (window.lucide) lucide.createIcons({ node: descEl });
    }

    function selectPanel(idx) {
      tabs.forEach((t, i) => t.classList.toggle('s2-tab-active', i === idx));
      renderPanel(idx);
    }

    tabs.forEach((tab, i) => tab.addEventListener('click', () => selectPanel(i)));
    selectPanel(0);
  }
});
