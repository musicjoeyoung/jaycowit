import "./AlbumSelector.scss"
import { useState } from 'react';
import { jayCowitImageUrls } from './imageUrls';
import { jayCowitAlbumValues } from './albumsValues';

const AlbumSelector1 = ({ darkMode }) => {
    const [selectedAlbum, setSelectedAlbum] = useState('1306776611');
    const [selectedImage, setSelectedImage] = useState(
        'https://f4.bcbits.com/img/a2211902437_2.jpg'
    );
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle album selection
    const handleAlbumClick = (album) => {
        setSelectedAlbum(album.albumValue);
        setSelectedImage(album.imageUrl);
    };

    // Combine jayCowitAlbumValues and imageUrls into an array of objects
    const albums = jayCowitAlbumValues.map((albumValue, index) => ({
        albumValue,
        imageUrl: jayCowitImageUrls[index],
    }));

    // Determine the number of albums to display based on the isVisible state
    const visibleAlbums = isVisible ? albums : albums.slice(0, 4);

    return (
        <div className={`album-selector ${darkMode ? 'dark' : ''}`}>
            <h3 className="album-selector__title">J. Cowit</h3>
            {/* Embedded Bandcamp player */}
            <iframe
                style={{ border: 0, width: '350px', height: '470px', marginTop: '20px' }}
                src={`https://bandcamp.com/EmbeddedPlayer/album=${selectedAlbum}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`}
                seamless
            >
                <a href={`https://jcowit.bandcamp.com/album/album-${selectedAlbum}`}>
                    Album by j. cowit and The Ruthless Orchestra
                </a>
            </iframe>

            <h4>Discography</h4>

            {/* Buttons and corresponding images rendered horizontally */}
            <div className="albums-container">
                {visibleAlbums.map((album, index) => (
                    <div key={index} className="albums-container__div">
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
        </div>
    );
};

export default AlbumSelector1;
