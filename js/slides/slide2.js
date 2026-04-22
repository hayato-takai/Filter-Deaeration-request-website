/**
 * slide2.js — Key Factors Influencing Deaeration
 * Content-focused slide: three deep informational factor cards.
 */

window.SlideModules = window.SlideModules || [];

window.SlideModules.push({
  title: 'Key Factors Influencing Deaeration',

  getHTML() {
    return /* html */`
      <div class="slide-inner">

        <div class="section-tag">Module 02 — Engineering Factors</div>
        <h1 class="slide-title">Key Factors <span class="accent">Influencing</span><br>Deaeration</h1>
        <p class="slide-subtitle">
          Three primary variables govern how well a hydraulic reservoir separates entrained air.
          Understanding the interplay between these factors is the foundation of effective tank design.
        </p>

        <div style="display:flex; flex-direction:column; gap:20px; margin-bottom:28px;">

          <!-- Factor 1: Velocity -->
          <div class="card" style="border-left:4px solid var(--clr-danger);">
            <div style="display:grid; grid-template-columns:1fr 220px; gap:24px; align-items:start;">
              <div>
                <div class="card-title" style="color:var(--clr-danger);"><i data-lucide="droplets" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i> Return Fluid Velocity</div>
                <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.7; margin-bottom:12px;">
                  Velocity at the return port is the single most critical factor. High-velocity jets reduce the time
                  fluid spends in the tank and inject turbulent kinetic energy that directly opposes buoyancy-driven
                  bubble rise.
                </p>
                <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.7; margin-bottom:12px;">
                  When return velocity is excessive, the incoming jet reaches the oil surface and splashes — directly
                  incorporating air into the fluid. This splash aeration creates a self-reinforcing cycle:
                  poor deaeration leads to more entrained air, which accelerates downstream damage.
                </p>
                <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.7;">
                  The HYDAC Air-X filter is engineered specifically to address this problem: it slows and distributes
                  return flow before it enters the tank, converting a high-energy jet into a controlled, low-velocity
                  sheet that promotes bubble rise without inducing splashing.
                </p>
              </div>
              <div style="display:flex; flex-direction:column; gap:10px;">
                <div style="padding:14px; background:var(--clr-surface-2); border-radius:8px; border:1px solid var(--clr-border);">
                  <div style="font-family:monospace; font-size:0.65rem; letter-spacing:.08em; text-transform:uppercase; color:var(--clr-secondary); margin-bottom:4px;">Target</div>
                  <div style="font-size:1.3rem; font-weight:800; color:var(--clr-text);">&lt; 0.2 m/s</div>
                  <div style="font-size:0.75rem; color:var(--clr-text-muted);">Inlet velocity at port</div>
                </div>
                <div style="padding:14px; background:var(--clr-surface-2); border-radius:8px; border:1px solid var(--clr-border);">
                  <div style="font-family:monospace; font-size:0.65rem; letter-spacing:.08em; text-transform:uppercase; color:var(--clr-danger); margin-bottom:4px;">Risk Threshold</div>
                  <div style="font-size:1.3rem; font-weight:800; color:var(--clr-text);">&gt; 1.0 m/s</div>
                  <div style="font-size:0.75rem; color:var(--clr-text-muted);">Splash aeration risk</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Factor 2: Tank Geometry & Volume -->
          <div class="card" style="border-left:4px solid var(--clr-secondary);">
            <div style="display:grid; grid-template-columns:1fr 220px; gap:24px; align-items:start;">
              <div>
                <div class="card-title" style="color:var(--clr-secondary);"><i data-lucide="box" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i> Tank Geometry &amp; Volume</div>
                <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.7; margin-bottom:12px;">
                  Tank internal geometry determines how uniformly fluid distributes across the cross-section. Optimal
                  deaeration requires a uniform, low-velocity flow field throughout. Dead zones and high-velocity jets
                  both decrease efficiency — dead zones become stagnant thermal pockets, while jets add turbulence
                  that impedes bubble rise.
                </p>
                <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.7; margin-bottom:12px;">
                  Baffles can be a double edged sword: tanks encountering high sloshing scenarios can benefit from baffles to reduce sloshing. However, poorly
                  positioned baffles can unlevel fluid distributions within the tank and increase splashing — which is exactly what CFD analysis reveals
                  before fabrication begins.
                </p>
                <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.7;">
                  Larger volume provides more surface area for bubble coalescence and a greater buffer against
                  ingestion. However, excess volume carries penalties in weight, cost, and thermal mass — making it
                  essential to target the minimum sufficient volume rather than oversizing as a safety margin.
                </p>
              </div>
              <div style="display:flex; flex-direction:column; gap:10px;">

                <div style="padding:14px; background:var(--clr-surface-2); border-radius:8px; border:1px solid var(--clr-border);">
                  <div style="font-family:monospace; font-size:0.65rem; letter-spacing:.08em; text-transform:uppercase; color:var(--clr-amber); margin-bottom:4px;">Optimisation Goal</div>
                  <div style="font-size:1.3rem; font-weight:800; color:var(--clr-text);">Min. volume</div>
                  <div style="font-size:0.75rem; color:var(--clr-text-muted);">At worst case scenario</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Factor 3: Flow Rate & Residence Time -->
          <div class="card" style="border-left:4px solid var(--clr-primary);">
            <div style="display:grid; grid-template-columns:1fr 220px; gap:24px; align-items:start;">
              <div>
                <div class="card-title" style="color:var(--clr-primary);"><i data-lucide="timer" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i> Flow Rate &amp; Residence Time</div>
                <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.7; margin-bottom:12px;">
                  Residence time is the average duration a fluid parcel spends in the tank before reaching the
                  suction port. It is fundamentally set by the ratio of tank volume to flow rate — a large tank
                  at low flow gives long residence time; a small tank at high flow gives very short residence time.
                </p>
                <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.7; margin-bottom:12px;">
                  Longer residence time provides more opportunity for bubbles to rise to the surface. Critically,
                  the required residence time depends on the bubble size of concern: large bubbles rise quickly
                  and separate even at moderate times; small micro-bubbles require significantly more time or
                  specialised separation hardware.
                </p>
                <p style="font-size:0.875rem; color:var(--clr-text-muted); line-height:1.7;">
                  The relationship between flow rate, volume, and efficiency is non-linear — which is why simulation
                  is essential. Machines that operate across wide flow ranges need a full analysis at each duty
                  point to confirm the design is adequate at all operating conditions.
                </p>
              </div>
              <div style="display:flex; flex-direction:column; gap:10px;">
                <div style="padding:14px; background:var(--clr-surface-2); border-radius:8px; border:1px solid var(--clr-border);">
                  <div style="font-family:monospace; font-size:0.65rem; letter-spacing:.08em; text-transform:uppercase; color:var(--clr-primary); margin-bottom:4px;">Formula</div>
                  <div style="font-size:1rem; font-weight:800; color:var(--clr-text); font-family:monospace;">t = V / Q</div>
                  <div style="font-size:0.75rem; color:var(--clr-text-muted);">Residence time (min)</div>
                </div>
                <div style="padding:14px; background:var(--clr-surface-2); border-radius:8px; border:1px solid var(--clr-border);">
                  <div style="font-family:monospace; font-size:0.65rem; letter-spacing:.08em; text-transform:uppercase; color:var(--clr-secondary); margin-bottom:4px;">Minimum Target</div>
                  <div style="font-size:1.3rem; font-weight:800; color:var(--clr-text);">≥ 1.5 min</div>
                  <div style="font-size:0.75rem; color:var(--clr-text-muted);">For effective separation</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- HYDAC Air-X callout -->
        <div class="card" style="background:var(--clr-surface-2); border-color:var(--clr-primary); display:flex; gap:20px; align-items:center;">
          <div style="min-width:44px; text-align:center; color:var(--clr-primary);"><i data-lucide="wrench" style="width:28px;height:28px;stroke-width:1.75;"></i></div>
          <div>
            <div style="font-family:monospace; font-size:0.65rem; letter-spacing:.1em; text-transform:uppercase; color:var(--clr-primary); margin-bottom:4px;">Recommended Solution</div>
            <div style="font-weight:700; margin-bottom:6px;">HYDAC Air-X Filter</div>
            <p style="font-size:0.82rem; color:var(--clr-text-muted); line-height:1.65;">
              The Air-X is purpose-designed to address all three factors simultaneously: it reduces return port
              velocity by distributing flow over a large surface area, promotes laminar conditions within the tank,
              and enables downsizing of tank volume while maintaining or improving deaeration efficiency.
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