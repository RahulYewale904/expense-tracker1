import "./chart.css"
import ChartBar from "./chartBar"
const Chart = (props)=>{

    console.log(props.datapoints)

    let PricesArray= props.datapoints.map(row=>row.price)

    console.log(...PricesArray)

    let maxprice = Math.max(...PricesArray)
    console.log(maxprice)
    return(
        <div className="chart">
            {
                props.datapoints.map((record)=>{
                    return(

                        <ChartBar key={record.label} label={record.label} value={record.price} maxvalue={maxprice}/>
                    )

                })
            }
            {/* <ChartBar label="feb" value={70} maxvalue={null}/> */}
        </div>
    )
}
export default Chart 