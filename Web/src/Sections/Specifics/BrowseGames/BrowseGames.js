import React from 'react';
import BuyButton from '../../Base/BuyButton/BuyButton'
import fallout3IMG1 from '../IMG/fallout3-1.jpg'
import theForestIMG1 from '../IMG/theForest-1.jpg'
import fallout4IMG1 from '../IMG/fallout4-1.jpg'
import darkwoodIMG1 from '../IMG/darkwood-1.jpg'
import warframeIMG1 from '../IMG/warframe-1.jpg'
import pathOfExileIMG1 from '../IMG/pathOfExile-1.jpg'
import dota2IMG1 from '../IMG/dota2-1.jpg'
import terrariaIMG1 from '../IMG/terraria-1.png'
import feelTheSnowIMG1 from '../IMG/feelTheSnow-1.jpg'
import paladinsIMG1 from '../IMG/paladins-1.jpg'
import stardewValleyIMG1 from '../IMG/stardewValley-1.jpg'

const styleContainer = {
    gridColumnStart:'2',
    gridRowStart: '3'
};

var gamesJson = require('../../Base/Games/Games.json');

const gameIMG= [fallout3IMG1, theForestIMG1, fallout4IMG1, darkwoodIMG1, 
        warframeIMG1, pathOfExileIMG1, dota2IMG1, terrariaIMG1, feelTheSnowIMG1, paladinsIMG1, stardewValleyIMG1];


const imgStyle = {
    height: '50px'
}

const browseGames = (props) =>   {

    const buildList = () => {
        return( gamesJson.map(game => {
            let gameFull =  <tr>
                                <th><img style={imgStyle} src={gameIMG[game.id -1]}/></th>
                                <th>{game.Title}</th>
                                <th>${game.Price}</th>
                                <th>{game.Rating}/10</th>
                                <th><BuyButton buyit={props.buyit} price={game.Price} name={game.Title}/></th>
                            </tr>
                return( gameFull)
            })
        )
    }
    let games= buildList();
    return (
        <div className ='calculatorTable' style={styleContainer}>
        <table>
            <tbody>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>price</th>
                    <th>rating</th>
                    <th>buy</th>
                </tr>
                { games }
            </tbody>       
        </table>
        </div>
    )
}

export default browseGames;