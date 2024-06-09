# Weather App

This repository contains a Weather App built with React and Vite. The app allows users to fetch and display weather information for their current location or a specified city using the OpenWeather API. 

## Table of Contents
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Approach](#approach)
- [Known Issues and Limitations](#known-issues-and-limitations)

## Getting Started

To run this application locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/weather-app.git](https://github.com/Utkarsh-Singhal-26/weather-app)
    cd weather-app
    ```

2. **Install dependencies:**
    ```bash
    pnpm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root of the project and add your OpenWeather API key:
    ```bash
    VITE_OPENWEATHER_API_KEY=your_api_key_here
    ```

4. **Run the application:**
    ```bash
    pnpm run dev
    ```
    This will start the development server and you can view the app by navigating to `http://localhost:5173` in your web browser.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **OpenWeather API**: Provides weather data used in the application.
- **@vitejs/plugin-react**: Vite plugin for React with Babel for Fast Refresh.
- **@vitejs/plugin-react-swc**: (Optional) Vite plugin for React with SWC for Fast Refresh.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **CSS**: For styling the application and ensuring responsiveness.

## Approach

The development process of this app involved the following steps:

1. **UI Construction**: Designed and built the user interface, ensuring a clean and user-friendly experience.
2. **API Integration**: Integrated the OpenWeather API to fetch and display weather data based on user input or current location.
3. **Location Feature**: Implemented functionality to fetch and display weather data for the user's current location.
4. **Responsiveness**: Ensured the application is responsive and works well on various screen sizes.

## Known Issues and Limitations

- **Single City Search**: Currently, the application only supports searching for weather information of one city at a time. 
- **Error Handling**: There might be limited error handling for various edge cases, such as invalid city names or network issues.
- **API Key Exposure**: Ensure your API key is not exposed publicly. Consider using environment variables and server-side code to handle API requests in a production environment.

---

Feel free to reach out if you have any questions or suggestions!

Happy coding! 🌤️

---
