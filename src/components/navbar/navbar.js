import React from 'react';
import classes from './navbar.css';
import MyWeatherIcon from '../../media/images/MyWeatherIcon.PNG';

const navbar = () => {
    return (
        <div className={[classes.Navbar, "d-flex"].join(' ')}>
            <img className={classes.NavbarLogo} src={MyWeatherIcon} alt="MyWeather Logo"/>
        </div>
    );
}

export default navbar;