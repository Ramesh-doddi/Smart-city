import React from 'react';
import TrafficMap from './components/TrafficMap';
import PollutionGraph from './components/PollutionGraph';
import EnergyChart from './components/EnergyChart';

const App = () => {
    return (
        <div className="container">
            <h1>Smart City Dashboard</h1>
            <div className="card">
                <TrafficMap />
            </div>
            <div className="card">
                <PollutionGraph />
            </div>
            <div className="card">
                <EnergyChart />
            </div>
        </div>
    );
};

export default App;
