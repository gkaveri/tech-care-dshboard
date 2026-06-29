import BloodPressureChart from "../BloodPressureCharts";
import VitalCards from "../VitalCards";
import './index.css'

function DiagnosisHistory({ patient }) {
  if (!patient || !patient.diagnosis_history) {
    return <h2>Loading...</h2>;
  }

  const chartData = [...patient.diagnosis_history].slice(0, 6).reverse();
  const latest = patient.diagnosis_history[0];

  return (
    <div className="bg-white h-[530px] rounded-2xl p-6 text-left">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold title">Diagnosis History</h2>
      </div>

      <div className="bg-[#F4F0FE] rounded-2xl p-6 w-[550px] container text-left">
        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold mb-6 blood-pressure">Blood Pressure</h3>
              <select className="bg-transparent outline-none text-sm text-gray-600 cursor-pointer">
                <option>Last 6 months</option>
              </select>
            </div>
            <BloodPressureChart history={chartData} />
          </div>

          <div className="w-[180px] flex flex-col justify-center items-start">
            <div className="pb-6 border-b border-gray-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <span className="font-semibold text-sm">Systolic</span>
              </div>
              <p className="text-2xl font-bold flex flex-start">{latest.blood_pressure.systolic.value}</p>
              <p className="mt-2 text-sm text-gray-500 flex flex-start value">{latest.blood_pressure.systolic.levels}</p>
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                <span className="font-semibold text-sm">Diastolic</span>
              </div>
              <p className="text-2xl font-bold flex flex-start">{latest.blood_pressure.diastolic.value}</p>
              <p className="mt-2 text-sm text-gray-500 flex flex-start value">{latest.blood_pressure.diastolic.levels}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cards text-left pl-4">
        <VitalCards latest={latest} />
      </div>
    </div>
  );
}

export default DiagnosisHistory;