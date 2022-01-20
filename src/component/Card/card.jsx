import './card.css'

const card1 =(props)=>{   
    return(
        <div className={"card "+ props.className}>
            {props.children}
        </div>

    )
}

export default card1;