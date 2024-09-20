import '../styles/ReportCards.css'

const ReportCards = ({name,value,icon}) => {
    return(
        <div>
           <div className="box">
                <h2 className='icon'>{icon}</h2>
                <div className="text-value">
                    <p className="name">{name}</p>
                    <p className="value">{value}</p>
                </div>
            </div>
        </div>
    )
}
export default ReportCards