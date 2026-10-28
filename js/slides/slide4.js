/**
 * slide4.js — Submission Requirements
 * Interactive element: checklist with progress bar tracking readiness.
 * Download button triggers a client-side Blob CSV download.
 */

window.SlideModules = window.SlideModules || [];

window.SlideModules.push({
  title: 'Submission Requirements',

  getHTML() {
    return /* html */`
      <div class="slide-inner">

        <h1 class="slide-title">Submission <span class="accent">Requirements</span></h1>
        <p class="slide-subtitle">
          Gather the items below before initiating your analysis. The more complete your submission,
          the faster we can begin and the more accurate the simulation results will be.
        </p>

        <div style="display:grid; grid-template-columns:1fr 300px; gap:28px; align-items:start;">

          <!-- Left: requirements sections -->
          <div style="display:flex; flex-direction:column; gap:28px;">

            <!-- General section -->
            <div>
              <div class="card-title" style="margin-bottom:14px;">
                Deaeration Analysis
              </div>

              <div style="display:flex; flex-direction:column; gap:10px;">

                <div class="card" style="box-shadow:none; border:1px solid var(--clr-primary); padding:14px 18px;">
                  <div style="font-weight:600; margin-bottom:3px; font-size:0.9rem;">Tank Opti Sheet <span style="font-style:italic; font-weight:400;">(Excel)</span></div>
                  <div style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.6;">
                    HYDAC's structured submission template. Covers all technical parameters: geometry, port sizes,
                    flow rates, oil type, and operating conditions. Download the template using the button on the right.
                  </div>
                </div>

                <div class="card" style="box-shadow:none; border:1px solid var(--clr-primary); padding:14px 18px;">
                  <div style="font-weight:600; margin-bottom:3px; font-size:0.9rem;">Port Diagram with Flow Directions &amp; Rates</div>
                  <div style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.6;">
                    Marked up image or drawing showing all port locations on the tank, their function (return, suction,
                    drain, case drain), and the associated nominal and surge flow rates.
                  </div>
                </div>

                <div class="card" style="box-shadow:none; border:1px solid var(--clr-primary); padding:14px 18px;">
                  <div style="font-weight:600; margin-bottom:3px; font-size:0.9rem;">CAD Model of Current Tank</div>
                  <div style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.6;">
                    STEP or x_t format preferred for meshing accuracy. Should include all internal features:
                    baffles, standpipes, return diffusers, and any port fittings.
                  </div>
                </div>

                <div class="card" style="box-shadow:none; border:1px solid var(--clr-primary); padding:14px 18px;">
                  <div style="font-weight:600; margin-bottom:3px; font-size:0.9rem;">SpaceClaim File or Photos</div>
                  <div style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.6;">
                    A SpaceClaim file or high-resolution photos
                    of the tank mounting location assist in model concept generation and port identification.
                  </div>
                </div>

              </div>
            </div>

            <!-- Sloshing section -->
            <div>
              <div class="card-title" style="color:var(--clr-secondary); margin-bottom:14px;">
                Sloshing
              </div>

              <div class="card" style="box-shadow:none; border:1px solid var(--clr-secondary); padding:14px 18px;">
                <div style="font-weight:600; margin-bottom:3px; font-size:0.9rem;">Acceleration Data / Drive Cycle</div>
                <div style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.6;">
                  Longitudinal and lateral acceleration profiles covering acceleration, turbulence, braking, and
                  cornering events. Measured drive cycle data from the actual machine is preferred; recognised
                  industry-standard profiles can be applied if measured data is unavailable.
                  <span style="color:var(--clr-secondary); font-weight:600;"> Required if sloshing simulation is in scope.</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Right: download + next step -->
          <div style="position:sticky; top:20px; display:flex; flex-direction:column; gap:16px;">

            <!-- Download card -->
            <div class="card" style="box-shadow:none;background:var(--clr-surface-2);">
              <div class="card-title"><i data-lucide="download" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i> Download Template</div>
              <p style="font-size:0.78rem; color:var(--clr-text-muted); margin-bottom:14px; line-height:1.6;">
              Download the submission template to begin collecting the required information
              before contacting the HYDAC engineering team.
              </p>
              <button id="s5-download" class="btn-primary" style="width:100%; justify-content:center;">
                                <i data-lucide="download" style="width:18px;height:18px;flex-shrink:0;vertical-align:-2px;stroke-width:2;"></i> Download Tank-Opti Request Form
              </button>
            </div>

            <!-- Next step card -->
            <div class="card" style="box-shadow:none;background:var(--clr-surface-2);">
              <div class="card-title" style="color:var(--clr-secondary);">Next Step</div>
              <p style="font-size:0.78rem; color:var(--clr-text-muted); line-height:1.6;">
                Once the items above are assembled, contact our engineering team
                and initiate your deaeration analysis.
              </p>
            </div>

            <!-- Info card -->
            <div class="card" style="box-shadow:none;background:var(--clr-surface-2);">
              <div class="card-title" style="color:var(--clr-text-muted);">Typical Turnaround</div>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:0.78rem; color:var(--clr-text-muted);">Initial review</span>
                  <span style="font-size:0.78rem; font-weight:600; color:var(--clr-primary);">14–21 days</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:0.78rem; color:var(--clr-text-muted);">Sloshing analysis report</span>
                  <span style="font-size:0.78rem; font-weight:600; color:var(--clr-primary);">7–14 days</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  },

  /**
   * init — wires up the download button only.
   * @param {HTMLElement} el
   */
  init(el) {
    const downloadBtn = el.querySelector('#s5-download');

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
