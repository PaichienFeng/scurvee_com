import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function LineChart({ lineChartData }) {
    const options = {
        tension:0.4
    };

    return <Line data={lineChartData} options={options}/>
}

export default LineChart