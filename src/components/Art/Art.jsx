import { useState } from 'react';
import './Art.scss';

const Art = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedImage('');
        setModalVisible(false);
    };

    return (
        <section>
            <h2 id="art">Art</h2>
            <div className="art-container">
                {[
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415387/Jay%20Cowit/QKTP0189_wauzzp.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415383/Jay%20Cowit/PWJK9821_qyb42z.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415383/Jay%20Cowit/ACWZ9151_wclza1.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415383/Jay%20Cowit/GRPQ9170_xwb3kq.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415382/Jay%20Cowit/PTKG5709_wriy54.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415381/Jay%20Cowit/HXBE2983_sueobm.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415374/Jay%20Cowit/IMG_5590_cawvss.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415372/Jay%20Cowit/BWSF6115_wiftvd.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415369/Jay%20Cowit/IMG_9196_umbxah.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415364/Jay%20Cowit/IMG_9521_vzblwl.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415359/Jay%20Cowit/IMG_9742_jg6n8c.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415388/Jay%20Cowit/SXOT9072_ccgpcp.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415382/Jay%20Cowit/IMG_7777_zfwwgu.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415380/Jay%20Cowit/IMG_8041_gc1dgg.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415370/Jay%20Cowit/EMNQ2604_bbhfkc.jpg',
                    'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415368/Jay%20Cowit/UDOK5521_ua2p3v.jpg',
                ].map((imageUrl, index) => (
                    <img
                        key={index}
                        className="art-container__art"
                        src={imageUrl}
                        alt=""
                        onClick={() => openModal(imageUrl)}
                    />
                ))}
            </div>

            {modalVisible && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal">
                        <img src={selectedImage} alt="" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Art;