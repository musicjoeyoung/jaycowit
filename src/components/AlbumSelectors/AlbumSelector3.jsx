import "./AlbumSelector.scss"

const AlbumSelector3 = ({ darkMode }) => {

    const albumUrl = 'https://thesometimeboys.bandcamp.com/album/the-perfect-home';
    const albumId = '4014001614';

    return (
        <div className={`album-selector album-selector--last ${darkMode ? 'dark' : ''}`}>
            <h3 className="album-selector__title">The Sometimes Boys</h3>
            <iframe
                style={{ border: 0, width: '350px', height: '470px' }}
                src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`}
                seamless
            >
                <a href={albumUrl} >The Perfect Home by The Sometime Boys</a>
            </iframe>

            <a className="album-selector__website" href="https://www.thesometimeboys.com/" target="_blank">Website</a>
        </div>
    );
};

export default AlbumSelector3;






