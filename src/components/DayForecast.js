const DayForecast = ({day,season,temperature}) =>{
    return(
        <div>
            <p>{day}</p>
            <p>{season}</p>
            <p>{temperature}<sup>o</sup></p>
        </div>
    )
}

export default DayForecast