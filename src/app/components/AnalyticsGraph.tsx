// components/AnalyticsGraph.tsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering  the chart components 
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Aug', 'Sep', 'Oct', 'Nov'],
  datasets: [
    {
      label: 'Maximum Focus',
      data: [50, 70, 60, 90],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
    {
      label: 'Lack of Focus',
      data: [30, 50, 40, 60],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const AnalyticsGraph = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Productivity Analytics</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default AnalyticsGraph;
