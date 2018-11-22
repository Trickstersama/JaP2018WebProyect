import React from 'react';

const styleContainer = {
    gridColumnStart:'2',
    gridRowStart: '3'
};

const browseGames = () =>   {
    return (
        <div className ='calculatorTable' style={styleContainer}>
        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Percent</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>IVA</td>
                    <td>22%</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Delivery</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Game</td>
                    <td>-</td>
                    <td> </td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>-</td>
                    <td></td>
                </tr>
            </tbody>       
        </table>
        </div>
    )
}

export default browseGames;