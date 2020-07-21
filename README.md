

## MyWeather

The project is called MyWeather which will require you to enter a City/Town name followed by the country name with a comma for the best results.

- [**Using MyWeather**](#using-myweather)
    - [**Current Weather**](#current-weather)
    - [**Weekly Weather**](#weekly-weather)

- [**Reusable Components**](#reusable-components)
- [**Redux**](#redux)
- [**Styling**](#styling)
- [**Open Weather API**](#open-weather-api)
- [**Responsive Design**](#responsive-design)
- [**Data**](#data)
- [**Testing**](#testing)
- [**Code**](#code)
- [**Get the project running in your local IDE**](#get-the-project-running-in-your-local-ide)
- [**Issues**](#issues)
- [**Logo**](#logo)

## Using MyWeather

### Current Weather

- When you have successfully entered a location name, you will be presented with the name of the Town/City followed by the country code which will also display the date & time.

- You have the option to switch from metric & imperial depending on which setup you like best.

- You have a breakdown of current weather data which is split into current temperature, high temperature, low temperature, wind speed, humidity, time fo sunrise, time of sunset.

- When you click the 'Show Hourly Weather' button, you will be presented with a line graph showing you data for the temperature & wind speed throughout the next 24 hours. This has been created with the use of chart.js. Hovering over a specific point will show you a clearer reading of the information. Mobile version of this was removed as the graph was only made to look good on desktop display.

### Weekly Weather

- You will also be presented with a breakdown on the days of the week for the next 7 days which will show break down of bits of data, showing more data on desktop & less on mobile sure to space available.

- When hovering over each of the days, an animation will show indicating that the box is clickable. Upon click, a modal will appear showing you more information about that specific. Alternatively, a 'More' button is present which will have the same outcome.

## Reusable Components

- Components such as Modal, Backdrop, Buttons, Input, Spinner have been created as their own components to ensure reusability & to help with the overall theme of the page.

- Functions such as time/date converters have been outsourced into their own file again to help with reusability.

## Redux

I do realise that this type of set up for an app which holds information in one container is overkill & Redux is not really needed. But Redux is set up as an indication of how I would use it in a much bigger application. I like to split my Redux down into their own actions & reducers to help create a much leaner set-up.

## Styling

- The styling has been coloured with a range of different shades of blue. 
- Bootstrap has been used for grid layouts to better display data.
- Text has been styled white with a slight shadow.

## Open Weather API

- The API used for this project was the [Open Weather API](https://openweathermap.org/)

- Usually, I would put the API key in a separate .env file but this is a free version so I've added it straight to the API URL.

## Responsive Design

- A bootstrap grid system is used to improve the responsiveness of the application.
- More data will be shown on desktop display including the graph. This is due to the readability of the application.
- This has been designed with a Mobile First approach.

## Data

- I could have shown more data than there currently is but the purpose of this set-up is to show how I use the data that's been provided.

## Testing

- As I'd like to dive deeper into Enzyme & Jest & due to the time it would take to get up to speed & incorporate it into this application, I've left this out for now.

### A lot of manual testing has taken place such as:

- Loading data.
- State being correct at times when data is (being fetched).
- State being correct at times when data has been fetched.
- State being correct at times when data hasn't been fetched at all.
- Buttons disabled at certain times.
- Testing from Metric & Imperial & back again.
- Checks to ensure previous data is gotten rid of if a user enters a location that is not recognised by the API.
- All data is correct against other weather applications.
- Data is showing for the correct timezone i.e. correct date & times.
- Data is successfully being passed through correctly to the Line Graph & is updating at the relevant times.
- All weekly data is being passed through correct against other weather applications.
- Modal is showing the correct data at the time of when the modal is opened & is removed when modal is closed.
- Responsiveness is working correctly & looks good on all devices.
- Animations are working with their correct intention.
- A location cannot be submitted if a user has an empty input field, this includes when enter is clicked or when the button is pressed.
- Loading Spinner is showing at the correct time of it's intended purpose.
- Footer is sitting at the bottom of the page at all times & will not 'float' if there's not a lot of content on the page.
- All images & fonts are sized appropriately for their purpose.


## Code

- The way the code has been created is 'overkill' for it's intended purpose in this application but I've done it this way so that you can get a good feel for how it would be structured in a much bigger application. I've created custom components such as Spinner, Button, Input, Modal, Backdrop to help with reusability. This makes for better UX throughout the application.

- I've created smaller chunks of components to show more reusability such as Weekly Weather, Current Weather, Day of Week Detailed, Navbar Footer.

- HOC components have been created to help with nesting components such as Layout. This is so that the user than Layout items such as Navbar & Footer that they want to show throughout the entire application at all times. Also, this includes a ReactAux component which is used to help group together adjacent elements throughout the application.

- Containers are used to group sections together throughout the application. This one specifically only used one but when more are created, you can split them apart from one another which makes things like 'routing' a lot easier.

## Get the project running in your local IDE

Alternatively, you can run this on Gitpod which skips the first 3 steps. If you've never worked with Gitpod before, you can find information at [The Gitpod Website](https://www.gitpod.io/)

1. To get started running this on your local IDE (Code editor), first you need to have your IDE open.

2. Go to the top of this GitHub page, click on 'Code' & copy the URL.

3. Go to your IDE & open your terminal, ensure you are in the correct directory where to want the project to be stored & run `git clone *URL string you copied from GitHub*`. This will clone the project.

4. Ensure you have the project in your IDE & run the command `npm install --save`, this will install a node_modules package for you to get started.

5. After this is complete, run the command `npm start` to start the development server on `http://localhost:3000/`. You should have the project up & running.

## Issues

- I had an issue getting weekly data with an input so I had to first fetch data for the specified location in my input to fetch information for current data to pass the lat & long from that data into the weekly API to fetch the weekly data. It still works but it's slightly slower as two requests need to be made when an input has been made & when the conversion between Celsius & Fahrenheit.

## Logo

- The MyWeather logo & favicon was created [here](https://www.brandcrowd.com/maker/tag/name).