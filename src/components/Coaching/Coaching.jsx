import "./Coaching.scss";
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Coaching = () => {
  const { darkMode } = useTheme();
    const [showQuote1, setShowQuote1] = useState(false);
    const [showQuote2, setShowQuote2] = useState(false);

    const toggleQuote1 = () => {
        setShowQuote1(!showQuote1);
    };
    const toggleQuote2 = () => {
        setShowQuote2(!showQuote2);
    };

    const quote1 = (
        <>
            he sees within the subtleties and
            personality of each podcast. Not only is his coaching highly professional, but he
            doesn't fail to touch all the bases from breath control to the enhancing of script
            structure. On top of this Jay is ethical and extremely fun to work with. If you
            work with him expect constructive and direct criticism. Take this criticism with
            you and apply it, the results will never cease to amaze you”.
        </>
    );

    const quote2 = (
        <>
            or he's facing a 10-second deadline before air, Jay holds an impressive ability to make deliberate and razor sharp editorial and reporting decisions. He can edit and mix audio with impressive speed, while also making editorial and sound design decisions to elevate critical and hard-hitting reporting. Jay is a master at coaching reporters and hosts for long-form documentaries and for quick, live radio spots.
            <br />
            <br />
            In 2019, I had the honor of working with Jay on an award-winning audio documentary for a cross-newsroom investigation from The Intercept and WNYC's The Takeaway. Our investigation exposed institutional failures inside a privately-owned immigration jail, which led to the death of a detained immigrant battling severe mental illness. Throughout the reporting, we accessed internal audio and video from inside the secretive facility. Jay masterfully weaved the shocking audio throughout the documentary, exposing abuse inside the jail, while giving the victims agency and integrity. Not only did Jay edit the story, give editorial direction, and provide vocal coaching for the documentary's narration, he also composed and recorded music for it, and sound designed and assembled the entire project.
            <br />
            <br />
            Jay's years of experience make him the most talented person in audio journalism I've ever worked with. He is the best of the best, although he may not admit it. His calm and level-headed demeanor makes him a great colleague and an even better coach and teacher. Anyone would be lucky to work with — and learn from — Jay."
        </>
    )

    return (
        <section className={`coaching ${darkMode ? 'dark' : ''}`}>
            <h2 id="coaching">Directing/Voice Coaching</h2>
            <p >Over two decades in radio/audio, I’ve worked with myriad talent in bringing their voice out to the audience. From rookies to veterans - I’m an experienced director and vocal coach who can help you sound your best. My coaching sessions can help you tackle hard news, promos, advertisements, entertainment, talk shows, or even just help on getting better at being interviewed. In addition to your own speaking style, we can work on everything from your speaking style to technical issues in order to make you sound your best across platforms.</p>
            <h3>Below are some testimonials from folks I've worked with:</h3>

            <h4>Ceci Ponce from See See by Ceci Podcast.</h4>
            <p className="coaching__quote">
                “If Jay Cowit were a tailor, he'd be a brilliant craftsman making custom-made-
                suits. And that's exactly what Jay does, {" "}
                {showQuote1 ? quote1 : null}
            </p>
            {showQuote1 ? <p className="coaching__see-more" onClick={toggleQuote1}>see less</p> : <p className="coaching__see-more" onClick={toggleQuote1}>see more</p>}

            <h4>Arun Venugopal from WNYC</h4>
            <p className="coaching__quote">"I’ve worked with Jay for years. He has an ability like no one else does to make you understand just what the moment calls for, and even more importantly, he makes you believe in yourself. When you are working with nothing but words, ideas and your voice, having someone who can help you distill all of that into something clear and forceful is invaluable."</p>

            <h4>Jose Olivares, investigative journalist and lead producer with The Intercept:</h4>
            <p className="coaching__quote">
                "Jay is a master and an expert with all-things audio and audio journalism. Whether he is working on a months-long audio documentary project,
                {showQuote2 ? quote2 : null}
            </p>
            {showQuote2 ? <p className="coaching__see-more" onClick={toggleQuote2}>see less</p> : <p className="coaching__see-more" onClick={toggleQuote2}>see more</p>}

            <h4>David Gebel - WNYC Radio Voice Over artist</h4>
            <p className="coaching__quote">"Jay Cowit is a total pro and has one of the sharpest ears in audio. I have recorded with Jay many times, and his coaching and direction are clear, concise, and full of humor and humanity.  I know I am in expert experienced hands when I record with Jay."</p>
        </section>
    );
};

export default Coaching;
