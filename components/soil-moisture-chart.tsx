"use client"

import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function SoilMoistureChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    // Simulate soil moisture data for different plant zones
    const zones = ["Zone 1", "Zone 2", "Zone 3", "Zone 4", "Zone 5"]
    const moistureData = Array.from({ length: 5 }, () => Math.floor(Math.random() * 40) + 40)
    const optimalData = [70, 65, 75, 60, 80]

    setChartData({
      labels: zones,
      datasets: [
        {
          label: "Current Moisture (%)",
          data: moistureData,
          backgroundColor: "rgba(75, 192, 192, 0.7)",
        },
        {
          label: "Optimal Level (%)",
          data: optimalData,
          backgroundColor: "rgba(153, 102, 255, 0.5)",
          borderWidth: 1,
          borderColor: "rgba(153, 102, 255, 1)",
          borderDash: [5, 5],
        },
      ],
    })
  }, [])

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Moisture (%)",
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          boxWidth: 10,
          usePointStyle: true,
        },
      },
    },
  }

  return <Bar options={options} data={chartData} />
}

