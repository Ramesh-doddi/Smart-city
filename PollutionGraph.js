import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PollutionGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/pollution')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const chartData = {
        labels: data.map(d => d.timestamp),
        datasets: [{
            label: 'Pollution Levels',
            data: data.map(d => d.level),
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderWidth: 1
        }]
    };

    return (
        <div>
            <h2>Pollution Levels</h2>
            <Line data={chartData} />
        </div>
    );
};

export default PollutionGraph;
