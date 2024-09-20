import '../styles/RainfallReport.css'
const RainfallReport = () => {
    return(
        <div className="content">
            <div className="tag">
            <p>Monthly Rainfall</p>
            <p className="rain-value">45mm</p>
            </div>
            <div className="tag">
                <p>This Year</p>
                <p className="rain-percent">+17%</p>
            </div>
        </div>
    )
}
export default RainfallReport