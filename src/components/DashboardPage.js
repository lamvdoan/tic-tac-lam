import React from 'react';
import Board from './Board';
import SummaryWindow from './SummaryWindow';

const DashboardPage = () => (
    <div className="dashboard">
        <div className="summary-window">
            <SummaryWindow />
        </div>
        <Board />
    </div>
);

export default DashboardPage;