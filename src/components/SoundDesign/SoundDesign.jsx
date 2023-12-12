import "./SoundDesign.scss"
import { useState } from 'react'

const SoundDesign = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    const toggle1 = () => {
        setIsVisible1(!isVisible1)
    };
    const toggle2 = () => {
        setIsVisible2(!isVisible2)
    };
    const toggle3 = () => {
        setIsVisible3(!isVisible3)
    };
    const toggle4 = () => {
        setIsVisible4(!isVisible4)
    };
    return (
        <section className="soundDesign">
            <h2 className="soundDesign__h2" id="soundDesign">Sound Design/Mixing/Audio Editing</h2>
            <p className="soundDesign__p">Since the early 2000’s, I’ve been an editor, technical director and show director for national radio shows, including The Takeaway (WNYC/PRX), Freakonomics Radio, Politics with Amy Walter, and The Randi Rhodes Show on Air America Radio. I’ve honed my skill at sound design, producing thousands of pre-produced intros, bits, montages and more based around breaking news, as well as entertainment/culture, and a gallimaufry of strange and random audio experiments. I’ve also sound designed theatrical off-broadway plays, and mixed sound for films.</p>
            <section className="show">
                <h3 className="show__title">The Takeaway</h3>
                <div className="shows-container">
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1080257/&share=1"></iframe>
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/924939/&share=1"></iframe>
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/681301/&share=1"></iframe>
                    {isVisible1 && (
                        <>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1260059/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1130587/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1328037/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/633521/&share=1"></iframe>
                        </>
                    )}
                </div>
                <p className="show__button" onClick={toggle1}>{isVisible1 ? 'see less' : 'see more'}</p>
            </section>

            <section className="show">
                <h3 className="show__title">Freakonomics Radio</h3>
                <div className="freakonomics-container">
                    <div>
                        <a href="https://freakonomics.com/podcast/who-needs-handwriting/" target="_blank">
                            <div className="freakonomics-container__freakonomics-card" data-title="Who Needs Handwriting?">
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://freakonomics.com/podcast/are-you-ready-for-a-glorious-sunset/" target="_blank">
                            <div className="freakonomics-container__freakonomics-card" data-title="Are You Ready for a Glorious Sunset?">
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://freakonomics.com/podcast/should-everyone-be-in-a-rock-band/" target="_blank">
                            <div className="freakonomics-container__freakonomics-card" data-title="Should Everyone Be in a Rock Band?">
                            </div>
                        </a>
                    </div>



                    {isVisible2 && (
                        <>
                            <div>
                                <a href="https://freakonomics.com/podcast/the-longest-long-shot/" target="_blank">
                                    <div className="freakonomics-container__freakonomics-card" data-title="The Longest Shot">
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://freakonomics.com/podcast/is-the-world-ready-for-a-guaranteed-basic-income/" target="_blank">
                                    <div className="freakonomics-container__freakonomics-card" data-title="Is the World Ready For a Guaranteed Basic Income?">
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://freakonomics.com/podcast/how-can-this-possibly-be-true/" target="_blank">
                                    <div className="freakonomics-container__freakonomics-card" data-title="How Can This Possibly Be True?">
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://freakonomics.com/podcast/the-cheeseburger-diet/" target="_blank">
                                    <div className="freakonomics-container__freakonomics-card" data-title="The Cheesburger Diet">
                                    </div>
                                </a>
                            </div>

                        </>
                    )}
                </div>
                <p className="show__full-list"><a href=" https://freakonomics.com/podcast-tag/jay-cowit/">FULL LIST </a>of my work for Freakonomics</p>
                <p className="show__button" onClick={toggle2}>{isVisible2 ? 'see less' : 'see more'}</p>
            </section>

            <section className="show">
                <h3 className="show__title">Original Scores</h3>
                <div className="shows-container">
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1260059/&share=1"></iframe>
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1130587/&share=1"></iframe>
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1328037/&share=1"></iframe>

                    {isVisible3 && (
                        <>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1260059/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1130587/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1328037/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/633521/&share=1"></iframe>
                        </>
                    )}
                </div>
                <p className="show__button" onClick={toggle3}>{isVisible3 ? 'see less' : 'see more'}</p>
            </section>

            <section className="show">
                <h3 className="show__title">Politics with Amy Walter (WNYC/PRX)</h3>
                <div className="shows-container">
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1260059/&share=1"></iframe>
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1130587/&share=1"></iframe>
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1328037/&share=1"></iframe>

                    {isVisible4 && (
                        <>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1260059/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1130587/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1328037/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/633521/&share=1"></iframe>

                        </>
                    )}
                </div>
                <p className="show__button" onClick={toggle4}>{isVisible4 ? 'see less' : 'see more'}</p>
            </section>

            <section className="show">
                <h3 className="show__title">other</h3>
                <div className="shows-container">
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1130587/&share=1"></iframe>
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1328037/&share=1"></iframe>
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/633521/&share=1"></iframe>
                </div>
            </section>
        </section>

    )
}

export default SoundDesign