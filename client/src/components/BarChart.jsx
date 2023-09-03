import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function BarChart({ barChartData }) {
    const options = {
        scales:{
            x:{
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    };

    return <Bar data={barChartData} options={options}/>
}

export default BarChart