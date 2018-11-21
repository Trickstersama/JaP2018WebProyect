import React from 'react'

const tableCart = (props) => {
    return(
    <div id='calculatorTable'>
        <table>
            <tbody>
                <tr>
                    <th>Concept</th>
                    <th>Percent</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>IVA</td>
                    <td>22%</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Delivery</td>
                    <td>{props}</td>
                    <td>{props}</td>
                </tr>
                <tr>
                    <td>Game</td>
                    <td>-</td>
                    <td>{props}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>-</td>
                    <td>$300</td>
                </tr>
            </tbody>
            
        </table>

    </div>
            )
}

export default tableCart