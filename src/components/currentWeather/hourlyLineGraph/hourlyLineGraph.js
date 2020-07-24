import React, { useEffect, useRef } from 'react';
import Chart from "chart.js";
import classes from "./hourlyLineGraph.css";
import { timeConverterHour } from '../../../Helpers/Converters';

const HourlyLineGraph = React.memo(({ hourlyWeather, conversion, hourlyWeatherShow, timezone }) => {
    const chartRef = useRef();

    const hourlyLabels = [];
    const hourlyTemps = [];
    const hourlyWindSpeeds = [];

    hourlyWeather.slice(0, 25).forEach(weatherHour => {
        hourlyLabels.push(timeConverterHour(weatherHour.dt + timezone));
        hourlyTemps.push(weatherHour.temp.toFixed(1));
        hourlyWindSpeeds.push(weatherHour.wind_speed.toFixed(1));
    });

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: hourlyLabels,
                datasets: [
                    {
                        label: `Temperature (\u00B0${conversion.unitTemp})`,
                        data: hourlyTemps,
                        borderColor: "#224f5d"
                    },
                    {
                        label: `Wind Speed (${conversion.unitSpeed})`,
                        data: hourlyWindSpeeds,
                        borderColor: "#fff"
                    },
                ]
            }
        });
    });

    return (
        <div className={classes.HourlyLineGraph} style={{
            height: hourlyWeatherShow ? '100%' : '0',
            opacity: hourlyWeatherShow ? '1' : '0' 
        }}>
            <canvas id="myChart" ref={chartRef} />
        </div>
    );
});

export default HourlyLineGraph;