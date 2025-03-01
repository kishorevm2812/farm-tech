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

const plantGrowthData = {
  1: { // Tomato
    heightData: [5, 10, 20, 35, 50, 65, 75, 80],
    leafCountData: [4, 8, 16, 24, 32, 40, 45, 48]
  },
  2: { // Basil
    heightData: [3, 6, 12, 18, 22, 25, 27, 28],
    leafCountData: [6, 12, 24, 36, 48, 60, 68, 72]
  },
  3: { // Lettuce
    heightData: [2, 5, 10, 15, 20, 23, 25, 25],
    leafCountData: [4, 8, 16, 24, 32, 36, 38, 40]
  },
  4: { // Pepper
    heightData: [3, 7, 15, 25, 35, 45, 50, 55],
    leafCountData: [4, 8, 16, 24, 32, 40, 44, 48]
  },
  5: { // Strawberry
    heightData: [2, 4, 8, 12, 15, 17, 18, 20],
    leafCountData: [6, 12, 24, 36, 48, 56, 60, 64]
  },
  6: { // Mint
    heightData: [3, 8, 15, 20, 25, 28, 30, 32],
    leafCountData: [8, 16, 32, 48, 64, 76, 84, 90]
  }
}

export function PlantGrowthChart({ plantId }: { plantId: string }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    const weeks = Array.from({ length: 8 }, (_, i) => `Week ${i + 1}`)
    const id = parseInt(plantId)
    const growth = plantGrowthData[id] || plantGrowthData[1] // Fallback to tomato data if ID not found

    setChartData({
      labels: weeks,
      datasets: [
        {
          label: "Height (cm)",
          data: growth.heightData,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          tension: 0.3,
          yAxisID: "y",
        },
        {
          label: "Leaf Count",
          data: growth.leafCountData,
          borderColor: "rgb(153, 102, 255)",
          backgroundColor: "rgba(153, 102, 255, 0.5)",
          tension: 0.3,
          yAxisID: "y1",
        },
      ],
    })
  }, [plantId])

  const options: ChartOptions<"line"> = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Height (cm)",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Leaf Count",
        },
        grid: {
          drawOnChartArea: false,
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

