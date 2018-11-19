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
            <SideBarButton name='Store' sepBar='1'/>
            <br/>
            <SideBarButton name='Browse Games'sepBar='1'/>
            <br/>
            <SideBarButton name='Create Account'sepBar='1'/>
            <br/>
            <SideBarButton name='Contact'sepBar='0'/>
        </div>
    )
    };

export default navBar;

