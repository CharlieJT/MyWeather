import React from 'react';
import classes from './dayOfWeekDetailed.css';
import Button from '../../components/UI//Button/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { timeConverter, dateConverter } from '../../Helpers/Converters';

const dayOfWeekDetailed = ({ dayOfWeekDetailed, conversion, modalClose, timezoneOffset }) => {
    const { dt, weather, sunrise, sunset, temp: { min, max, day, morn, night }, humidity, wind_speed } = dayOfWeekDetailed.weatherData;
    const { unitTemp, unitSpeed } = conversion;
    return (
        <Container className={classes.DayOfWeekDetailed}>
            <Row>
                <Col>
                    <h2 className="mb-0">{dateConverter(dt)}</h2>
                    <p className="mb-0">{weather[0].description}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className={[classes.TemperatureCol, "d-flex justify-content-center"].join(' ')}>
                    <div className="d-flex flex-column justify-content-center">
                        <img
                            className={classes.DayOfWeekDetailedImage}
                            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                            alt={weather[0].description} />
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={{span: 6, order: 1}} md={{span: 4, order: 1}}>
                    <div className="d-flex flex-column justify-content-center">
                        <h3 className="mb-0">{parseInt(max)}&deg;{unitTemp}</h3>
                        <p className="w-100">High</p>
                    </div>
                </Col>
                <Col xs={{span: 6, order: 2}} md={{span: 4, order: 4}}>
                    <div className="d-flex flex-column justify-content-center">
                        <h3 className="mb-0">{parseInt(min)}&deg;{unitTemp}</h3>
                        <p className="w-100">Low</p>
                    </div>
                </Col>
                <Col xs={{span: 6, order: 3}} md={{span: 4, order: 2}}>
                    <div className="d-flex flex-column justify-content-center">
                        <h3 className="mb-0">{wind_speed.toFixed(1)}{unitSpeed}</h3>
                        <p className="w-100">Wind</p>
                    </div>
                </Col>
                <Col xs={{span: 6, order: 4}} md={{span: 4, order: 5}}>
                    <div className="d-flex flex-column justify-content-center">
                        <h3 className="mb-0">{humidity}&#37;</h3>
                        <p className="w-100">Humidity</p>
                    </div>
                </Col>
                <Col xs={{span: 6, order: 5}} md={{span: 4, order: 3}}>
                    <div className="d-flex flex-column justify-content-center">
                        <h3 className="mb-0">{timeConverter(sunrise + timezoneOffset)}</h3>
                        <p className="w-100">Sunrise</p>
                    </div>
                </Col>
                <Col xs={{span: 6, order: 6}} md={{span: 4, order: 6}}>
                    <div className="d-flex flex-column justify-content-center">
                        <h3 className="mb-0">{timeConverter(sunset + timezoneOffset)}</h3>
                        <p className="w-100">Sunset</p>
                    </div>
                </Col>
                <Col xs={{span: 6, order: 6}} md={{span: 4, order: 6}}>
                    <div className="d-flex flex-column justify-content-center">
                        <h3 className="mb-0">{parseInt(morn)}&deg;{unitTemp}</h3>
                        <p className="w-100">Morning</p>
                    </div>
                </Col>
                <Col xs={{span: 6, order: 6}} md={{span: 4, order: 6}}>
                    <div className="d-flex flex-column justify-content-center">
                        <h3 className="mb-0">{parseInt(day)}&deg;{unitTemp}</h3>
                        <p className="w-100">Day Time</p>
                    </div>
                </Col>
                <Col xs={{span: 12, order: 6}} md={{span: 4, order: 6}}>
                    <div className="d-flex flex-column justify-content-center">
                        <h3 className="mb-0">{parseInt(night)}&deg;{unitTemp}</h3>
                        <p className="w-100">Night</p>
                    </div>
                </Col>
            </Row>
            <Button btnType="Done" clicked={modalClose}>Done</Button>
        </Container>
    );
}

export default dayOfWeekDetailed;

