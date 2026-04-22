/**
 * slide5.js — Submission Requirements
 * Interactive element: checklist with progress bar tracking readiness.
 * Download button triggers a client-side Blob CSV download.
 */

window.SlideModules = window.SlideModules || [];

window.SlideModules.push({
  title: 'Submission Requirements',

  /** CSV content for the downloadable submission template */
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
    'Tank Geometry,Current Baffle Configuration,,',
    '',
    'Port Details,Return Port Count,,',
    'Port Details,Return Port Diameter(s) (mm),,',
    'Port Details,Return Port Depth Below Surface (mm),,',
    'Port Details,Suction Port Count,,',
    'Port Details,Suction Port Diameter(s) (mm),,',
    'Port Details,Suction Port Depth Below Surface (mm),,',
    'Port Details,Drain / Case Drain Ports,,',
    '',
    'Operating Conditions,Nominal Flow Rate (L/min),,',
    'Operating Conditions,Maximum Flow Rate (L/min),,',
    'Operating Conditions,Operating Temperature Range (°C),,',
    'Operating Conditions,Oil Type / Grade,,',
    'Operating Conditions,Oil Kinematic Viscosity at 40°C (cSt),,',
    '',
    'Vehicle / Machine,Machine Type,,',
    'Vehicle / Machine,Maximum Static Tilt Angle — Longitudinal (°),,',
    'Vehicle / Machine,Maximum Static Tilt Angle — Lateral (°),,',
    'Vehicle / Machine,Maximum Dynamic Deceleration (m/s²),,',
    'Vehicle / Machine,Maximum Dynamic Lateral Acceleration (m/s²),,',
    '',
    'Supplied Files,Tank Opti Sheet (Excel),,Mandatory',
    'Supplied Files,Port Diagram,, Mandatory',
    'Supplied Files,CAD Model (STEP/IGES),,Mandatory',
    'Supplied Files,SpaceClaim / Photos,,Recommended',
    'Supplied Files,Acceleration / Drive Cycle Data,,Required for sloshing',
    '',
    'Target Deaeration Efficiency (%),,(specify),,',
    'Any Special Requirements / Comments,,,,',
  ].join('\n'),

  getHTML() {
    return /* html */`
      <div class="slide-inner">

        <div class="section-tag">Module 05 — Getting Started</div>
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
              <div style="font-family:monospace; font-size:0.7rem; letter-spacing:.1em; text-transform:uppercase;
                color:var(--clr-primary); margin-bottom:14px; display:flex; align-items:center; gap:8px;">
                <span style="width:8px; height:8px; border-radius:50%; background:var(--clr-primary); display:inline-block;"></span>
                General
              </div>

              <div style="display:flex; flex-direction:column; gap:10px;">

                <div class="card" style="border-left:3px solid var(--clr-primary); padding:14px 18px;">
                  <div style="display:flex; gap:14px; align-items:flex-start;">
                    <div style="font-size:1.2rem; min-width:28px; color:var(--clr-primary);"><i data-lucide="file-spreadsheet" style="width:22px;height:22px;stroke-width:2;"></i></div>
                    <div>
                      <div style="font-weight:600; margin-bottom:3px; font-size:0.9rem;">Tank Opti Sheet <span style="font-style:italic; font-weight:400;">(Excel)</span></div>
                      <div style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.6;">
                        HYDAC's structured submission template. Covers all technical parameters: geometry, port sizes,
                        flow rates, oil type, and operating conditions. Download the template using the button on the right.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card" style="border-left:3px solid var(--clr-primary); padding:14px 18px;">
                  <div style="display:flex; gap:14px; align-items:flex-start;">
                    <div style="font-size:1.2rem; min-width:28px; color:var(--clr-primary);"><i data-lucide="git-branch" style="width:22px;height:22px;stroke-width:2;"></i></div>
                    <div>
                      <div style="font-weight:600; margin-bottom:3px; font-size:0.9rem;">Port Diagram with Flow Directions &amp; Rates</div>
                      <div style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.6;">
                        Marked up image or drawing showing all port locations on the tank, their function (return, suction,
                        drain, case drain), and the associated nominal and surge flow rates.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card" style="border-left:3px solid var(--clr-primary); padding:14px 18px;">
                  <div style="display:flex; gap:14px; align-items:flex-start;">
                    <div style="font-size:1.2rem; min-width:28px; color:var(--clr-primary);"><i data-lucide="box" style="width:22px;height:22px;stroke-width:2;"></i></div>
                    <div>
                      <div style="font-weight:600; margin-bottom:3px; font-size:0.9rem;">CAD Model of Current Tank</div>
                      <div style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.6;">
                        STEP or x_t format preferred for meshing accuracy. Should include all internal features:
                        baffles, standpipes, return diffusers, and any port fittings.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card" style="border-left:3px solid var(--clr-primary); padding:14px 18px;">
                  <div style="display:flex; gap:14px; align-items:flex-start;">
                    <div style="font-size:1.2rem; min-width:28px; color:var(--clr-primary);"><i data-lucide="folder-open" style="width:22px;height:22px;stroke-width:2;"></i></div>
                    <div>
                      <div style="font-weight:600; margin-bottom:3px; font-size:0.9rem;">SpaceClaim File or Photos</div>
                      <div style="font-size:0.8rem; color:var(--clr-text-muted); line-height:1.6;">
                        A SpaceClaim file or high-resolution photos
                        of the tank mounting location assist in model concept generation and port identification.
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Sloshing section -->
            <div>
              <div style="font-family:monospace; font-size:0.7rem; letter-spacing:.1em; text-transform:uppercase;
                color:var(--clr-secondary); margin-bottom:14px; display:flex; align-items:center; gap:8px;">
                <span style="width:8px; height:8px; border-radius:50%; background:var(--clr-secondary); display:inline-block;"></span>
                Sloshing
              </div>

              <div class="card" style="border: 1px solid var(--clr-secondary); padding:14px 18px;">
                <div style="display:flex; gap:14px; align-items:flex-start;">
                  <div style="font-size:1.2rem; min-width:28px; color:var(--clr-secondary);"><i data-lucide="activity" style="width:22px;height:22px;stroke-width:2;"></i></div>
                  <div>
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
            </div>

          </div>

          <!-- Right: download + next step -->
          <div style="position:sticky; top:20px; display:flex; flex-direction:column; gap:16px;">

            <!-- Download card -->
            <div class="card" style="background:var(--clr-surface-2); border-color:var(--clr-primary);">
              <div class="card-title"><i data-lucide="download" style="width:16px;height:16px;vertical-align:-3px;stroke-width:2;"></i> Download Template</div>
              <p style="font-size:0.78rem; color:var(--clr-text-muted); margin-bottom:14px; line-height:1.6;">
              Download the pre-populated Excel submission template to begin collecting the required information
              before contacting the HYDAC engineering team.
              </p>
              <button id="s5-download" class="btn-primary" style="width:100%; justify-content:center;">
                                <i data-lucide="download" style="width:15px;height:15px;vertical-align:-2px;stroke-width:2;"></i> Download Tank-Opti Request Form
              </button>
            </div>

            <!-- Next step card -->
            <div class="card" style="background:var(--clr-surface-2); border-color:var(--clr-secondary);">
              <div style="font-family:monospace; font-size:0.65rem; letter-spacing:.1em; text-transform:uppercase; color:var(--clr-secondary); margin-bottom:6px;">Next Step</div>
              <p style="font-size:0.78rem; color:var(--clr-text-muted); line-height:1.6;">
                Once the items above are assembled, proceed to the final slide to contact our engineering team
                and initiate your deaeration analysis.
              </p>
            </div>

            <!-- Info card -->
            <div class="card" style="background:var(--clr-surface-2);">
              <div style="font-family:monospace; font-size:0.65rem; letter-spacing:.1em; text-transform:uppercase; color:var(--clr-text-muted); margin-bottom:8px;">Typical Turnaround</div>
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
      a.href     = 'components/Hydac_Tank_Opti_Request_Form.xlsx';
      a.download = 'components/Hydac_Tank_Opti_Request_Form.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
});
