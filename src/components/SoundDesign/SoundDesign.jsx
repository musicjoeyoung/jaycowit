import "./SoundDesign.scss"
import ctpublic from "../../assets/images/icons/ctpublic.webp"
import freakonomics from "../../assets/images/icons/freakonomics.png"
import nal from "../../assets/images/icons/NewAmericanLeft.jpeg"
import takeaway from "../../assets/images/icons/TheTakeway.png"
import { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext';

const SoundDesign = () => {
  const { darkMode } = useTheme();
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
            <p className="soundDesign__p">Since the early 2000’s, I’ve been a sound designer, editor, technical director, and show director for national radio shows, including The Takeaway (WNYC/PRX), CT Public's Generation Barney mini-series, Freakonomics Radio, Politics with Amy Walter, 1 Big Thing (Axios) and The Randi Rhodes Show on Air America Radio. I’ve honed my skill at sound design, producing thousands of pre-produced intros, bits, montages and more based around breaking news, as well as entertainment/culture, and a gallimaufry of strange and random audio experiments. I’ve also sound designed theatrical off-broadway plays, and mixed sound for films.</p>

            <section className={`show ${darkMode ? 'dark--darkShow' : ''}`}>
                <div className="show-name-container">
                    <img src={ctpublic} className="show__logo show__logo--ctpublic" alt="Connecticut Public Radio, PBS, NPR" />
                    <h3 className="show__title">CT Public's Generation Barney</h3>
                </div>

                {/*        <div className="freakonomics-container">
                    <div className="freakonomics-container__sub-container">
                        <a href="https://www.ctpublic.org/podcast/generation-barney" target="_blank">
                            <div className="ctpublic-card" data-title="Who Needs Handwriting?">
                            </div>
                        </a>
                        <a href="https://www.ctpublic.org/podcast/generation-barney" target="_blank">
                            <div className="ctpublic-card" data-title="Who Needs Handwriting?">
                            </div>
                        </a>
                        <a href="https://www.ctpublic.org/podcast/generation-barney" target="_blank">
                            <div className="ctpublic-card" data-title="Who Needs Handwriting?">
                            </div>
                        </a>

                    </div>
                </div> */}
                <div className="freakonomics-container">
                    <div className="freakonomics-container__sub-container">
                        <a href="https://www.ctpublic.org/podcast/generation-barney/2024-10-28/trailer-generation-barney" target="_blank">
                            <div className="freakonomics-container__ctpublic-card" data-title="Trailer: Generation Barney">
                            </div>
                        </a>
                    </div>
                    <div className="freakonomics-container__sub-container">
                        <a href="https://www.ctpublic.org/podcast/generation-barney/2024-11-12/toddler-tv" target="_blank">
                            <div className="freakonomics-container__ctpublic-card" data-title="Toddler TV"></div>
                        </a>
                    </div>
                    <div className="freakonomics-container__sub-container">
                        <a href="https://www.ctpublic.org/podcast/generation-barney/2024-11-12/dinosync" target="_blank">
                            <div className="freakonomics-container__ctpublic-card" data-title="Dinosync">
                            </div>
                        </a>
                    </div>



                    {isVisible2 && (
                        <>
                            <div className="freakonomics-container__sub-container">
                                <a href="https://www.ctpublic.org/podcast/generation-barney/2024-11-19/love-2-hate" target="_blank">
                                    <div className="freakonomics-container__ctpublic-card" data-title="Love 2 Hate">
                                    </div>
                                </a>
                            </div>
                            <div className="freakonomics-container__sub-container">
                                <a href="https://www.ctpublic.org/podcast/generation-barney/2024-11-26/purple-capitalism" target="_blank">
                                    <div className="freakonomics-container__ctpublic-card" data-title="Purple Capitalism">
                                    </div>
                                </a>
                            </div>
                            <div className="freakonomics-container__sub-container">
                                <a href="https://www.ctpublic.org/podcast/generation-barney/2024-12-03/purple-dino-puppeteers" target="_blank">
                                    <div className="freakonomics-container__ctpublic-card" data-title="Purple Dino Puppeteers">
                                    </div>
                                </a>
                            </div>


                        </>
                    )}
                </div>
                <p className="show__button" onClick={toggle2}>{isVisible2 ? 'see less' : 'see more'}</p>

            </section>

            <section className={`show ${darkMode ? 'dark--darkShow' : ''}`}>
                <div className="show-name-container">
                    <img src={takeaway} className="show__logo" alt="The Takeaway Logo" />
                    <h3 className="show__title">The Takeaway (WNYC/PRX)</h3>
                </div>

                <div className="shows-container">
                    <iframe title="The Takeaway embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1080257/&share=1"></iframe>
                    <iframe title="The Takeaway embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/924939/&share=1"></iframe>
                    <iframe title="The Takeaway embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/681301/&share=1"></iframe>
                    {isVisible1 && (
                        <>
                            <iframe title="The Takeaway embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1260059/&share=1"></iframe>
                            <iframe title="The Takeaway embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1130587/&share=1"></iframe>
                            <iframe title="The Takeaway embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1328037/&share=1"></iframe>
                            <iframe title="The Takeaway embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/633521/&share=1"></iframe>
                        </>
                    )}
                </div>
                <p className="show__button" onClick={toggle1}>{isVisible1 ? 'see less' : 'see more'}</p>
            </section>



            <section className={`show ${darkMode ? 'dark--darkShow' : ''}`}>
                <div className="show-name-container">
                    <img src={freakonomics} className="show__logo show__logo--freakonomics" alt="Freakonomics logo" />
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
                <p className="show__full-list"><a target="_blank" href=" https://freakonomics.com/podcast-tag/jay-cowit/">FULL LIST</a> of my work for Freakonomics</p>
                <p className="show__button" onClick={toggle2}>{isVisible2 ? 'see less' : 'see more'}</p>
            </section>

            <section className={`show ${darkMode ? 'dark--darkShow' : ''}`}>
                <div className="show-name-container">
                    <img src={takeaway} className="show__logo" alt="The Takeaway logo" />
                    <h3 className="show__title">Politics with Amy Walter (WNYC/PRX)</h3>
                </div>

                <div className="shows-container">
                    <iframe title="Politics with Amy Walter embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1066255/&share=1"></iframe>
                    <iframe title="Politics with Amy Walter embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1059580/&share=1"></iframe>
                    <iframe title="Politics with Amy Walter embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/953010/&share=1"></iframe>


                    {isVisible4 && (
                        <>
                            <iframe title="Politics with Amy Walter embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/989338/&share=1"></iframe>
                            <iframe title="Politics with Amy Walter embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1029436/&share=1"></iframe>
                            <iframe title="Politics with Amy Walter embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1074404/&share=1"></iframe>

                        </>
                    )}
                </div>
                <p className="show__button" onClick={toggle4}>{isVisible4 ? 'see less' : 'see more'}</p>
            </section>

            <section className={`show ${darkMode ? 'dark--darkShow' : ''}`}>
                <div className="show-name-container">
                    <h3 className="show__title">Original Scores</h3>
                    <p className="soundDesign__p soundDesign__p--originalScores">These are some podcasts for which I've composed/produced original music.</p>
                </div>

                <div className="shows-container">
                    <iframe title="WNYC embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/959008/&share=1"></iframe>
                    <div className="freakonomics-container__sub-container freakonomics-container__sub-container--original-score">
                        <a href="https://freakonomics.com/podcast/ask-not-what-your-podcast-can-do-for-you/" target="_blank">
                            <div className="freakonomics-card2" data-title="Ask Not What Your Podcast Can Do For You">
                            </div>
                        </a>
                    </div>

                </div>
            </section>

            <section className={`show ${darkMode ? 'dark--darkShow' : ''}`}>
                <div className="show-name-container">
                    <h3 className="show__title">Assorted Podcasts</h3>
                </div>
                <div className="shows-container">
                    <iframe title="Axios embedded player" className="axios" frameBorder="0" height="482" scrolling="no" src="https://playlist.megaphone.fm/?e=AXIOS9350647648"
                        width="100%"></iframe>
                    <iframe title="Axios embedded player" className="axios" frameBorder="0" height="482" scrolling="no" src="https://playlist.megaphone.fm/?e=AXIOS5915642521"
                        width="100%"></iframe>
                    <iframe
                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                        frameBorder="0"
                        height="450"
                        style={{ width: '100%', overflow: 'hidden', borderRadius: '10px' }}
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        src="https://embed.podcasts.apple.com/us/podcast/how-to-vote-in-america/id1499899716"
                        title="Apple Podcasts embedded player"
                    ></iframe>
                    <iframe title="WNYC embedded player" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1170516/&share=1"></iframe>
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