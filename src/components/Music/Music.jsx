import "./Music.scss"
import AlbumSelector1 from "../AlbumSelectors/AlbumSelector1"
import AlbumSelector2 from "../AlbumSelectors/AlbumSelector2"
import AlbumSelector3 from "../AlbumSelectors/AlbumSelector3"

const Music = ({ darkMode }) => {
    return (
        <section className={`music ${darkMode ? 'dark' && 'dark--darkMusic' : ''}`}>
            <h2 className="music__h2" id="music">Music</h2>
            <p className="music__p">I compose, produce, and perform music under the name J. Cowit. I’ve released nearly 30 albums of music as a solo artist, as well as scores of albums with my old bands Wounded Buffalo Theory and The Sometime Boys. I also compose for radio/audio: I created hundreds of instrumental bumper tracks for The Takeaway, scored full episodes of Freakonomics Radio, provided promo music for The Library with Tim Einenkel, and supplied the theme music for Politics With Amy Walter (“Enter the Dragon”). I’d love to score/produce music for your project, fit to order! Let’s talk about what we can do to make your project sing. Here are some links to my produced music.</p>

            <div className="album-container">
                <AlbumSelector1 />
                <AlbumSelector2 />
                <AlbumSelector3 />
            </div>

            <div className="videos">
                <p className="music__p">I also stream acoustic guitar shows from time to time, some of which you can see here:</p>
                <a className="title" href="https://www.youtube.com/channel/UCatnKMQvqSmYA9ObxX6eV7Q">Jay Cowit and the Enemys Acoustic music</a>

                <p className="music__p">And, I like to play drums, so i do that live on occasion as well:</p>
                <div className="youtube">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/D_evkIQwo0k?si=tDDkQ0bg5pnyBj5z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5xWWR8xI69c?si=dwZOv2XFRhc6uto_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sAk4ZeDyIqY?si=G16jC8Q7K5gqfgOZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Music