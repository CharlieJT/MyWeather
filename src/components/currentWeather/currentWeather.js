import React from 'react'
import classes from './currentWeather.css';
import Button from '../../components/UI/Button/Button';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { dateConverter, timeConverter } from '../../Helpers/Converters';
import HourlyLineGraph from './hourlyLineGraph/hourlyLineGraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const currentWeather = ({ currentWeather, conversion, metricClicked, imperialClicked, hourlyWeather, hourlyWeatherShow, toggleHourlyWeatherGraph }) => {

    const { name, dt, weather, sys: { sunrise, sunset, country }, main: { temp, temp_min, temp_max, humidity }, wind: { speed }, timezone } = currentWeather;

    const { unitTemp, unitSpeed } = conversion;

    return (
        <Container fluid={true} className={classes.CurrentWeather}>
            <Row className="d-flex justify-content-between align-items-end text-left mb-4 px-md-5">
                <Col xs={12} sm={6}>
                    <div>
                        <h2>{name} - {country}</h2>
                        <p>{dateConverter(dt + timezone)} - <span>{timeConverter(dt + timezone)}</span></p>
                    </div>
                </Col>
                <Col xs={12} sm={6}>
                    <div className="text-sm-right">
                        <Button btnType="General" clicked={metricClicked} disabled={unitTemp === 'C'}>Metric</Button>
                        <Button btnType="General" clicked={imperialClicked} disabled={unitTemp === 'F'}>Imperial</Button>
                    </div>
                </Col>
            </Row>
            <Jumbotron className={classes.Jumbotron}>
                <Row className="mb-4 px-md-5">
                    <Col xs={12} md={6} className={[classes.TemperatureCol, "d-flex justify-content-center"].join(' ')}>
                        <div className="d-flex flex-column justify-content-center">
                            <img
                                className={classes.CurrentWeatherImage}
                                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                                alt={weather[0].description} />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h1 className="mb-0">{parseInt(temp)}&deg;{unitTemp}</h1>
                            <p className="w-100">{weather[0].description}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="text-center py-4">
                        <Row>
                            <Col xs={{ span: 6, order: 1 }} md={{ span: 4, order: 1 }}>
                                <h4>{parseInt(temp_max)}&deg;{unitTemp}</h4>
                                <p>High</p>
                            </Col>
                            <Col xs={{ span: 6, order: 2 }} md={{ span: 4, order: 4 }}>
                                <h4>{parseInt(temp_min)}&deg;{unitTemp}</h4>
                                <p>Low</p>
                            </Col>
                            <Col xs={{ span: 6, order: 3 }} md={{ span: 4, order: 2 }}>
                                <h4>{speed.toFixed(1)}{unitSpeed}</h4>
                                <p>Wind</p>
                            </Col>
                            <Col xs={{ span: 6, order: 4 }} md={{ span: 4, order: 5 }}>
                                <h4>{humidity}&#37;</h4>
                                <p>Humidity</p>
                            </Col>
                            <Col xs={{ span: 6, order: 5 }} md={{ span: 4, order: 3 }}>
                                <h4>{timeConverter(sunrise + timezone)}</h4>
                                <p>Sunrise</p>
                            </Col>
                            <Col xs={{ span: 6, order: 6 }} md={{ span: 4, order: 6 }}>
                                <h4>{timeConverter(sunset + timezone)}</h4>
                                <p>Sunset</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="d-none d-sm-block">
                    <Col xs={12}>
                        <HourlyLineGraph 
                            hourlyWeather={hourlyWeather}
                            hourlyWeatherShow={hourlyWeatherShow}
                            conversion={conversion}/>
                    </Col>
                    <Col xs={12}>
                        <Button btnType="General" clicked={toggleHourlyWeatherGraph}>{hourlyWeatherShow ? 'Hide' : 'Show'} Hourly Weather <FontAwesomeIcon icon={faChartLine} /></Button>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    );
}

export default currentWeather;

