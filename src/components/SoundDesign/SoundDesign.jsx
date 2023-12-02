import "./SoundDesign.scss"
import { useState } from 'react'

const SoundDesign = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const toggleRow = () => {
        setIsVisible1(!isVisible1)
    };
    return (
        <div>
            <h2 id="soundDesign">Sound Design/Mixing/Audio Editing</h2>
            <p>Since the early 2000’s, I’ve been an editor, technical director and show director for national radio shows, including The Takeaway (WNYC/PRX), Freakonomics Radio, and The Randi Rhodes Show on Air America Radio. I’ve honed my skill at sound design, producing thousands of pre-produced intros, bits, montages and more based around breaking news, as well as entertainment/culture, and a gallimaufry of strange and random audio experiments. I’ve also sound designed theatrical off-broadway plays, and mixed sound for films.</p>
            <section className="show">
                <h3 className="show__title">The Takeaway</h3>
                <div className="card-container">
                    <div className="card-container__card"> </div>
                    <div className="card-container__card"> </div>
                    <div className="card-container__card"> </div>
                    {isVisible1 && (
                        <>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                        </>
                    )}
                </div>
                <p className="show__button" onClick={toggleRow}>{isVisible1 ? 'see less' : 'see more'}</p>
            </section>

            <section className="show">
                <h3 className="show__title">Freakonomics Radio</h3>
                <div className="card-container">
                    <div className="card-container__card"> </div>
                    <div className="card-container__card"> </div>
                    <div className="card-container__card"> </div>
                    {isVisible1 && (
                        <>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                        </>
                    )}
                </div>
                <p className="show__button" onClick={toggleRow}>{isVisible1 ? 'see less' : 'see more'}</p>
            </section>

            <section className="show">
                <h3 className="show__title">Original Scores</h3>
                <div className="card-container">
                    <div className="card-container__card"> </div>
                    <div className="card-container__card"> </div>
                    <div className="card-container__card"> </div>
                    {isVisible1 && (
                        <>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                        </>
                    )}
                </div>
                <p className="show__button" onClick={toggleRow}>{isVisible1 ? 'see less' : 'see more'}</p>
            </section>

            <section className="show">
                <h3 className="show__title">Politics with Amy Walter (WNYC/PRX)</h3>
                <div className="card-container">
                    <div className="card-container__card"> </div>
                    <div className="card-container__card"> </div>
                    <div className="card-container__card"> </div>
                    {isVisible1 && (
                        <>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                            <div className="card-container__card"> </div>
                        </>
                    )}
                </div>
                <p className="show__button" onClick={toggleRow}>{isVisible1 ? 'see less' : 'see more'}</p>
            </section>

            <section className="show">
                <h3 className="show__title">other</h3>
                <div className="card-container">
                    <div className="card-container__card"> </div>
                    <div className="card-container__card"> </div>
                    <div className="card-container__card"> </div>
                </div>
            </section>
        </div>

    )
}

export default SoundDesign