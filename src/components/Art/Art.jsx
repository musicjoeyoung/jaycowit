import { useState, useEffect } from 'react';
import './Art.scss';
import instagram from "../../assets/images/icons/instagram.svg"
import { useTheme } from '../../contexts/ThemeContext';

const Art = () => {
  const { darkMode } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [isVisible1, setIsVisible1] = useState(false);
    const [numVisibleImages, setNumVisibleImages] = useState(4);

    const toggle1 = () => {
        setIsVisible1(!isVisible1);
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedImage('');
        setModalVisible(false);
    };

    const images = [
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415387/Jay%20Cowit/QKTP0189_wauzzp.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415383/Jay%20Cowit/PWJK9821_qyb42z.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415383/Jay%20Cowit/ACWZ9151_wclza1.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415383/Jay%20Cowit/GRPQ9170_xwb3kq.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415382/Jay%20Cowit/PTKG5709_wriy54.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415381/Jay%20Cowit/HXBE2983_sueobm.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415372/Jay%20Cowit/BWSF6115_wiftvd.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415369/Jay%20Cowit/IMG_9196_umbxah.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415364/Jay%20Cowit/IMG_9521_vzblwl.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415359/Jay%20Cowit/IMG_9742_jg6n8c.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415374/Jay%20Cowit/IMG_5590_cawvss.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415388/Jay%20Cowit/SXOT9072_ccgpcp.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415382/Jay%20Cowit/IMG_7777_zfwwgu.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415380/Jay%20Cowit/IMG_8041_gc1dgg.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415370/Jay%20Cowit/EMNQ2604_bbhfkc.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415368/Jay%20Cowit/UDOK5521_ua2p3v.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415341/Jay%20Cowit/IMG_0578_jnk9qo.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415339/Jay%20Cowit/IMG_0441_scwdwg.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415330/Jay%20Cowit/IMG_1476_1_fvxoe0.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415322/Jay%20Cowit/IMG_3486_brqwpb.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415320/Jay%20Cowit/IMG_2404_fd0t5o.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415315/Jay%20Cowit/IMG_2401_h6f38z.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415315/Jay%20Cowit/IMG_0156_gtjbtz.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415309/Jay%20Cowit/IMG_2964_g4ujoa.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415307/Jay%20Cowit/UKTF7495_egkisb.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415307/Jay%20Cowit/UROP6979_b2ghlg.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415307/Jay%20Cowit/IMG_2978_s9rosj.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1702415305/Jay%20Cowit/IHCU7607_tuadg8.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902891/Jay%20Cowit/IMG_7357_ihb9wi.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902896/Jay%20Cowit/IMG_7323_as9vcb.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902899/Jay%20Cowit/IMG_1626_1_bvr8ra.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902903/Jay%20Cowit/IMG_1335_1_lsoigy.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902909/Jay%20Cowit/IMG_7332_n9xd0m.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902910/Jay%20Cowit/IMG_4902_woj5nm.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902916/Jay%20Cowit/IMG_1249_1_spwo0f.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902917/Jay%20Cowit/IMG_0979_1_sjjkci.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902917/Jay%20Cowit/IMG_1187_1_eaoj5q.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902918/Jay%20Cowit/IMG_1404_dv7xq6.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902920/Jay%20Cowit/IMG_1652_1_y7vb98.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902921/Jay%20Cowit/IMG_1125_rquaml.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902928/Jay%20Cowit/IMG_0437_d5aujx.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902937/Jay%20Cowit/IMG_0621_1_j1o5xy.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902937/Jay%20Cowit/IMG_9964_1_epwuwt.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902937/Jay%20Cowit/IMG_0436_ybbgu2.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902939/Jay%20Cowit/IMG_9582_1_e1yv4o.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902941/Jay%20Cowit/IMG_7769_uvxge0.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902944/Jay%20Cowit/IMG_7364_iraqnh.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902950/Jay%20Cowit/IMG_E7744_t7r6sn.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902950/Jay%20Cowit/IMG_9815_nn3lvq.jpg',
        'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1703902951/Jay%20Cowit/IMG_7748_ssbcic.jpg'


    ];

    const visibleImages = isVisible1 ? images : images.slice(0, numVisibleImages);

    const handleWindowResize = () => {
        if (window.innerWidth < 760) {
            setNumVisibleImages(4);
        } else {
            setNumVisibleImages(isVisible1 ? images.length : 8);
        }
    };

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [isVisible1, images.length]);

    return (
        <section className={`${darkMode ? 'dark' : ''}`}>
            <h2 id="art">Art</h2>
            <div className="art-container">
                {visibleImages.map((imageUrl, index) => (
                    <img
                        key={index}
                        className="art-container__art"
                        src={imageUrl}
                        alt=""
                        onClick={() => openModal(imageUrl)}
                    />
                ))}
            </div>

            {images.length > 4 && (
                <p className="art-container__p" onClick={toggle1}>
                    {isVisible1 ? 'see less' : 'see more'}
                </p>
            )}

            {modalVisible && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal">
                        <img src={selectedImage} alt="image from gallery" />
                    </div>
                </div>
            )}
            <div className="logo-container">
                <a href="https://www.instagram.com/jcowit/" target='_blank' className='logo-container__a'>
                    <img className="logo-container__instagram" src={instagram} alt="instagram logo" />
                </a>
                <p>See more on Instagram</p>
            </div>

        </section>
    );
};

export default Art;