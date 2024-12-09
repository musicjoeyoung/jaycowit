import "./AlbumSelector.scss"

import { jCowitAndTheEnemysAlbumValues } from "./albumsValues";
import { jCowitAndTheEnemysImageUrls } from "./imageUrls";
import { useState } from 'react';

const AlbumSelector4 = ({ darkMode }) => {
    const [selectedAlbum, setSelectedAlbum] = useState('1513409838');
    const [selectedImage, setSelectedImage] = useState(
        'https://f4.bcbits.com/img/a3962414746_2.jpg'
    );
    const [isVisible, setIsVisible] = useState(false);

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album.albumValue);
        setSelectedImage(album.imageUrl);
    };

    const albums = jCowitAndTheEnemysAlbumValues.map((albumValue, index) => ({
        albumValue,
        imageUrl: jCowitAndTheEnemysImageUrls[index],
    }));

    const visibleAlbums = isVisible ? albums : albums.slice(0, 4);

    return (
        <div className={`album-selector ${darkMode ? 'dark' : ''}`}>
            <h3 className="album-selector__title">Jay Cowit and the Enemys</h3>
            <iframe
                style={{ border: 0, width: '350px', height: '470px', marginTop: '20px' }}
                src={`https://bandcamp.com/EmbeddedPlayer/album=${selectedAlbum}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=2912635258/transparent=true/`}
                seamless
                title="Wounded Buffalo Theory Bandcamp Player"
            >
                <a href={`https://jcowit.bandcamp.com/album/album-${selectedAlbum}`} >
                    Album by Jay Cowit and the Enemys
                </a>
            </iframe>
            <h4>Discography</h4>
            <div className="albums-container">
                {visibleAlbums.map((album, index) => (
                    <div key={index} className="albums-container__div" >
                        <img
                            onClick={() => handleAlbumClick(album)}
                            src={album.imageUrl}
                            alt={`Album ${index + 1}`}
                            style={{ maxWidth: '100%', maxHeight: '100px', marginTop: '10px' }}
                        />
                    </div>
                ))}
            </div>


            {albums.length > 4 && (
                <div>
                    <p onClick={() => setIsVisible(!isVisible)} className="seeMore">
                        {isVisible ? 'see less' : 'see more'}
                    </p>
                </div>
            )}

            <br />

        </div>
    );
};

export default AlbumSelector4;






