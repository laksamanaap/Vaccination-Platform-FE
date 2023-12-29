import React from "react";

export const Dashboard = () => {
  return (
    <main>
      <header class="jumbotron">
        <div class="container">
          <h1 class="display-4">Dashboard</h1>
        </div>
      </header>

      <div class="container">
        <section class="consultation-section mb-5">
          <div class="section-header mb-3">
            <h4 class="section-title text-muted">My Consultation</h4>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="card card-default">
                <div class="card-header">
                  <h5 class="mb-0">Consultation</h5>
                </div>
                <div class="card-body">
                  <a href="">+ Request consultation</a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card card-default">
                <div class="card-header border-0">
                  <h5 class="mb-0">Consultation</h5>
                </div>
                <div class="card-body p-0">
                  <table class="table table-striped mb-0">
                    <tr>
                      <th>Status</th>
                      <td>
                        <span class="badge badge-info">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Disease History</th>
                      <td class="text-muted">-</td>
                    </tr>
                    <tr>
                      <th>Current Symptoms</th>
                      <td class="text-muted">flu and cough</td>
                    </tr>
                    <tr>
                      <th>Doctor Name</th>
                      <td class="text-muted">-</td>
                    </tr>
                    <tr>
                      <th>Doctor Notes</th>
                      <td class="text-muted">-</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card card-default">
                <div class="card-header border-0">
                  <h5 class="mb-0">Consultation</h5>
                </div>
                <div class="card-body p-0">
                  <table class="table table-striped mb-0">
                    <tr>
                      <th>Status</th>
                      <td>
                        <span class="badge badge-primary">Accepted</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Disease History</th>
                      <td class="text-muted">diabetes</td>
                    </tr>
                    <tr>
                      <th>Current Symptoms</th>
                      <td class="text-muted">flu</td>
                    </tr>
                    <tr>
                      <th>Doctor Name</th>
                      <td class="text-muted">Dr. Ratna Pradipta</td>
                    </tr>
                    <tr>
                      <th>Doctor Notes</th>
                      <td class="text-muted">ok</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="consultation-section mb-5">
          <div class="section-header mb-3">
            <h4 class="section-title text-muted">My Vaccinations</h4>
          </div>
          <div class="section-body">
            <div class="row mb-4">
              <div class="col-md-12">
                <div class="alert alert-warning">
                  Your consultation must be approved by doctor to get the
                  vaccine.
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-default">
                  <div class="card-header border-0">
                    <h5 class="mb-0">First Vaccination</h5>
                  </div>
                  <div class="card-body">
                    <a href="">+ Register vaccination</a>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-default">
                  <div class="card-header border-0">
                    <h5 class="mb-0">First Vaccination</h5>
                  </div>
                  <div class="card-body p-0">
                    <table class="table table-striped mb-0">
                      <tr>
                        <th>Status</th>
                        <td class="text-muted">
                          <span class="badge badge-info">Registered</span>
                        </td>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td class="text-muted">October 27, 2021</td>
                      </tr>
                      <tr>
                        <th>Spot</th>
                        <td class="text-muted">Usamah Hospital</td>
                      </tr>
                      <tr>
                        <th>Vaccine</th>
                        <td class="text-muted">-</td>
                      </tr>
                      <tr>
                        <th>Vaccinator</th>
                        <td class="text-muted">-</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-default">
                  <div class="card-header border-0">
                    <h5 class="mb-0">First Vaccination</h5>
                  </div>
                  <div class="card-body p-0">
                    <table class="table table-striped mb-0">
                      <tr>
                        <th>Status</th>
                        <td class="text-muted">
                          <span class="badge badge-primary">Vaccinated</span>
                        </td>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td class="text-muted">October 27, 2021</td>
                      </tr>
                      <tr>
                        <th>Spot</th>
                        <td class="text-muted">Usamah Hospital</td>
                      </tr>
                      <tr>
                        <th>Vaccine</th>
                        <td class="text-muted">Sinovac</td>
                      </tr>
                      <tr>
                        <th>Vaccinator</th>
                        <td class="text-muted">Dr. Raina Pradipta</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card card-default">
                  <div class="card-header border-0">
                    <h5 class="mb-0">Second Vaccination</h5>
                  </div>
                  <div class="card-body">
                    <a href="">+ Register vaccination</a>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-default">
                  <div class="card-header border-0">
                    <h5 class="mb-0">Second Vaccination</h5>
                  </div>
                  <div class="card-body p-0">
                    <table class="table table-striped mb-0">
                      <tr>
                        <th>Status</th>
                        <td class="text-muted">
                          <span class="badge badge-info">Registered</span>
                        </td>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td class="text-muted">October 27, 2021</td>
                      </tr>
                      <tr>
                        <th>Spot</th>
                        <td class="text-muted">Usamah Hospital</td>
                      </tr>
                      <tr>
                        <th>Vaccine</th>
                        <td class="text-muted">-</td>
                      </tr>
                      <tr>
                        <th>Vaccinator</th>
                        <td class="text-muted">-</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card card-default">
                  <div class="card-header border-0">
                    <h5 class="mb-0">Second Vaccination</h5>
                  </div>
                  <div class="card-body p-0">
                    <table class="table table-striped mb-0">
                      <tr>
                        <th>Status</th>
                        <td class="text-muted">
                          <span class="badge badge-primary">Vaccinated</span>
                        </td>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td class="text-muted">October 27, 2021</td>
                      </tr>
                      <tr>
                        <th>Spot</th>
                        <td class="text-muted">Usamah Hospital</td>
                      </tr>
                      <tr>
                        <th>Vaccine</th>
                        <td class="text-muted">Sinovac</td>
                      </tr>
                      <tr>
                        <th>Vaccinator</th>
                        <td class="text-muted">Dr. Raina Pradipta</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
