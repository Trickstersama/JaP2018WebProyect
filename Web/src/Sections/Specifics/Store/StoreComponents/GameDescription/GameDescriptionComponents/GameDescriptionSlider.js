import React from 'react';
import AliceCarousel2 from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import fallout3IMG1 from '../../../../IMG/fallout3-1.jpg'
import fallout3IMG2 from '../../../../IMG/fallout3-2.jpg'
import fallout3IMG3 from '../../../../IMG/fallout3-3.jpg'
import theForestIMG1 from '../../../..//IMG/theForest-1.jpg'
import theForestIMG2 from '../../../../IMG/theForest-2.jpg'
import theForestIMG3 from '../../../../IMG/theForest-3.jpg'
import fallout4IMG1 from '../../../../IMG/fallout4-1.jpg'
import fallout4IMG2 from '../../../../IMG/fallout4-2.jpg'
import fallout4IMG3 from '../../../../IMG/fallout4-3.jpg'
import darkwoodIMG1 from '../../../../IMG/darkwood-1.jpg'
import darkwoodIMG2 from '../../../../IMG/darkwood-2.png'
import darkwoodIMG3 from '../../../../IMG/darkwood-3.jpg'
import warframeIMG1 from '../../../../IMG/warframe-1.jpg'
import warframeIMG2 from '../../../../IMG/warframe-2.jpg'
import warframeIMG3 from '../../../../IMG/warframe-3.jpeg'
import pathOfExileIMG1 from '../../../../IMG/pathOfExile-1.jpg'
import pathOfExileIMG2 from '../../../../IMG/pathOfExile-2.jpg'
import pathOfExileIMG3 from '../../../../IMG/pathOfExile-3.jpg'
import dota2IMG1 from '../../../../IMG/dota2-1.jpg'
import dota2IMG2 from '../../../../IMG/dota2-2.jpg'
import dota2IMG3 from '../../../../IMG/dota2-3.jpg'
import terrariaIMG1 from '../../../../IMG/terraria-1.png'
import terrariaIMG2 from '../../../../IMG/terraria-2.jpg'
import terrariaIMG3 from '../../../../IMG/terraria-3.jpg'
import feelTheSnowIMG1 from '../../../../IMG/feelTheSnow-1.jpg'
import feelTheSnowIMG2 from '../../../../IMG/feelTheSnow-2.jpg'
import feelTheSnowIMG3 from '../../../../IMG/feelTheSnow-3.png'
import paladinsIMG1 from '../../../../IMG/paladins-1.jpg'
import paladinsIMG2 from '../../../../IMG/paladins-2.jpg'
import paladinsIMG3 from '../../../../IMG/paladins-3.jpg'
import stardewValleyIMG1 from '../../../../IMG/stardewValley-1.jpg'
import stardewValleyIMG2 from '../../../../IMG/stardewValley-2.jpg'
import stardewValleyIMG3 from '../../../../IMG/stardewValley-3.jpg'

const fallout4 = [fallout4IMG1, fallout4IMG2, fallout4IMG3 ];
const darkwood = [darkwoodIMG1, darkwoodIMG2, darkwoodIMG3 ];
const warframe = [warframeIMG1, warframeIMG2, warframeIMG3 ];
const pathOfExile = [pathOfExileIMG1, pathOfExileIMG2, pathOfExileIMG3 ];
const dota2 = [dota2IMG1, dota2IMG2, dota2IMG3];
const terraria = [terrariaIMG1, terrariaIMG2, terrariaIMG3];
const feelTheSnow = [feelTheSnowIMG1, feelTheSnowIMG2, feelTheSnowIMG3];
const fallout3 = [fallout3IMG1, fallout3IMG2, fallout3IMG3];
const paladins = [paladinsIMG1, paladinsIMG2, paladinsIMG3];
const theForest = [theForestIMG1, theForestIMG2, theForestIMG3];
const stardewValley = [stardewValleyIMG1, stardewValleyIMG2, stardewValleyIMG3];

const allImagesById = [fallout4, darkwood , warframe, pathOfExile, dota2, terraria, feelTheSnow, fallout3, paladins, theForest, stardewValley];


const gallery = (props) => {
    const id= props.id;
    const handleOnDragStart = e => e.preventDefault()  

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
    
    const imgStyle = {
        maxWidth: '300px',
    
    }

    return (
        <div>
            <AliceCarousel2 
                mouseDragEnabled 
                buttonsDisabled = {true}
                responsive = {responsiveCarousel}
>
                <img alt={'gameImage'} src={allImagesById[id][0]} style= {imgStyle} onDragStart={handleOnDragStart} className="yours-custom-class" />
                <img alt={'gameImage'} src={allImagesById[id][1]} style= {imgStyle} onDragStart={handleOnDragStart} className="yours-custom-class" />
                <img alt={'gameImage'} src={allImagesById[id][2]} style= {imgStyle} onDragStart={handleOnDragStart} className="yours-custom-class" />
            </AliceCarousel2>
        </div>
  )
}

export default gallery;