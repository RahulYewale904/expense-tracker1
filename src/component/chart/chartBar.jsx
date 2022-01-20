import "./chartBar.css"
const chartBar =(props)=>{

    let barheight= "0%";

    if(props.maxvalue >0){
        barheight= Math.round((props.value/props.maxvalue)*100) +"%";
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:barheight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>

    )
}

export default chartBar;