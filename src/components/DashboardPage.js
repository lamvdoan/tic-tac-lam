import React from 'react';
import Board from './Board';
import SummaryWindow from './SummaryWindow';
import RestartButton from './RestartButton';

const DashboardPage = () => (
    <div className="dashboard">
        <div className="left-panel">
            <SummaryWindow />
            <RestartButton />
        </div>
        <Board />
    </div>
);

export default DashboardPage;