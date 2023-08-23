import './CurrentWeather.css'

const CurrentWeather = ({data}) => {
    console.log(data);
    console.log(data.city);
    return ( 
        <div className="current-weather-details">
            <div className="city"> {data.city} </div>
            <div className="details-container">
                <div className="temp-details">
                    <div className="temp-icon">
                        <img src={`./icons/${data.weather[0].icon}.png`} alt="temp icon" />
                    </div>
                    <div className="temp-reading">
                        <p className="temp">{Math.round(data.main.temp)}°</p>
                        <p className="brief">{data.weather[0].main}</p>
                    </div> 
                </div>
                <div className="weather-details">
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{`${Math.round(data.main.feels_like)} °C`}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind Speed</span>
                        <span className="parameter-value">{`${data.wind.speed} m/s`}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{`${data.main.humidity} %`}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{`${data.main.pressure} hPa`}</span>
                    </div>                
                </div>
            </div>             
        </div>      
     );
}
 
export default CurrentWeather;