import checked from './assets/checked.png';
import unchecked from './assets/unchecked.png';
import cross from './assets/cross.png';


export default function Task() {
    return (
        <li>
            <img className="checkbox" src={unchecked} alt="checked" />
            <span>A task</span>
            <img className = "cross" src={cross} alt="cross" />
            
        </li>
    )
}

