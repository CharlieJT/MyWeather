import React, { Component } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import CurrentWeather from '../../components/currentWeather/currentWeather';
import WeeklyWeather from '../../components/weeklyWeather/weeklyWeather';
import DayOfWeekDetailed from '../../components/dayOfWeekDetailed/dayOfWeekDetailed';
import Aux from '../../hoc/ReactAux';
import { Container, Row } from 'react-bootstrap';
import Modal from '../../components/UI/Modal/Modal';
import classes from './MyWeather.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class MyWeather extends Component {

    state = {
        locationInput: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Location e.g. London, UK'
            },
            value: '',
            valid: false,
        },
        conversion: {
            unitTemp: "C",
            unitSpeed: 'mph',
            value: 'metric'
        },
        dayOfWeekDetailed: null,
        modalActive: false,
        hourlyWeatherShow: false
    }

    componentDidUpdate(prevProps) {
        const { currentWeather } = this.props;
        if (prevProps.currentWeather !== currentWeather && currentWeather !== null) {
            this.props.onSetWeeklyWeather(currentWeather.coord, this.state.conversion.value);
        }
    }

    inputChangedHandler = (event) => {
        const locationState = { ...this.state.locationInput };
        locationState.value = event.target.value;
        locationState.valid = locationState.value !== '';
        this.setState({ locationInput: locationState });
    }

    onSubmitLocationHandler = (event) => {
        const { value } = this.state.locationInput;
        event.preventDefault();
        const locationState = { ...this.state.locationInput };
        locationState.value = '';
        locationState.valid = false;
        this.setState({ locationInput: locationState });
        if (this.props.locationSearch !== value) {
            this.props.onSetCurrentWeather(value, "metric");
            const newConversion = { ...this.state.conversion };
            newConversion.unitTemp = "C";
            newConversion.unitSpeed = "mph";
            newConversion.value = "metric";
            this.setState({ conversion: newConversion, hourlyWeatherShow: false });
        }
    }

    conversionChangedHandler = (conversion, unitTemp, unitSpeed) => {
        if (conversion !== this.state.conversion) {
            this.props.onSetCurrentWeather(this.props.locationSearch, conversion);
            const newConversion = { ...this.state.conversion };
            newConversion.unitTemp = unitTemp;
            newConversion.unitSpeed = unitSpeed;
            newConversion.value = conversion;
            this.setState({ conversion: newConversion });
        }
    }

    openModalHandler = (weatherData) => {
        const modalInfo = { weatherData };
        this.setState({ dayOfWeekDetailed: modalInfo, modalActive: true });
    }

    toggleHourlyWeatherGraphHandler = () => {
        const hourlyWeatherState = this.state.hourlyWeatherShow;
        this.setState({ hourlyWeatherShow: !hourlyWeatherState });
    }

    closeModalHandler = () => this.setState({ dayOfWeekDetailed: null, modalActive: false });

    render() {

        const { currentWeather, weeklyWeather, locationSearch, error, isLoading } = this.props;

        const { locationInput, conversion, hourlyWeatherShow, modalActive } = this.state;

        let weatherOutput = <h3 className={classes.MyWeatherText}>Welcome to MyWeather, please enter a location to get going.</h3>;

        if (currentWeather && weeklyWeather) {
            weatherOutput = (
                <Aux>
                    <CurrentWeather
                        currentWeather={currentWeather}
                        hourlyWeather={weeklyWeather.hourly}
                        conversion={conversion}
                        hourlyWeatherShow={hourlyWeatherShow}
                        toggleHourlyWeatherGraph={this.toggleHourlyWeatherGraphHandler}
                        metricClicked={() => this.conversionChangedHandler('metric', 'C', 'mph')}
                        imperialClicked={() => this.conversionChangedHandler('imperial', 'F', 'km/h')} />
                    <Container fluid={true}>
                        <Row>
                            {weeklyWeather.daily.map((dayOfWeek, index) => (
                                index !== 0 &&
                                    <WeeklyWeather
                                        key={index}
                                        dailyWeather={dayOfWeek}
                                        conversion={conversion}
                                        modalOpen={this.openModalHandler} />
                            ))}
                        </Row>
                    </Container>
                </Aux>
            );
        }
        if (error) {
            weatherOutput = <h4 className={classes.MyWeatherText}>Could not find information for <i>'{locationSearch}'</i>, please choose another location</h4>;
        }
        if (isLoading) {
            weatherOutput = <Spinner fontSize="8px" />;
        }

        return (
            <div>
                <Modal show={modalActive} modalClose={this.closeModalHandler}>
                    {modalActive && 
                    <DayOfWeekDetailed
                        dayOfWeekDetailed={this.state.dayOfWeekDetailed}
                        timezoneOffset={weeklyWeather.timezone_offset}
                        conversion={conversion}
                        modalClose={this.closeModalHandler}/>}
                </Modal>
                <form className="d-flex justify-content-center p-2" onSubmit={this.onSubmitLocationHandler}>
                    <Input
                        elementType={locationInput.elementType}
                        elementConfig={locationInput.elementConfig}
                        value={locationInput.value}
                        changed={(event) => this.inputChangedHandler(event)} />
                    <Button btnType="General" disabled={!locationInput.valid}><FontAwesomeIcon icon={faSearch} /></Button>
                </form>
                {weatherOutput}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentWeather: state.weather.currentWeather,
        weeklyWeather: state.weather.weeklyWeather,
        isLoading: state.weather.loading,
        error: state.weather.error,
        locationSearch: state.weather.locationSearch
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentWeather: (location, conversion) => dispatch(actions.fetchCurrentWeather(location, conversion)),
        onSetWeeklyWeather: (coordinates, conversion) => dispatch(actions.fetchWeeklyWeather(coordinates, conversion)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyWeather);