import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { Chart as ChartJS } from 'chart.js/auto';

function LineChart({ lineChartData }) {
    const options = {
        plugins:{
            datalabels:{
                anchor: 'center',
                align: 'center',
                color: 'black',
                font:{
                    weight: 'bold',
                },
                formatter:(value)=> value,
            },
        },
        scales:{
            x:{
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    };

    return <Line data={lineChartData} options={options}/>
}

export default LineChart