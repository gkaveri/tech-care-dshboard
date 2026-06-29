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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function BloodPressureChart({ history }) {
  const labels = history.map(
    (item) => `${item.month.substring(0, 3)}, ${item.year}`
  );

  const systolicData = history.map(
    (item) => item.blood_pressure.systolic.value
  );

  const diastolicData = history.map(
    (item) => item.blood_pressure.diastolic.value
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.4,
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        min: 60,
        max: 180,
      },
    },
  };

  return (
    <div className="h-[230px] w-[420px]">
      <Line data={data} options={options} />
    </div>
  );
}

export default BloodPressureChart;