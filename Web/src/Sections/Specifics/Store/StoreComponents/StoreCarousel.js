import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import fallout3IMG1 from '../../IMG/fallout3-1.jpg'
import fallout3IMG2 from '../../IMG/fallout3-2.jpg'
import fallout3IMG3 from '../../IMG/fallout3-3.jpg'
import theForestIMG1 from '../../IMG/theForest-1.jpg'
import theForestIMG2 from '../../IMG/theForest-2.jpg'
import theForestIMG3 from '../../IMG/theForest-3.jpg'
import fallout4IMG1 from '../../IMG/fallout4-1.jpg'
import fallout4IMG2 from '../../IMG/fallout4-2.jpg'
import fallout4IMG3 from '../../IMG/fallout4-3.jpg'
import darkwoodIMG1 from '../../IMG/darkwood-1.jpg'
import darkwoodIMG2 from '../../IMG/darkwood-2.png'
import darkwoodIMG3 from '../../IMG/darkwood-3.jpg'
import warframeIMG1 from '../../IMG/warframe-1.jpg'
import warframeIMG2 from '../../IMG/warframe-2.jpg'
import warframeIMG3 from '../../IMG/warframe-3.jpeg'
import pathOfExileIMG1 from '../../IMG/pathOfExile-1.jpg'
import pathOfExileIMG2 from '../../IMG/pathOfExile-2.jpg'
import pathOfExileIMG3 from '../../IMG/pathOfExile-3.jpg'
import dota2IMG1 from '../../IMG/dota2-1.jpg'
import dota2IMG2 from '../../IMG/dota2-2.jpg'
import dota2IMG3 from '../../IMG/dota2-3.jpg'
import terrariaIMG1 from '../../IMG/terraria-1.png'
import terrariaIMG2 from '../../IMG/terraria-2.jpg'
import terrariaIMG3 from '../../IMG/terraria-3.jpg'
import feelTheSnowIMG1 from '../../IMG/feelTheSnow-1.jpg'
import feelTheSnowIMG2 from '../../IMG/feelTheSnow-2.jpg'
import feelTheSnowIMG3 from '../../IMG/feelTheSnow-3.png'
import paladinsIMG1 from '../../IMG/paladins-1.jpg'
import paladinsIMG2 from '../../IMG/paladins-2.jpg'
import paladinsIMG3 from '../../IMG/paladins-3.jpg'
import stardewValleyIMG1 from '../../IMG/stardewValley-1.jpg'
import stardewValleyIMG2 from '../../IMG/stardewValley-2.jpg'
import stardewValleyIMG3 from '../../IMG/stardewValley-3.jpg'

 
const MAX_GAMES = 11;

const handleOnDragStart = e => e.preventDefault()

const fallout4 = [fallout4IMG1, fallout4IMG2, fallout4IMG3, 0];
const darkwood = [darkwoodIMG1, darkwoodIMG2, darkwoodIMG3, 1];
const warframe = [warframeIMG1, warframeIMG2, warframeIMG3, 2];
const pathOfExile = [pathOfExileIMG1, pathOfExileIMG2, pathOfExileIMG3, 3];
const dota2 = [dota2IMG1, dota2IMG2, dota2IMG3, 4];
const terraria = [terrariaIMG1, terrariaIMG2, terrariaIMG3, 5];
const feelTheSnow = [feelTheSnowIMG1, feelTheSnowIMG2, feelTheSnowIMG3, 6];
const fallout3 = [fallout3IMG1, fallout3IMG2, fallout3IMG3, 7];
const paladins = [paladinsIMG1, paladinsIMG2, paladinsIMG3, 8];
const theForest = [theForestIMG1, theForestIMG2, theForestIMG3, 9];
const stardewValley = [stardewValleyIMG1, stardewValleyIMG2, stardewValleyIMG3, 10];

const allImagesById = [fallout4, darkwood , warframe, pathOfExile, dota2, terraria, feelTheSnow, fallout3, paladins, theForest, stardewValley];



const styleTitle = {
    fontSize: '35px',
    color: 'grey'
}

const responsiveCarousel = {
        0: {
            items: 1
        },
        1024: {
            items: 2
        },
        1800:   {
            items: 3
        }

}
const arrayIMGTrending =[];
for (let i = 0; i < 6; i++){
    arrayIMGTrending[i] = allImagesById[Math.floor(Math.random() * MAX_GAMES)];
}

const arrayIMGOffers = []
for (let i = 0; i < 6; i++){
    arrayIMGOffers[i] = allImagesById[Math.floor(Math.random() * MAX_GAMES)];
}

const arrayIMGTag = [warframe, pathOfExile, dota2, terraria, paladins, stardewValley];

const imgStyle = {
    maxWidth: '300px',

}


const storeCarousel = (props) =>{

    let pickedImages = []

    if (props.name === 'Trending')  {
        pickedImages = arrayIMGTrending;
    } else {
        if (props.name === 'Special Offers')    {
            pickedImages = arrayIMGOffers;
        } else {
            if (props.name === 'Tag: Multiplayer')  {
                pickedImages = arrayIMGTag;
            }
        }
    }

    return (
        <div>
            <p style={styleTitle} className = 'glow'>{props.name}</p>
            <AliceCarousel  
                mouseDragEnabled 
                buttonsDisabled = {true}
                responsive = {responsiveCarousel}
            >
                <a href='#' onClick = {(event) => props.showInfoGame(event, pickedImages[0][3])}>
                    <img  style= {imgStyle} src={pickedImages[0][0]}  onDragStart={handleOnDragStart} alt='gameLogo' className="yours-custom-class" />
                </a>
                <a href='#'  onClick ={(event) => props.showInfoGame(event, pickedImages[1][3])}>
                    <img style= {imgStyle}  src={pickedImages[1][0]} indexofgame={pickedImages[1][4]} onDragStart={handleOnDragStart} alt='gameLogo' className="yours-custom-class" />
                </a>
                <a href='#'  onClick ={(event) => props.showInfoGame(event, pickedImages[2][3])}>
                    <img  style= {imgStyle} src={pickedImages[2][0]} indexofgame={pickedImages[2][4]} onDragStart={handleOnDragStart} alt='gameLogo' className="yours-custom-class" />
                </a>
                <a href='#'  onClick ={(event) => props.showInfoGame(event, pickedImages[3][3])}>
                    <img  style= {imgStyle} src={pickedImages[3][0]} indexofgame={pickedImages[3][4]} onDragStart={handleOnDragStart} alt='gameLogo' className="yours-custom-class" />
                </a>
                <a href='#'  onClick ={(event) => props.showInfoGame(event, pickedImages[4][3])}>
                    <img  style= {imgStyle} src={pickedImages[4][0]} indexofgame={pickedImages[4][4]} onDragStart={handleOnDragStart} alt='gameLogo' className="yours-custom-class" />
                </a>
                <a href='#'  onClick ={(event) => props.showInfoGame(event, pickedImages[5][3])}>
                    <img  style= {imgStyle} src={pickedImages[5][0]} indexofgame={pickedImages[5][4]} onDragStart={handleOnDragStart} alt='gameLogo' className="yours-custom-class" />
                </a>
                
            </AliceCarousel>
        </div>
    )
};

export default storeCarousel;
