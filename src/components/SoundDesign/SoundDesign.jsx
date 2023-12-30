import "./SoundDesign.scss"
import { useState } from 'react'
import takeaway from "../../assets/images/icons/TheTakeway.png"
import freakonomics from "../../assets/images/icons/freakonomics.png"
import nal from "../../assets/images/icons/NewAmericanLeft.jpeg"

const SoundDesign = ({ darkMode }) => {
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
        <section className={`soundDesign ${darkMode ? `dark` && `dark--darkSoundDesign` : ''}`}>

            <h2 className="soundDesign__h2" id="soundDesign">Sound Design/Mixing/Audio Editing</h2>
            <p className="soundDesign__p">Since the early 2000’s, I’ve been a sound designer, editor, technical director, and show director for national radio shows, including The Takeaway (WNYC/PRX), Freakonomics Radio, Politics with Amy Walter, 1 Big Thing (Axios) and The Randi Rhodes Show on Air America Radio. I’ve honed my skill at sound design, producing thousands of pre-produced intros, bits, montages and more based around breaking news, as well as entertainment/culture, and a gallimaufry of strange and random audio experiments. I’ve also sound designed theatrical off-broadway plays, and mixed sound for films.</p>
            <section className={`show ${darkMode ? 'dark--darkShow' : ''}`}>
                <div className="show-name-container">
                    <img src={takeaway} className="show__logo" />
                    <h3 className="show__title">The Takeaway</h3>
                </div>

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

            <section className={`show ${darkMode ? 'dark--darkShow' : ''}`}>
                <div className="show-name-container">
                    <img src={freakonomics} className="show__logo show__logo--freakonomics" />
                    <h3 className="show__title">Freakonomics Radio</h3>
                </div>

                <div className="freakonomics-container">
                    <div className="freakonomics-container__sub-container">
                        <a href="https://freakonomics.com/podcast/who-needs-handwriting/" target="_blank">
                            <div className="freakonomics-container__freakonomics-card" data-title="Who Needs Handwriting?">
                            </div>
                        </a>
                    </div>
                    <div className="freakonomics-container__sub-container">
                        <a href="https://freakonomics.com/podcast/are-you-ready-for-a-glorious-sunset/" target="_blank">
                            <div className="freakonomics-container__freakonomics-card" data-title="Are You Ready for a Glorious Sunset?">
                            </div>
                        </a>
                    </div>
                    <div className="freakonomics-container__sub-container">
                        <a href="https://freakonomics.com/podcast/should-everyone-be-in-a-rock-band/" target="_blank">
                            <div className="freakonomics-container__freakonomics-card" data-title="Should Everyone Be in a Rock Band?">
                            </div>
                        </a>
                    </div>



                    {isVisible2 && (
                        <>
                            <div className="freakonomics-container__sub-container">
                                <a href="https://freakonomics.com/podcast/the-longest-long-shot/" target="_blank">
                                    <div className="freakonomics-container__freakonomics-card" data-title="The Longest Shot">
                                    </div>
                                </a>
                            </div>
                            <div className="freakonomics-container__sub-container">
                                <a href="https://freakonomics.com/podcast/is-the-world-ready-for-a-guaranteed-basic-income/" target="_blank">
                                    <div className="freakonomics-container__freakonomics-card" data-title="Is the World Ready For a Guaranteed Basic Income?">
                                    </div>
                                </a>
                            </div>
                            <div className="freakonomics-container__sub-container">
                                <a href="https://freakonomics.com/podcast/how-can-this-possibly-be-true/" target="_blank">
                                    <div className="freakonomics-container__freakonomics-card" data-title="How Can This Possibly Be True?">
                                    </div>
                                </a>
                            </div>
                            <div className="freakonomics-container__sub-container">
                                <a href="https://freakonomics.com/podcast/the-cheeseburger-diet/" target="_blank">
                                    <div className="freakonomics-container__freakonomics-card" data-title="The Cheesburger Diet">
                                    </div>
                                </a>
                            </div>

                        </>
                    )}
                </div>
                <p className="show__full-list"><a href=" https://freakonomics.com/podcast-tag/jay-cowit/">FULL LIST</a> of my work for Freakonomics</p>
                <p className="show__button" onClick={toggle2}>{isVisible2 ? 'see less' : 'see more'}</p>
            </section>

            <section className={`show ${darkMode ? 'dark--darkShow' : ''}`}>
                <div className="show-name-container">
                    <img src={takeaway} className="show__logo" />
                    <h3 className="show__title">Politics with Amy Walter (WNYC/PRX)</h3>
                </div>

                <div className="shows-container">
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1066255/&share=1"></iframe>
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1059580/&share=1"></iframe>
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/953010/&share=1"></iframe>


                    {isVisible4 && (
                        <>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/989338/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1029436/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1074404/&share=1"></iframe>

                        </>
                    )}
                </div>
                <p className="show__button" onClick={toggle4}>{isVisible4 ? 'see less' : 'see more'}</p>
            </section>

            <section className={`show ${darkMode ? 'dark--darkShow' : ''}`}>
                <div className="show-name-container">
                    <h3 className="show__title">Original Scores</h3>
                </div>

                <div className="shows-container">
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/959008/&share=1"></iframe>
                    <div className="freakonomics-container__sub-container freakonomics-container__sub-container--original-score">
                        <a href="https://freakonomics.com/podcast/ask-not-what-your-podcast-can-do-for-you/" target="_blank">
                            <div className="freakonomics-card2" data-title="Ask Not What Your Podcast Can Do For You">
                            </div>
                        </a>
                    </div>
                    {/*                     {isVisible3 && (
                        <>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1260059/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1130587/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1328037/&share=1"></iframe>
                            <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/633521/&share=1"></iframe>
                        </>
                    )} */}
                </div>
                {/* <p className="show__button" onClick={toggle3}>{isVisible3 ? 'see less' : 'see more'}</p> */}
            </section>

            <section className={`show ${darkMode ? 'dark--darkShow' : ''}`}>
                <div className="show-name-container">
                    <h3 className="show__title">Special and Assorted Podcasts</h3>
                </div>
                <div className="shows-container">
                    <iframe className="axios" frameBorder="0" height="482" scrolling="no" src="https://playlist.megaphone.fm/?e=AXIOS9350647648"
                        width="100%"></iframe>
                    <iframe className="axios" frameBorder="0" height="482" scrolling="no" src="https://playlist.megaphone.fm/?e=AXIOS5915642521"
                        width="100%"></iframe>
                    <iframe
                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                        frameBorder="0"
                        height="450"
                        style={{ width: '100%', overflow: 'hidden', borderRadius: '10px' }}
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        src="https://embed.podcasts.apple.com/us/podcast/how-to-vote-in-america/id1499899716"
                    ></iframe>
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1170516/&share=1"></iframe>
                    <div className="nal-container">
                        <div className="freakonomics-container__sub-container freakonomics-container__sub-container--original-score">
                            <a href="https://www.thenewamericanleft.com/podcasts/2019/9/19/there-may-be-gods-but-they-are-not-our-masters" target="_blank">
                                <div className="nal-card" data-title="There May Be Gods But They Are Not Our Masters">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default SoundDesign