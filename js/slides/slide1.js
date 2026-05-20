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
        <h1 class="slide-title">What Is <span class="accent">Filter Deaeration Analysis?</span><br></h1>
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

        <div class="card" style="padding:0; overflow:hidden; margin-bottom:32px;">
          <div style="padding:14px 18px 12px; ">
            <div class="card-title">Side-by-Side Comparison — Original vs. Optimised Tank</div>
          </div>
          <div style="display:flex; justify-content:center; padding:16px; background:var(--clr-surface-2);">
            <video
              src="https://pub-fa810e0d43204e26baa3ea906dc3c529.r2.dev/comp.mp4"
              autoplay
              loop
              muted
              playsinline
              style="width:1080px; max-width:100%; display:block; border-radius:6px;"></video>
          </div>


          <!-- Before / After metrics comparison -->
          <style>
            .s1-sides { display:grid; grid-template-columns:1fr 1fr; border-top:1px solid var(--clr-border-muted); }
            .s1-side { padding:18px 20px; }
            .s1-side:first-child { border-right:1px solid var(--clr-border-muted); }
            .s1-side-metrics { display:grid; grid-template-columns:repeat(3,1fr); gap:0; margin-top:12px; }
            .s1-stat { padding-right:12px; }
            .s1-item { border:1px solid var(--clr-border-muted); border-radius:8px; padding:16px; }
            @media (max-width:640px) {
              .s1-sides { grid-template-columns:1fr; }
              .s1-side:first-child { border-right:none; border-bottom:1px solid var(--clr-border-muted); }
              .s1-side-metrics { grid-template-columns:repeat(3,1fr); }
            }
          </style>
          <div class="s1-sides">

            <!-- Original Tank -->
            <div class="s1-side">
              <div style="font-size:0.9rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--clr-text);"><span style="display:inline-block; width:10px; height:10px; background:var(--clr-text); border-radius:50%; margin-right:6px; vertical-align:middle;"></span>Original Tank <span style="font-size:0.8rem; font-weight:400; text-transform:none; letter-spacing:normal; opacity:1;">— Poor deaeration, heavy bubble entrainment</span></div>

              <div class="s1-side-metrics">
                <div class="s1-stat">
                  <div style="font-size:1.4rem; font-weight:800; color:var(--clr-text); margin-top:6px;">120 L</div>
                  <div style="font-size:0.65rem; color:var(--clr-text-muted); font-family:monospace; text-transform:uppercase; letter-spacing:0.07em;">Oil Volume</div>
                </div>
                <div class="s1-stat">
                  <div style="font-size:1.4rem; font-weight:800; color:var(--clr-text); margin-top:6px;">48 kg</div>
                  <div style="font-size:0.65rem; color:var(--clr-text-muted); font-family:monospace; text-transform:uppercase; letter-spacing:0.07em;">Tank Weight</div>
                </div>
                <div class="s1-stat">
                  <div style="font-size:1.4rem; font-weight:800; color:var(--clr-text); margin-top:6px;">€240</div>
                  <div style="font-size:0.65rem; color:var(--clr-text-muted); font-family:monospace; text-transform:uppercase; letter-spacing:0.07em;">Oil Cost / Fill</div>
                </div>
              </div>
            </div>

            <!-- Optimised Tank -->
            <div class="s1-side" style="background:#10b98106;">
              <div style="font-size:0.9rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--clr-secondary);"><span style="display:inline-block; width:10px; height:10px; background:var(--clr-secondary); border-radius:50%; margin-right:6px; vertical-align:middle;"></span>Optimised Tank <span style="font-size:0.8rem; font-weight:400; text-transform:none; letter-spacing:normal; opacity:1;">— Air-bubble-free fluid even at a smaller volume</span></div>
              <div class="s1-side-metrics">
                <div class="s1-stat">
                  <div style="font-size:1.4rem; font-weight:800; color:var(--clr-secondary); margin-top:6px;">90 L</div>
                  <div style="font-size:0.65rem; color:var(--clr-text-muted); font-family:monospace; text-transform:uppercase; letter-spacing:0.07em;">Oil Volume</div>
                  <div style="font-size:0.72rem; font-family:monospace; color:var(--clr-secondary); margin-top:3px;">↓ 25% less oil</div>
                </div>
                <div class="s1-stat">
                  <div style="font-size:1.4rem; font-weight:800; color:var(--clr-secondary); margin-top:6px;">40 kg</div>
                  <div style="font-size:0.65rem; color:var(--clr-text-muted); font-family:monospace; text-transform:uppercase; letter-spacing:0.07em;">Tank Weight</div>
                  <div style="font-size:0.72rem; font-family:monospace; color:var(--clr-secondary); margin-top:3px;">↓ −8 kg total</div>
                </div>
                <div class="s1-stat">
                  <div style="font-size:1.4rem; font-weight:800; color:var(--clr-secondary); margin-top:6px;">€180</div>
                  <div style="font-size:0.65rem; color:var(--clr-text-muted); font-family:monospace; text-transform:uppercase; letter-spacing:0.07em;">Oil Cost / Fill</div>
                  <div style="font-size:0.72rem; font-family:monospace; color:var(--clr-secondary); margin-top:3px;">↓ 25% saving</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="card" style="margin-bottom:32px; padding:20px 24px;">
          <div class="card-title">Customer Benefits</div>
          <p style="font-size:0.9rem; color:var(--clr-text-muted); margin-bottom:20px; max-width:820px;">
            A properly deaerating tank achieves the required separation efficiency at a lower fill volume.
            The excess oil was previously just a safety margin compensating for poor deaeration.
          </p>
          <div class="grid-3" style="gap:16px;">

            <div class="s1-item" style="border-color:var(--clr-secondary);">
              <div style="margin-bottom:8px; color:var(--clr-secondary);"><i data-lucide="droplet" style="width:22px;height:22px;stroke-width:2;"></i></div>
              <div style="font-weight:700; margin-bottom:6px; font-size:0.9rem;">Reduced Oil Volume</div>
              <p style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.65; margin:0;">
                Lower consumable cost, easier disposal, and a lighter system — less oil needed once
                deaeration efficiency is achieved by design rather than volume margin.
              </p>
              <div style="margin-top:8px; font-family:monospace; font-size:0.78rem; color:var(--clr-secondary); font-weight:700;">50% oil reduction on average</div>
            </div>

            <div class="s1-item" style="border-color:var(--clr-secondary);">
              <div style="margin-bottom:8px; color:var(--clr-secondary);"><i data-lucide="scale" style="width:22px;height:22px;stroke-width:2;"></i></div>
              <div style="font-weight:700; margin-bottom:6px; font-size:0.9rem;">Lighter Tank</div>
              <p style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.65; margin:0;">
                A weight reduction is significant on mobile machinery — direct mass savings improve
                payload capacity and fuel economy on every operating cycle.
              </p>
              <div style="margin-top:8px; font-family:monospace; font-size:0.78rem; color:var(--clr-secondary); font-weight:700;">↓ Weight reflects oil and tank reductions</div>
            </div>

            <div class="s1-item" style="border-color:var(--clr-secondary);">
              <div style="margin-bottom:8px; color:var(--clr-secondary);"><i data-lucide="wrench" style="width:22px;height:22px;stroke-width:2;"></i></div>
              <div style="font-weight:700; margin-bottom:6px; font-size:0.9rem;">Reduced Complexity</div>
              <p style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.65; margin:0;">
                Fewer baffles when flow is optimised — simpler fabrication, fewer weld seams, and faster
                assembly time reduce manufacturing cost per unit.
              </p>
              <div style="margin-top:8px; font-family:monospace; font-size:0.78rem; color:var(--clr-secondary); font-weight:700;">↓ Fewer baffles</div>
            </div>

            <div class="s1-item" style="border-color:var(--clr-secondary);">
              <div style="margin-bottom:8px; color:var(--clr-secondary);"><i data-lucide="banknote" style="width:22px;height:22px;stroke-width:2;"></i></div>
              <div style="font-weight:700; margin-bottom:6px; font-size:0.9rem;">Lower Operating Cost</div>
              <p style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.65; margin:0;">
                Less frequent oil changes, fewer filter replacements, and reduced pump wear translate to
                lower operating expenditure over the service life of the machine.
              </p>
              <div style="margin-top:8px; font-family:monospace; font-size:0.78rem; color:var(--clr-secondary); font-weight:700;">↓ Opex savings</div>
            </div>

            <div class="s1-item" style="border-color:var(--clr-secondary);">
              <div style="margin-bottom:8px; color:var(--clr-secondary);"><i data-lucide="thermometer" style="width:22px;height:22px;stroke-width:2;"></i></div>
              <div style="font-weight:700; margin-bottom:6px; font-size:0.9rem;">Better Thermal Performance</div>
              <p style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.65; margin:0;">
                Smaller oil volume reaches operating temperature faster in cold climates. Optimised flow
                paths also eliminate stagnant heat pockets within the reservoir.
              </p>
              <div style="margin-top:8px; font-family:monospace; font-size:0.78rem; color:var(--clr-secondary); font-weight:700;">↑ Faster warm-up</div>
            </div>

            <div class="s1-item" style="border-color:var(--clr-secondary);">
              <div style="margin-bottom:8px; color:var(--clr-secondary);"><i data-lucide="factory" style="width:22px;height:22px;stroke-width:2;"></i></div>
              <div style="font-weight:700; margin-bottom:6px; font-size:0.9rem;">Faster Build Process</div>
              <p style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.65; margin:0;">
                Simplified geometry speeds up manufacturing and assembly time. The optimised design
                goes straight to production — no iterative physical prototyping required.
              </p>
              <div style="margin-top:8px; font-family:monospace; font-size:0.78rem; color:var(--clr-secondary); font-weight:700;">↓ Fewer weld seams</div>
            </div>

          </div>
        </div>

        <div class="card" style="margin-bottom:28px; padding:20px 24px;">
          <div class="card-title">Why It Matters</div>
          <p style="font-size:0.9rem; color:var(--clr-text-muted); margin-bottom:20px; max-width:820px;">
            Air contamination in hydraulic fluid is not a nuisance — it is a primary failure mode.
            Poorly deaerating tanks cause a cascade of consequences that directly affect component life,
            system performance, and operating cost.
          </p>
          <div class="grid-3" style="gap:16px;">

            <div class="s1-item" style="border-color:var(--clr-danger);">
              <div style="margin-bottom:8px; color:var(--clr-danger);"><i data-lucide="zap" style="width:22px;height:22px;stroke-width:2;"></i></div>
              <div style="font-weight:700; margin-bottom:6px; font-size:0.9rem;">Cavitation &amp; Pump Erosion</div>
              <p style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.65; margin:0;">
                Air bubbles drawn into the pump collapse violently under high pressure. The implosion forces
                exceed material yield strength, eroding pump housings, piston shoes, and valve plates through
                micro-pitting. What begins as surface roughening progresses to spalling and ultimately
                catastrophic failure — cutting pump service life from thousands of hours to hundreds.
              </p>
            </div>

            <div class="s1-item" style="border-color:var(--clr-danger);">
              <div style="margin-bottom:8px; color:var(--clr-danger);"><i data-lucide="activity" style="width:22px;height:22px;stroke-width:2;"></i></div>
              <div style="font-weight:700; margin-bottom:6px; font-size:0.9rem;">Loss of Actuator Precision</div>
              <p style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.65; margin:0;">
                Air is compressible; hydraulic oil is not. Even 1–2% entrained air by volume can reduce
                the effective bulk modulus of the fluid by up to 50%, destroying the stiffness that makes
                precision control possible. Closed-loop position control becomes sluggish or unstable. In
                safety-critical applications — crane holding, steering, lifting — this is a direct hazard.
              </p>
            </div>

            <div class="s1-item" style="border-color:var(--clr-danger);">
              <div style="margin-bottom:8px; color:var(--clr-danger);"><i data-lucide="microscope" style="width:22px;height:22px;stroke-width:2;"></i></div>
              <div style="font-weight:700; margin-bottom:6px; font-size:0.9rem;">Accelerated Oil Oxidation</div>
              <p style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.65; margin:0;">
                Oxygen within entrained bubbles reacts with oil at elevated temperatures, producing acidic
                compounds, varnish deposits, and sludge. These contaminants attack seals, clog orifices,
                and abrade precision surfaces. Oil service life can be cut by 50–70%, driving up consumable
                costs and disposal requirements significantly.
              </p>
            </div>

            <div class="s1-item" style="border-color:var(--clr-danger);">
              <div style="margin-bottom:8px; color:var(--clr-danger);"><i data-lucide="filter" style="width:22px;height:22px;stroke-width:2;"></i></div>
              <div style="font-weight:700; margin-bottom:6px; font-size:0.9rem;">Filter Bypass Risk</div>
              <p style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.65; margin:0;">
                Air compresses within filter media, generating differential pressure spikes that open the
                bypass valve. When the filter bypasses, unfiltered oil reaches downstream components —
                negating the entire filtration system. Frequent bypass events are a strong indicator of an
                aeration problem, not a filter problem.
              </p>
            </div>

            <div class="s1-item" style="border-color:var(--clr-danger);">
              <div style="margin-bottom:8px; color:var(--clr-danger);"><i data-lucide="volume-2" style="width:22px;height:22px;stroke-width:2;"></i></div>
              <div style="font-weight:700; margin-bottom:6px; font-size:0.9rem;">Noise &amp; Vibration</div>
              <p style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.65; margin:0;">
                Aerated fluid causes chattering in hydraulic valves and erratic pressure pulsations in
                pumps, transmitted through pipework as structure-borne noise. On noise-sensitive applications
                — construction equipment, agricultural machinery, offshore installations — this affects
                operator comfort ratings and may breach contractual noise limits.
              </p>
            </div>

            <div class="s1-item" style="border-color:var(--clr-danger);">
              <div style="margin-bottom:8px; color:var(--clr-danger);"><i data-lucide="bar-chart-2" style="width:22px;height:22px;stroke-width:2;"></i></div>
              <div style="font-weight:700; margin-bottom:6px; font-size:0.9rem;">Oversized, Overweight Tanks</div>
              <p style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.65; margin:0;">
                Without analysis, engineers add oil volume as a safety margin against poor deaeration.
                A proper deaeration analysis identifies the minimum tank volume that reliably achieves the
                target separation efficiency — reducing size, weight, and fill cost simultaneously.
              </p>
            </div>

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
