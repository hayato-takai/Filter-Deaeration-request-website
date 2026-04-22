/**
 * slide1.js — Introduction: What Is Filter Deaeration Analysis?
 * Content-focused slide with expanded "Why It Matters" section.
 */

window.SlideModules = window.SlideModules || [];

window.SlideModules.push({
  title: 'What Is Filter Deaeration Analysis?',

  getHTML() {
    return /* html */`
      <div class="slide-inner">

        <div class="section-tag">Module 01 — Introduction</div>
        <h1 class="slide-title">What Is <span class="accent">Filter Deaeration</span><br>Analysis?</h1>
        <p class="slide-subtitle">
          A simulation-based assessment of a hydraulic reservoir's ability to separate dissolved and
          entrained air from the working fluid. Before any physical prototype is built.
        </p>

        <div class="grid-2" style="margin-bottom:32px; align-items:stretch;">

          <div class="card">
            <div class="card-title"><i data-lucide="ruler" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i> Definition</div>
            <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.75; margin-bottom:14px;">
              Deaeration is the process by which entrained air bubbles rise to the free surface of a
              hydraulic reservoir and escape — rather than being drawn into the suction port and
              circulated through the system.
            </p>
            <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.75;">
              A deaeration analysis quantifies how effectively a given tank geometry, port arrangement,
              and operating flow rate achieves this separation — and identifies what design changes are
              required to meet the target efficiency.
            </p>
          </div>

          <div class="card">
            <div class="card-title"><i data-lucide="settings" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i> How It Works</div>
            <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.7; margin-bottom:14px;">
              Air enters hydraulic fluid at the return port — either as dissolved gas or as micro-bubbles
              from pressure drops, leakage points, or surface agitation. Once in the reservoir, buoyancy
              drives bubbles upward, but competing turbulent forces drive them toward the suction port.
            </p>
            <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.7;">
              The race between buoyancy and turbulence determines separation efficiency. Key factors are
              return velocity, residence time, tank geometry, and port placement. Our CFD simulations
              model all of these simultaneously to predict on-field behaviour.
            </p>
          </div>

        </div>

        <div class="section-tag">Why It Matters</div>
        <p style="font-size:0.9rem; color:var(--clr-text-muted); margin-bottom:20px; max-width:820px;">
          Air contamination in hydraulic fluid is not a nuisance — it is a primary failure mode.
          Poorly deaerating tanks cause a cascade of consequences that directly affect component life,
          system performance, and operating cost.
        </p>

        <div class="grid-3" style="margin-bottom:20px;">

          <div class="card" style="border:1px solid var(--clr-danger);">
            <div style="margin-bottom:8px; color:var(--clr-danger);"><i data-lucide="zap" style="width:24px;height:24px;stroke-width:2;"></i></div>
            <div style="font-weight:700; margin-bottom:8px; font-size:0.95rem;">Cavitation &amp; Pump Erosion</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.65;">
              Air bubbles drawn into the pump collapse violently under high pressure. The implosion forces
              exceed material yield strength, eroding pump housings, piston shoes, and valve plates through
              micro-pitting. What begins as surface roughening progresses to spalling and ultimately
              catastrophic failure — cutting pump service life from thousands of hours to hundreds.
            </p>
          </div>

          <div class="card" style="border:1px solid var(--clr-danger);">
            <div style="margin-bottom:8px; color:var(--clr-danger);"><i data-lucide="activity" style="width:24px;height:24px;stroke-width:2;"></i></div>
            <div style="font-weight:700; margin-bottom:8px; font-size:0.95rem;">Loss of Actuator Precision</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.65;">
              Air is compressible; hydraulic oil is not. Even 1–2% entrained air by volume can reduce
              the effective bulk modulus of the fluid by up to 50%, destroying the stiffness that makes
              precision control possible. Closed-loop position control becomes sluggish or unstable. In
              safety-critical applications — crane holding, steering, lifting — this is a direct hazard.
            </p>
          </div>

          <div class="card" style="border:1px solid var(--clr-amber);">
            <div style="margin-bottom:8px; color:var(--clr-amber);"><i data-lucide="microscope" style="width:24px;height:24px;stroke-width:2;"></i></div>
            <div style="font-weight:700; margin-bottom:8px; font-size:0.95rem;">Accelerated Oil Oxidation</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.65;">
              Oxygen within entrained bubbles reacts with oil at elevated temperatures, producing acidic
              compounds, varnish deposits, and sludge. These contaminants attack seals, clog orifices,
              and abrade precision surfaces. Oil service life can be cut by 50–70%, driving up consumable
              costs and disposal requirements significantly.
            </p>
          </div>

        </div>

        <div class="grid-3" style="margin-bottom:28px;">

          <div class="card" style="border:1px solid var(--clr-amber);">
            <div style="margin-bottom:8px; color:var(--clr-amber);"><i data-lucide="filter" style="width:24px;height:24px;stroke-width:2;"></i></div>
            <div style="font-weight:700; margin-bottom:8px; font-size:0.95rem;">Filter Bypass Risk</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.65;">
              Air compresses within filter media, generating differential pressure spikes that open the
              bypass valve. When the filter bypasses, unfiltered oil reaches downstream components —
              negating the entire filtration system. Frequent bypass events are a strong indicator of an
              aeration problem, not a filter problem.
            </p>
          </div>

          <div class="card" style="border:1px solid var(--clr-amber);">
            <div style="margin-bottom:8px; color:var(--clr-amber);"><i data-lucide="volume-2" style="width:24px;height:24px;stroke-width:2;"></i></div>
            <div style="font-weight:700; margin-bottom:8px; font-size:0.95rem;">Noise &amp; Vibration</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.65;">
              Aerated fluid causes chattering in hydraulic valves and erratic pressure pulsations in
              pumps, transmitted through pipework as structure-borne noise. On noise-sensitive applications
              — construction equipment, agricultural machinery, offshore installations — this affects
              operator comfort ratings and may breach contractual noise limits.
            </p>
          </div>

          <div class="card" style="border:1px solid var(--clr-primary);">
            <div style="margin-bottom:8px; color:var(--clr-primary);"><i data-lucide="bar-chart-2" style="width:24px;height:24px;stroke-width:2;"></i></div>
            <div style="font-weight:700; margin-bottom:8px; font-size:0.95rem;">Oversized, Overweight Tanks</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.65;">
              Without analysis, engineers add oil volume as a safety margin against poor deaeration.
              A proper deaeration analysis identifies the minimum tank volume that reliably achieves the
              target separation efficiency — reducing size, weight, and fill cost simultaneously.
            </p>
          </div>

        </div>

        <div class="card" style="background:var(--clr-surface-2); border-color:var(--clr-primary); display:flex; gap:20px; align-items:center;">
          <div style="min-width:48px; text-align:center; color:var(--clr-primary);"><i data-lucide="heart" style="width:32px;height:32px;stroke-width:1.5;"></i></div>
          <div>
            <div style="font-weight:700; color:var(--clr-primary); margin-bottom:4px;">The Fluid Architecture is the Heart of the Machine</div>
            <p style="font-size:0.875rem; color:var(--clr-text-muted);">
              The filter-tank assembly is the heart of the hydraulic system. If it fails to deaerate,
              every downstream component — pumps, actuators, valves — is placed at risk. A
              simulation-based analysis quantifies this risk and eliminates it before a single prototype
              is built.
            </p>
          </div>
        </div>

      </div>
    `;
  },

  init(el) {
    // No interactive elements on this slide.
  }
});
