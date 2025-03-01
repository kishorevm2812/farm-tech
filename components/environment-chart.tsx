"use client"

import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export function EnvironmentChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    // Simulate real-time data
    const times = Array.from({ length: 12 }, (_, i) => {
      const hour = new Date().getHours() - (11 - i)
      return `${hour % 12 || 12}${hour < 12 ? "am" : "pm"}`
    })

    const tempData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10) + 20)
    const humidityData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 30) + 50)

    setChartData({
      labels: times,
      datasets: [
        {
          label: "Temperature (°C)",
          data: tempData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          tension: 0.3,
        },
        {
          label: "Humidity (%)",
          data: humidityData,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
          tension: 0.3,
        },
      ],
    })
  }, [])

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          maxTicksLimit: 5,
        },
      },
      x: {
        ticks: {
          maxTicksLimit: 6,
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

  return <Line options={options} data={chartData} />
}

