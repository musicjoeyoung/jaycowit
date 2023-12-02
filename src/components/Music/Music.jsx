import "./Music.scss"

const Music = () => {
    return (
        <div>
            <h2 id="music">Music</h2>
            <p>I compose, produce, and perform music under the name J. Cowit. I’ve released nearly 30 albums of music as a solo artist, as well as scores of albums with my old bands Wounded Buffalo Theory and The Sometime Boys. I also compose for radio/audio: I created hundreds of instrumental bumper tracks for The Takeaway, scored full episodes of Freakonomics Radio, provided promo music for The Library with Tim Einenkel, and supplied the theme music for Politics With Amy Walter (“Enter the Dragon”). I’d love to score/produce music for your project, fit to order! Let’s talk about what we can do to make your project sing. Here are some links to my produced music.</p>

            <div className="album-container">
                <div className="album">
                    <p className="album__title">album 1</p>
                    <p className="album__embed">bandcamp embed 1</p>
                </div>
                <div className="album">
                    <p className="album__title">album 2</p>
                    <p className="album__embed">bandcamp embed 2</p>
                </div>
                <div className="album">
                    <p className="album__title">album 3</p>
                    <p className="album__embed">bandcamp embed 3</p>
                </div>
            </div>
            J. Cowit EMBED: https://jcowit.bandcamp.com/

            Wounded Buffalo Theory: EMBED: https://woundedbuffalotheory.bandcamp.com/music

            The Sometime Boys: EMBED: https://thesometimeboys.bandcamp.com/album/the-perfect-home


            I also stream acoustic guitar shows from time to time, some of which you can see here:
            Jay Cowit and the Enemys Acoustic music

            And, I like to play drums, so i do that live on occasion as well:
            https://www.youtube.com/watch?v=D_evkIQwo0k
            https://www.youtube.com/watch?v=5xWWR8xI69c
            https://www.youtube.com/watch?v=sAk4ZeDyIqY
        </div>
    )
}

export default Music