import React from 'react';
import { connect } from 'react-redux';

export const SummaryWindow = ({ currentPlayer }) => (
    <div>
        <p>Current Player: {currentPlayer}</p>
    </div>
);

const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer
});

export default connect(mapStateToProps)(SummaryWindow);