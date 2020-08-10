import React from 'react';
import classes from './weeklyWeather.css';
import { Row, Col } from 'react-bootstrap';
import Button from '../../components/UI/Button/Button';
import { dayOfWeekShortHand } from '../../Helpers/Converters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const weeklyWeather = ({ dailyWeather, conversion, modalOpen }) => {
    const { dt, weather, temp: { max, min }, wind_speed } = dailyWeather;
    return (
        <Col xs={12} className="px-md-5 pb-2">
            <Row 
                className={[classes.WeeklyWeather, "d-flex align-items-center py-3 py-sm-0"].join(' ')}
                onClick={() => modalOpen(dailyWeather, dt)}>
                <Col xs={12} sm={4} md={2}>
                    <h4>{dayOfWeekShortHand(dt)}</h4>
                    <p>{weather[0].description}</p>
                </Col>
                <Col xs={12} sm={4} md={2}>
                    <img
                        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                        alt={weather[0].description} />
                </Col>
                <Col md={2} className="d-none d-md-block">
                    <h4>{parseInt(max)}&deg;{conversion.unitTemp}</h4>
                    <p>High</p>
                </Col>
                <Col md={2} className="d-none d-md-block">
                    <h4>{parseInt(min)}&deg;{conversion.unitTemp}</h4>
                    <p>Low</p>
                </Col>
                <Col xs={12} sm={4} md={2} className="d-none d-md-block">
                    <h4>{wind_speed.toFixed(1)}{conversion.unitSpeed}</h4>
                    <p>Wind</p>
                </Col>
                <Col>
                    <Button btnType="General" clicked={() => modalOpen(dailyWeather)}>More <FontAwesomeIcon icon={faInfoCircle} /></Button>
                </Col>
            </Row>
        </Col>
    );
}

export default weeklyWeather;