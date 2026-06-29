import { useEffect, useState } from "react";
import { fetchPatients } from "./services/api";

import Header from "./components/Header/index";
import PatientsList from "./components/PatientsList/index";
import DiagnosisHistory from "./components/DiagnosisHistory/index";
import PatientProfile from "./components/PatientProfile/index";
import DiagnosticList from "./components/DiagnosticList/index"; 
import LabResults from "./components/LabResults/index";

import "./App.css";

function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await fetchPatients();
        const patientList = Array.isArray(data) ? data : [];

        setPatients(patientList);

        const initialPatient =
          patientList.find((patient) => patient.name === "Jessica Taylor") ||
          patientList[0] ||
          null;

        setSelectedPatient(initialPatient);
      } catch (fetchError) {
        setError(fetchError.message || "Unable to load patient data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className="app-placeholder">
        <h2>Loading patient dashboard...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-placeholder error">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!selectedPatient) {
    return (
      <div className="app-placeholder">
        <h2>No patient data available.</h2>
      </div>
    );
  }

  return (
    <div className="app-layout">
      <Header />

      <div className="dashboard ">
       <div className='dashboard-wrapper'>
        <div className="sidebar">
          <PatientsList
            patients={patients}
            selectedPatient={selectedPatient}
            onSelectPatient={setSelectedPatient}
          />
        </div>
       </div>
        <div className="main-content">
          <DiagnosisHistory patient={selectedPatient} />
          <DiagnosticList diagnostics={selectedPatient.diagnostic_list || []} />
        </div>

        <div className="right-panel">
  <div className="w-full">
    <PatientProfile patient={selectedPatient} />
  </div>

  <div className="w-full">
    <LabResults results={selectedPatient.lab_results || []} />
  </div>
</div>
      </div>
    </div>
  );
}

export default App;