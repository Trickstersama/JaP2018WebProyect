import React from 'react'

const tableCart = (props) => {
    return(
    <div className='calculatorTable'>
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
                    <td>{props.realtotal * .22}</td>
                </tr>
                <tr>
                    <td>Delivery</td>
                    <td>{props.radioperc}%</td>
                    <td>{(props.copies * props.price)  * (props.radioperc / 100)}</td>
                </tr>
                <tr>
                    <td>Game</td>
                    <td>-</td>
                    <td> ${(props.price) * props.copies}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>-</td>
                    <td>${Math.round(props.realtotal *1.22)}</td>
                </tr>
            </tbody>
            
        </table>

    </div>
            )
}

export default tableCart