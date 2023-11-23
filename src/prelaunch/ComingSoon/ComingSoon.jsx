import CountdownTimer from "../CountdownTimer/CountdownTimer"
import "./ComingSoon.scss"
import resume from "../../../src/assets/documents/JayCowit_RESUME.pdf"

const ComingSoon = () => {
    return (
        <div><h1>Coming Soon!</h1>
            <p>Jay's website is under construction. In the meantime, why not check out his <a href={resume} target="_blank">resume?</a></p>
            <CountdownTimer />
        </div>
    )
}

export default ComingSoon