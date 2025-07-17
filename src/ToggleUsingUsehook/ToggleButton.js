import { useToggle } from "./useToggle";
import './ToggleButton.css';
const ToggleButton=()=>{
    const [on,toggle] = useToggle(false)
    return (<div>
        <button className="buttonCss" onClick={toggle}>{on?"ON":"OFF"}</button>
    </div>)
}

export default ToggleButton;