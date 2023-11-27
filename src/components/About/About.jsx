import "./About.scss"
import jay from "../../assets/images/JayCowit.png"

const About = () => {
    return (
        <>
            <h2>About</h2>
            <div className="about-container">
                <p className="about-container__bio">Hi! I’m Jay Cowit. For over 20 years I’ve worked in radio, audio, music and other media. I like making cool things and helping other folks make cool things. I’m an expert sound designer, audio mixer, editor, voice coach, script writer and copy editor. I also make music and produce/compose scores for radio, podcasts and video games. I’m available for consultant work, freelance opportunities and coaching. Let’s talk about the cool thing we could make together. Thanks for hanging out!
                </p>
                <img src={jay} alt="Jay Cowit" className="about-container__img" />
            </div>
        </>
    )
}

export default About