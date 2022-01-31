import Chart from "../chart/chart"

const ExpenseChart = (props)=>{

    // console.log(props.filteredRecords)

    let chartDatapoints=[
        {label:"Jan",price:0},
        {label:"Feb",price:0},
        {label:"Mar",price:0},
        {label:"Apr",price:0},
        {label:"may",price:0},
        {label:"Jun",price:0},
        {label:"Jul",price:0},
        {label:"Aug",price:0},
        {label:"Sep",price:0},
        {label:"Oct",price:0},
        {label:"Nov",price:0},
        {label:"Dec",price:0},
    ]

    for(let record of props.filteredRecords){
        let month=record.date.getMonth();
        chartDatapoints[month].price +=Number(record.price);
    }
    // console.log(chartDatapoints)

    return(
        <div>
            <Chart datapoints={chartDatapoints}/>

        </div>
    )
}
export default ExpenseChart