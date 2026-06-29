import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

function BloodPressureChart({ history }) {
  const labels = history.map((item) => `${item.month.substring(0, 3)}, ${item.year}`);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: history.map((item) => item.blood_pressure.systolic.value),
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: history.map((item) => item.blood_pressure.diastolic.value),
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="h-[230px] w-[420px]">
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { y: { min: 60, max: 180 } },
        }}
      />
    </div>
  );
}

export default BloodPressureChart;