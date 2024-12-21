import checked from './assets/checked.png';
import unchecked from './assets/unchecked.png';
import cross from './assets/cross.png';


export default function Task(props) {
    return (
        <li>
            <img className="checkbox" src={unchecked} alt="checked" />
            <span>{props.task}</span>            
        </li>
    )
}

