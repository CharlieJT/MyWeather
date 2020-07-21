## MyWeather

The project is called MyWeather which will require you to enter a City/Town name followed by the country name with a comma for the best results.

## Using MyWeather

### Current Weather

- When you have successfully entered a location name, you will be presented with the name of the Town/City followed by the country code which will also display the date & time.

- You have the option to switch from metric & imperial depending on which setup you like best.

- You have a breakdown of current weather data which is split into current temperature, high temperature, low temperature, wind speed, humidity, time fo sunrise, time of sunset.

- When you click the 'Show Hourly Weather' button, you will be presented with a line graph showing you data for the temperature & wind speed throughout the next 24 hours. This has been created with the use of chart.js. Hovering over a specific point will show you a clearer reading of the information. Mobile version of this was removed as the graph was only made to look good on desktop.

### Weekly Weather

- You will also been presented with a breakdown on the days of the week for the next 7 days which will show break down of bits of data, showing more data on desktop & less on mobile sure to space avaiable.

- When hovering over each of the days, an animation will show indicating that the box is clickable. Upon click, a modal will appear showing you more information about that specific. Alternatively a 'More' button is present which will have the same outcome.

## Reusable Components

- Components such as Modal, Backdrop, Buttons, Input, Spinner have been created with their own components to ensure reusability & to help with overall theme of the page.

- Functions such as time/date converters have been outsourced into their own js file again to help with reusability.

## Redux

I do realise that this type of set up for an app which hold information in one container is overkill & Redux is not really needed. But Redux is set up as an indication of how I would use it in a much bigger application. I like to split my Redux down into their own actions & reducers to help create a much leaner set-up.

## Styling

- The styling has been coloured with a range of different shades of blue. 
- Bootstrap has been used for grid layouts to better display data.
- text has been styled white with a slight shadow.

## Open Weather API

- The API used for this project was the [Open Weather API](https://openweathermap.org/)

- Usually I would put the API key in a seperate .env file but this is a free version so I've added it straight to the api url.

## Responsive Design

- Bootstrap grid system is used to improve the responsiveness of the application.
- More data will be shown on desktop including the graph. This is due to the readability of the applcation.
- This has been designed with a Mobile First approach.

## Data

- I could have shown more data than there currently is but the purpose of this set-up is to show how I use the data that's been provided.

## Get the project running in your local ide

1. To get started running this on your local IDE, first you need to clone this into 
--------------------------------------------------


