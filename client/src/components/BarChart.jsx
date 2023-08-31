import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { Chart as ChartJS } from 'chart.js/auto';

function BarChart({ barChartData }) {
    const options = {
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
                color: 'black', 
            },
        },
    };

    return <Bar data={barChartData} options={options}/>
}

export default BarChart