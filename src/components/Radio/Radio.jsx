import Coaching from "../Coaching/Coaching"
import Editing from "../Editing/Editing"
import SoundDesign from "../SoundDesign/SoundDesign"
import Voice from "../Voice/Voice"
import "./Radio.scss"

const Radio = () => {
    return (
        <div>
            <SoundDesign />
            <Editing />
            <Voice />
            <Coaching />
        </div>
    )
}

export default Radio