import React, { useEffect } from "react";
import "./main.css"
import img1 from '../../Assets/img1.jpeg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpeg'
import img4 from '../../Assets/img4.jpeg'
import img5 from '../../Assets/img5.webp'
import img6 from '../../Assets/img6.jpeg'
import img7 from '../../Assets/img7.jpeg'
import img8 from '../../Assets/img8.webp'
import img9 from '../../Assets/img9.webp'
import Aos from "aos";
import 'aos/dist/aos.css';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Bora Bora',
        location: 'new zealand',
        grade: 'Cultural rolax',
        fees: '$700',
        description: 'enjoy the romance'

    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'la cyrena',
        location: 'sousse',
        grade: 'beach',
        fees: '$200',
        description: 'enjoy the beaches'

    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'ciry',
        location: 'venice',
        grade: 'Cultural rolax',
        fees: '$900',
        description: 'enjoy the romance'

    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Buzzoff',
        location: 'new jercy',
        grade: 'nature',
        fees: '$1200',
        description: 'enjoy the paysage'

    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'azerty',
        location: 'guinia',
        grade: 'savana',
        fees: '$500',
        description: 'enjoy the savana'

    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'fhgd',
        location: 'china',
        grade: 'Cultural rolax',
        fees: '$1600',
        description: 'peace and love'

    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'roo',
        location: 'harizona',
        grade: 'safari',
        fees: '$2100',
        description: 'safari hunting'

    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'cesar',
        location: 'Rome',
        grade: 'Cultural rolax',
        fees: '$600',
        description: 'enjoy the glory'

    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'onace de paris',
        location: 'paris,france',
        grade: 'parfume rolax',
        fees: '$700',
        description: 'enjoy smell !'

    },

]









const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title"></h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS<HiOutlineClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}



export default Main