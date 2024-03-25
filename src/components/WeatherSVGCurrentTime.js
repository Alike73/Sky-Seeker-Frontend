import React, { useEffect, useState } from 'react'

const WeatherSVGCurrentTime = ({ apiData }) => {

    const [currentTime, setCurrentTime] = useState(() => {
        // Set initial current time based on the timezone offset if apiData has been fetched
        if (apiData && apiData.timezone) {
            const timezoneOffsetSeconds = apiData.timezone;
            return new Date(new Date().getTime() + timezoneOffsetSeconds * 1000);
        } else {
            return new Date(); // Default to current time if apiData is not available yet
        }
    });

    useEffect(() => {
        if (apiData && apiData.timezone) {
            // Update currentTime every minute
            const interval = setInterval(() => {
                // Get the timezone offset from API response
                const timezoneOffsetSeconds = apiData.timezone;

                // Create a new Date object adjusted for the timezone offset
                const currentTimeWithTimezone = new Date(new Date().getTime() + timezoneOffsetSeconds * 1000);

                setCurrentTime(currentTimeWithTimezone);
            }, 1000); // 60000 milliseconds = 1 minute

            // Clear interval on component unmount to avoid memory leaks
            return () => clearInterval(interval);
        }
    }, [apiData]); // Re-run effect when apiData changes

    // Format currentTime using toLocaleString
    const formattedCurrentTime = currentTime.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'UTC' // Change timezone as needed
    });

    return (
        <text className='fs-4 svg_header_text' x="18" y="200" fill="hsl(0, 0%, 90%)">
            Time { formattedCurrentTime }
        </text>
    )
};

export default WeatherSVGCurrentTime;