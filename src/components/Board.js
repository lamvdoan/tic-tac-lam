import React from 'react';
import Cell from './Cell';

export const Board = () => (
    <div className="board">
        <table>
            <tbody>
                <tr key="0">
                    <th><Cell key="0" id="0"/></th>
                    <th><Cell key="1" id="1"/></th>
                    <th><Cell key="2" id="2"/></th>
                </tr>
                <tr key="1">
                    <th><Cell key="3" id="3"/></th>
                    <th><Cell key="4" id="4"/></th>
                    <th><Cell key="5" id="5"/></th>
                </tr>
                <tr key="2">
                    <th><Cell key="6" id="6"/></th>
                    <th><Cell key="7" id="7"/></th>
                    <th><Cell key="8" id="8"/></th>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Board;
