import "./Art.scss"
import jay from "../../assets/images/JayCowit.png"

const Art = () => {
    return (
        <div>
            <h2 id="art">Art</h2>
            <div className="art-container">
                <img className="art-container__art" src={jay} alt="" />
                <img className="art-container__art" src={jay} alt="" />
                <img className="art-container__art" src={jay} alt="" />
                <img className="art-container__art" src={jay} alt="" />
                <img className="art-container__art" src={jay} alt="" />
                <img className="art-container__art" src={jay} alt="" />
                <img className="art-container__art" src={jay} alt="" />
                <img className="art-container__art" src={jay} alt="" />
            </div>
        </div>
    )
}

export default Art