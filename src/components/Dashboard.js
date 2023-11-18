// src/components/Dashboard.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const Dashboard = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    // Mock data for the bar chart
    const barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Monthly Sales',
          data: [65, 59, 80, 81, 56],
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    };

    // Bar chart configuration
    const barChartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Create bar chart
    const barChart = new Chart(barChartRef.current, {
      type: 'bar',
      data: barChartData,
      options: barChartOptions,
    });

    // Mock data for the pie chart
    const pieChartData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['red', 'blue', 'yellow'],
        },
      ],
    };

    // Pie chart configuration
    const pieChartOptions = {};

    // Create pie chart
    const pieChart = new Chart(pieChartRef.current, {
      type: 'pie',
      data: pieChartData,
      options: pieChartOptions,
    });

    // Cleanup when the component is unmounted
    return () => {
      if (barChart) {
        barChart.destroy();
      }
      if (pieChart) {
        pieChart.destroy();
      }
    };
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="mb-8">
        <canvas ref={barChartRef} style={{ width: '300px', height: '150px' }}></canvas>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold mb-2">Statistics</h2>
          <p>Total Users: 100</p>
          <p>Active Users: 80</p>
          <p>Inactive Users: 20</p>
        </div>
        <div className="p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold mb-2">Pie Chart</h2>
          <canvas ref={pieChartRef} style={{ width: '150px', height: '150px' }}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
