import React from "react"
import checked from './assets/checked.png';
import unchecked from './assets/unchecked.png';
import cross from './assets/cross.png';

export default function Task(props) {
    const [boxChecked, setBoxChecked] = React.useState(false)

    function toggle() {
        setBoxChecked(prevBoxChecked => !prevBoxChecked)
    }
    
    return (
        <li className={boxChecked ? "checked" : "unchecked"}>
            <img onClick={toggle} className="checkbox" src={boxChecked ? checked : unchecked} alt="checkbox" />
            <span>{props.task}</span>
        </li>
    )
}

//<img className="cross" src={cross} alt="cross" />
