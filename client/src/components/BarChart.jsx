import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { Chart as ChartJS } from 'chart.js/auto';

function BarChart({ barChartData }) {
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

    return <Bar data={barChartData} options={options}/>
}

export default BarChart