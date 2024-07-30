import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const EnergyChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/energy')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const chartData = {
        labels: data.map(d => d.timestamp),
        datasets: [{
            label: 'Energy Consumption',
            data: data.map(d => d.consumption),
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    };

    return (
        <div>
            <h2>Energy Consumption</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default EnergyChart;
