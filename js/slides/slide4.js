/**
 * slide4.js — Customer Benefits
 * Interactive element: Before / After toggle that animates a schematic
 * tank diagram (SVG) and delta metric cards.
 */

window.SlideModules = window.SlideModules || [];

window.SlideModules.push({
  title: 'Customer Benefits',

  getHTML() {
    return /* html */`
      <div class="slide-inner">

        <!-- Header -->
        <div class="section-tag">Module 04 — Value Proposition</div>
        <h1 class="slide-title">Customer <span class="accent">Benefits</span></h1>
        <p class="slide-subtitle">
          A properly deaerating tank achieves the required separation efficiency at a lower fill volume.
          The excess oil was previously just a safety margin compensating for poor deaeration.
        </p>

        <!-- Before / After toggle -->
        <div style="display:flex; align-items:center; gap:16px; margin-bottom:28px;">
          <span style="font-size:0.875rem; font-weight:600; color:var(--clr-text-muted);">Before Optimisation</span>
          <button id="s4-toggle" style="
            position:relative; width:56px; height:28px;
            background:var(--clr-surface-2); border:1px solid var(--clr-border);
            border-radius:14px; cursor:pointer; transition:background .3s, border-color .3s;
          ">
            <span id="s4-thumb" style="
              position:absolute; top:3px; left:3px;
              width:20px; height:20px; background:var(--clr-text-muted);
              border-radius:50%; transition:transform .3s, background .3s;
            "></span>
          </button>
          <span style="font-size:0.875rem; font-weight:600; color:var(--clr-text-muted);">After Optimisation</span>
          <div id="s4-state-badge" style="
            font-family:monospace; font-size:0.7rem; letter-spacing:.1em;
            text-transform:uppercase; padding:3px 12px; border-radius:20px;
            background:var(--clr-danger); color:#fff; font-weight:700;
            transition:background .3s;">BEFORE</div>
        </div>

        <!-- Two-column: tank diagram + benefits grid -->
        <div style="display:grid; grid-template-columns:340px 1fr; gap:28px; align-items:start;">

          <!-- Tank Schematic SVG -->
          <div class="card" style="text-align:center;">
            <div class="card-title" style="justify-content:center;"><i data-lucide="layout-dashboard" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i> Tank Schematic</div>
            <svg id="s4-svg" viewBox="0 0 280 320" width="100%" style="max-width:280px; margin:0 auto; display:block;">
              <!-- Tank body -->
              <rect x="40" y="20" width="200" height="260" rx="10"
                fill="#111622" stroke="#1e2d45" stroke-width="2" />

              <!-- Oil fill — animated height -->
              <rect id="s4-oil" x="42" y="100" width="196" height="178" rx="8"
                fill="#0ea5e915" style="transition:y .7s ease, height .7s ease;" />
              <line id="s4-oil-line" x1="42" y1="100" x2="238" y2="100"
                stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="4 3"
                style="transition:y1 .7s ease, y2 .7s ease;" />

              <!-- Volume label -->
              <text id="s4-vol-label" x="140" y="170" text-anchor="middle"
                font-family="Inter,sans-serif" font-size="22" font-weight="800"
                fill="#0ea5e9" style="transition:opacity .4s;">
                120 L
              </text>
              <text x="140" y="190" text-anchor="middle"
                font-family="monospace" font-size="9" fill="#64748b" letter-spacing="2">
                OIL VOLUME
              </text>

              <!-- Return port (top right) -->
              <rect x="200" y="10" width="20" height="30" rx="4"
                fill="#1a2035" stroke="#1e2d45" stroke-width="1.5" />
              <text x="210" y="5" text-anchor="middle"
                font-family="monospace" font-size="7" fill="#64748b">RET</text>

              <!-- Suction port (bottom left) -->
              <rect x="60" y="270" width="20" height="30" rx="4"
                fill="#1a2035" stroke="#1e2d45" stroke-width="1.5" />
              <text x="70" y="318" text-anchor="middle"
                font-family="monospace" font-size="7" fill="#64748b">SUC</text>

              <!-- Weight label -->
              <text id="s4-wt-label" x="140" y="230" text-anchor="middle"
                font-family="Inter,sans-serif" font-size="13" font-weight="600"
                fill="#64748b">
                Tank: 48 kg total
              </text>

              <!-- Cost label -->
              <text id="s4-cost-label" x="140" y="250" text-anchor="middle"
                font-family="Inter,sans-serif" font-size="11"
                fill="#64748b">
                Oil cost: €240/fill
              </text>

              <!-- Baffles (before = many, after = fewer) -->
              <g id="s4-baffles">
                <line x1="100" y1="60" x2="100" y2="150" stroke="#1e2d45" stroke-width="4" stroke-linecap="round"/>
                <line x1="160" y1="110" x2="160" y2="200" stroke="#1e2d45" stroke-width="4" stroke-linecap="round"/>
                <line x1="120" y1="180" x2="120" y2="260" stroke="#1e2d45" stroke-width="4" stroke-linecap="round"/>
              </g>
            </svg>

            <!-- Delta metrics strip -->
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; margin-top:16px;">
              <div style="padding:8px; background:var(--clr-surface-2); border-radius:8px;">
                <div id="s4-d-vol" style="font-size:1rem; font-weight:800; color:var(--clr-text-muted); transition:color .4s;">120 L</div>
                <div style="font-size:0.65rem; color:var(--clr-text-muted); font-family:monospace; text-transform:uppercase;">Volume</div>
              </div>
              <div style="padding:8px; background:var(--clr-surface-2); border-radius:8px;">
                <div id="s4-d-wt" style="font-size:1rem; font-weight:800; color:var(--clr-text-muted); transition:color .4s;">48 kg</div>
                <div style="font-size:0.65rem; color:var(--clr-text-muted); font-family:monospace; text-transform:uppercase;">Weight</div>
              </div>
              <div style="padding:8px; background:var(--clr-surface-2); border-radius:8px;">
                <div id="s4-d-cost" style="font-size:1rem; font-weight:800; color:var(--clr-text-muted); transition:color .4s;">€240</div>
                <div style="font-size:0.65rem; color:var(--clr-text-muted); font-family:monospace; text-transform:uppercase;">Oil Cost</div>
              </div>
            </div>
          </div>

          <!-- Benefits grid -->
          <div>
            <div id="s4-savings-banner" style="
              padding:12px 20px; background:var(--clr-surface-2);
              border:1px solid var(--clr-border); border-radius:10px;
              margin-bottom:20px; display:flex; align-items:center; gap:16px;
              transition:border-color .4s, background .4s;">
              <div style="min-width:36px; color:var(--clr-text-muted);"><i data-lucide="trending-down" style="width:28px;height:28px;stroke-width:1.75;"></i></div>
              <div>
                <div id="s4-banner-text" style="font-weight:700; font-size:1.05rem; color:var(--clr-text-muted); transition:color .4s;">
                  Suboptimal configuration — excess oil compensating for poor deaeration
                </div>
                <div id="s4-banner-sub" style="font-size:0.8rem; color:var(--clr-text-muted); margin-top:2px;">
                  Toggle to "After" to see what optimisation delivers
                </div>
              </div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">

              <div class="card s4-benefit-card" data-benefit="0">
                <div style="margin-bottom:6px; color:var(--clr-primary);"><i data-lucide="droplet" style="width:22px;height:22px;stroke-width:2;"></i></div>
                <div style="font-weight:700; margin-bottom:4px; font-size:0.9rem;">Reduced Oil Volume</div>
                <p style="font-size:0.8rem; color:var(--clr-text-muted);">Lower consumable cost, easier disposal, lighter system.</p>
                <div id="s4-b0" class="s4-delta" style="display:none; margin-top:8px; font-family:monospace; font-size:0.85rem; color:var(--clr-secondary); font-weight:700;">↓ 25% less oil</div>
              </div>

              <div class="card s4-benefit-card" data-benefit="1">
                <div style="margin-bottom:6px; color:var(--clr-primary);"><i data-lucide="scale" style="width:22px;height:22px;stroke-width:2;"></i></div>
                <div style="font-weight:700; margin-bottom:4px; font-size:0.9rem;">Lighter Tank</div>
                <p style="font-size:0.8rem; color:var(--clr-text-muted);">Significant on mobile machinery — direct mass reduction improves payload.</p>
                <div id="s4-b1" class="s4-delta" style="display:none; margin-top:8px; font-family:monospace; font-size:0.85rem; color:var(--clr-secondary); font-weight:700;">↓ −8 kg total</div>
              </div>

              <div class="card s4-benefit-card" data-benefit="2">
                <div style="margin-bottom:6px; color:var(--clr-primary);"><i data-lucide="wrench" style="width:22px;height:22px;stroke-width:2;"></i></div>
                <div style="font-weight:700; margin-bottom:4px; font-size:0.9rem;">Reduced Complexity</div>
                <p style="font-size:0.8rem; color:var(--clr-text-muted);">Fewer baffles when flow is optimised — simpler fabrication and assembly.</p>
                <div id="s4-b2" class="s4-delta" style="display:none; margin-top:8px; font-family:monospace; font-size:0.85rem; color:var(--clr-secondary); font-weight:700;">↓ 2 fewer baffles</div>
              </div>

              <div class="card s4-benefit-card" data-benefit="3">
                <div style="margin-bottom:6px; color:var(--clr-primary);"><i data-lucide="banknote" style="width:22px;height:22px;stroke-width:2;"></i></div>
                <div style="font-weight:700; margin-bottom:4px; font-size:0.9rem;">Lower Operating Cost</div>
                <p style="font-size:0.8rem; color:var(--clr-text-muted);">Less frequent oil changes, fewer filter replacements, reduced pump wear.</p>
                <div id="s4-b3" class="s4-delta" style="display:none; margin-top:8px; font-family:monospace; font-size:0.85rem; color:var(--clr-secondary); font-weight:700;">↓ ~30% opex savings</div>
              </div>

              <div class="card s4-benefit-card" data-benefit="4">
                <div style="margin-bottom:6px; color:var(--clr-primary);"><i data-lucide="thermometer" style="width:22px;height:22px;stroke-width:2;"></i></div>
                <div style="font-weight:700; margin-bottom:4px; font-size:0.9rem;">Better Thermal Performance</div>
                <p style="font-size:0.8rem; color:var(--clr-text-muted);">Smaller oil volume heats up faster in cold climates; optimised flow reduces heat pockets.</p>
                <div id="s4-b4" class="s4-delta" style="display:none; margin-top:8px; font-family:monospace; font-size:0.85rem; color:var(--clr-secondary); font-weight:700;">↑ Faster warm-up</div>
              </div>

              <div class="card s4-benefit-card" data-benefit="5">
                <div style="margin-bottom:6px; color:var(--clr-primary);"><i data-lucide="factory" style="width:22px;height:22px;stroke-width:2;"></i></div>
                <div style="font-weight:700; margin-bottom:4px; font-size:0.9rem;">Faster Build Process</div>
                <p style="font-size:0.8rem; color:var(--clr-text-muted);">Simplified geometry speeds up manufacturing and assembly time.</p>
                <div id="s4-b5" class="s4-delta" style="display:none; margin-top:8px; font-family:monospace; font-size:0.85rem; color:var(--clr-secondary); font-weight:700;">↓ Fewer weld seams</div>
              </div>

            </div>
          </div>
        </div>

        <style>
          .s4-benefit-card { transition: border-color .35s, background .35s; }
          .s4-benefit-card.after-active {
            border-color: var(--clr-secondary) !important;
            background: #10b98110 !important;
          }
        </style>
      </div>
    `;
  },

  /**
   * init — wires up the before/after toggle.
   * @param {HTMLElement} el
   */
  init(el) {
    const toggle   = el.querySelector('#s4-toggle');
    const thumb    = el.querySelector('#s4-thumb');
    const badge    = el.querySelector('#s4-state-badge');
    const oilRect  = el.querySelector('#s4-oil');
    const oilLine  = el.querySelector('#s4-oil-line');
    const volLabel = el.querySelector('#s4-vol-label');
    const wtLabel  = el.querySelector('#s4-wt-label');
    const costLabel = el.querySelector('#s4-cost-label');
    const dVol     = el.querySelector('#s4-d-vol');
    const dWt      = el.querySelector('#s4-d-wt');
    const dCost    = el.querySelector('#s4-d-cost');
    const banner   = el.querySelector('#s4-savings-banner');
    const bannerTxt = el.querySelector('#s4-banner-text');
    const bannerSub = el.querySelector('#s4-banner-sub');
    const baffles  = el.querySelector('#s4-baffles');

    let isAfter = false;

    /** Apply "before" state to the SVG and metrics */
    function applyBefore() {
      oilRect.setAttribute('y', '100');
      oilRect.setAttribute('height', '178');
      oilLine.setAttribute('y1', '100');
      oilLine.setAttribute('y2', '100');
      volLabel.textContent = '120 L';
      wtLabel.textContent  = 'Tank: 48 kg total';
      costLabel.textContent = 'Oil cost: €240/fill';

      dVol.textContent  = '120 L';  dVol.style.color = 'var(--clr-text-muted)';
      dWt.textContent   = '48 kg';  dWt.style.color  = 'var(--clr-text-muted)';
      dCost.textContent = '€240';   dCost.style.color = 'var(--clr-text-muted)';

      // Show all 3 baffles
      baffles.style.opacity = '1';

      badge.textContent = 'BEFORE';
      badge.style.background = 'var(--clr-danger)';
      toggle.style.background = 'var(--clr-surface-2)';
      toggle.style.borderColor = 'var(--clr-border)';
      thumb.style.transform    = 'translateX(0)';
      thumb.style.background   = 'var(--clr-text-muted)';

      banner.style.borderColor = 'var(--clr-border)';
      banner.style.background  = 'var(--clr-surface-2)';
      bannerTxt.style.color    = 'var(--clr-text-muted)';
      bannerTxt.textContent    = 'Suboptimal configuration — excess oil compensating for poor deaeration';
      bannerSub.textContent    = 'Toggle to "After" to see what optimisation delivers';

      el.querySelectorAll('.s4-benefit-card').forEach(c => c.classList.remove('after-active'));
      el.querySelectorAll('.s4-delta').forEach(d => { d.style.display = 'none'; });
    }

    /** Apply "after" state to the SVG and metrics */
    function applyAfter() {
      oilRect.setAttribute('y', '148');
      oilRect.setAttribute('height', '130');
      oilLine.setAttribute('y1', '148');
      oilLine.setAttribute('y2', '148');
      volLabel.textContent = '90 L';
      wtLabel.textContent  = 'Tank: 40 kg total';
      costLabel.textContent = 'Oil cost: €180/fill';

      dVol.textContent  = '90 L ↓25%'; dVol.style.color = 'var(--clr-secondary)';
      dWt.textContent   = '40 kg ↓8';  dWt.style.color  = 'var(--clr-secondary)';
      dCost.textContent = '€180 ↓25%'; dCost.style.color = 'var(--clr-secondary)';

      // Fewer baffles after optimisation
      baffles.style.opacity = '0.3';

      badge.textContent = 'AFTER';
      badge.style.background = 'var(--clr-secondary)';
      toggle.style.background = '#10b98130';
      toggle.style.borderColor = 'var(--clr-secondary)';
      thumb.style.transform    = 'translateX(28px)';
      thumb.style.background   = 'var(--clr-secondary)';

      banner.style.borderColor = 'var(--clr-secondary)';
      banner.style.background  = '#10b98110';
      bannerTxt.style.color    = 'var(--clr-secondary)';
      bannerTxt.textContent    = 'Optimised configuration — 25% less oil, 8 kg lighter, lower running costs';
      bannerSub.textContent    = 'Simulation-validated. No prototype required to reach this outcome.';

      el.querySelectorAll('.s4-benefit-card').forEach(c => c.classList.add('after-active'));
      el.querySelectorAll('.s4-delta').forEach(d => { d.style.display = 'block'; });
    }

    toggle.addEventListener('click', () => {
      isAfter = !isAfter;
      isAfter ? applyAfter() : applyBefore();
    });

    // Start in "before" state
    applyBefore();
  }
});
