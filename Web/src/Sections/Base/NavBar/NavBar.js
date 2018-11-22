import React from 'react'
import './NavBar.css'
import BarInput from './BarComponents/BarInput'
import BarLogo from './BarComponents/BarLogo';
import SideBarButton from './BarComponents/SideBarButton'



const navBar = (props) => {

    return (
        <div className="sidenav">
            <BarLogo pageName='Red Tree Games'/>
            <BarInput/>
            <SideBarButton  name='Store' sepBar='1' buttonHandler={props.buttonHandler}/>
            <br/>
            <SideBarButton name='Browse Games'sepBar='1' buttonHandler={props.buttonHandler}/>
            <br/>
            <SideBarButton name='Create Account'sepBar='1' buttonHandler={props.buttonHandler}/>
            <br/>
            <SideBarButton name='Contact'sepBar='0' buttonHandler={props.buttonHandler}/>
        </div>
    )
    };

export default navBar;

