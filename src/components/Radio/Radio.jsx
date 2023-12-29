import Coaching from "../Coaching/Coaching"
import Editing from "../Editing/Editing"
import SoundDesign from "../SoundDesign/SoundDesign"
import Voice from "../Voice/Voice"
import "./Radio.scss"

const Radio = ({ darkMode }) => {
    return (
        <div>
            <SoundDesign darkMode={darkMode} />
            <Editing darkMode={darkMode} />
            <Voice darkMode={darkMode} />
            <Coaching darkMode={darkMode} />
        </div>
    )
}

export default Radio