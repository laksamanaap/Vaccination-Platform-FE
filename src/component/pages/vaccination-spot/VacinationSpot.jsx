import React, { useState, useEffect } from "react";
import client from "../../../utils/router";

export const VacinationSpot = () => {
  const [vaccinationData, setVaccinationData] = useState([]);
  const [spotsData, setSpotsData] = useState([]);

  const [districtData, setDistrictData] = useState("");
  const [provinceData, setProvinceData] = useState("");

  const fetchVaccination = async () => {
    try {
      const response = await client.get("v1/vaccinations");
      setVaccinationData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSpots = async () => {
    try {
      const response = await client.get("v1/spots");
      setProvinceData(response?.data.province);
      setDistrictData(response?.data.district);
      setSpotsData(response?.data.spots);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVaccination();
    fetchSpots();
  }, []);

  console.log("Vaccination Data : ", vaccinationData);
  console.log("Spots Data : ", spotsData);
  console.log("District Data : ", districtData);

  return (
    <main>
      <header class="jumbotron">
        <div class="container">
          <h1 class="display-4">
            {vaccinationData.length === 0
              ? "First Vaccination"
              : "Second Vaccination"}
          </h1>
        </div>
      </header>

      <div class="container mb-5">
        <div class="section-header mb-4">
          <h4 class="section-title text-muted font-weight-normal">
            List Vaccination Spots in {districtData} - {provinceData}
          </h4>
        </div>

        <div class="section-body mt-4">
          {spotsData.length > 0 &&
            spotsData.map((spot, index) => (
              <article class="spot" key={index}>
                <div class="row">
                  <div class="col-5">
                    <h5 class="text-primary">
                      <a href={`/vacination-spot/detail/${spot.id}`}>
                        {spot.name}
                      </a>
                    </h5>
                    <span class="text-muted">{spot.address}</span>
                  </div>
                  <div class="col-4">
                    <h5>Available vaccines</h5>
                    <span class="text-muted">
                      {spot.spot_vaccine.vaccine.name}
                    </span>
                  </div>
                  <div class="col-3">
                    <h5>Serve</h5>
                    <span class="text-muted">{spot.serve}</span>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </main>
  );
};
