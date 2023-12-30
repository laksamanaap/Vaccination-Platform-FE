import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../../utils/router";

export const VacinationSpotDetail = () => {
  const { id } = useParams();

  const [spotDetailData, setSpotDetailData] = useState({});

  const fetchSpotDetail = async () => {
    try {
      const response = await client.get(`v1/spots/${id}`);
      setSpotDetailData(response?.data.spot);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegisterVaccination = (e) => {
    e.preventDefault();
    console.log("registered");
  };

  useEffect(() => {
    fetchSpotDetail();
  }, []);

  console.log(spotDetailData);

  return (
    <main>
      <header class="jumbotron">
        <div class="container d-flex justify-content-between align-items-center">
          <div>
            <h1 class="display-4">{spotDetailData.name ?? "-"}</h1>
            <span class="text-muted">{spotDetailData.address ?? "-"}</span>
          </div>
          <a
            href=""
            class="btn btn-primary"
            onClick={handleRegisterVaccination}
          >
            Register vaccination
          </a>
        </div>
      </header>

      <div class="container">
        <div class="row mb-3">
          <div class="col-md-3">
            <div class="form-group">
              <label for="vaccination-date">Select vaccination date</label>
              <input type="date" class="form-control" id="vaccination-date" />
            </div>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-md-4">
            <div class="card card-default">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h4>Session 1</h4>
                  <span class="text-muted">09:00 - 11:00</span>
                </div>
                <div>
                  <div class="row">
                    <div class="col-4 mb-4">
                      <div class="slot filled"> #1 </div>
                    </div>
                    <div class="col-4 mb-4">
                      <div class="slot filled"> #2 </div>
                    </div>
                    <div class="col-4 mb-4">
                      <div class="slot filled"> #3 </div>
                    </div>
                    <div class="col-4 mb-4">
                      <div class="slot filled"> #4 </div>
                    </div>
                    <div class="col-4 mb-4">
                      <div class="slot filled"> #5 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-default">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h4>Session 2</h4>
                  <span class="text-muted">13:00 - 15:00</span>
                </div>
                <div>
                  <div class="row">
                    <div class="col-4 mb-4">
                      <div class="slot filled"> #6 </div>
                    </div>
                    <div class="col-4 mb-4">
                      <div class="slot filled"> #7 </div>
                    </div>
                    <div class="col-4 mb-4">
                      <div class="slot bg-primary text-white"> #8 </div>
                    </div>
                    <div class="col-4 mb-4">
                      <div class="slot"> #9 </div>
                    </div>
                    <div class="col-4 mb-4">
                      <div class="slot"> #10 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-default">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h4>Session 3</h4>
                  <span class="text-muted">15:00 - 17:00</span>
                </div>
                <div>
                  <div class="row">
                    <div class="col-4 mb-4">
                      <div class="slot"> #11 </div>
                    </div>
                    <div class="col-4 mb-4">
                      <div class="slot"> #12 </div>
                    </div>
                    <div class="col-4 mb-4">
                      <div class="slot"> #13 </div>
                    </div>
                    <div class="col-4 mb-4">
                      <div class="slot"> #14 </div>
                    </div>
                    <div class="col-4 mb-4">
                      <div class="slot"> #15 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
