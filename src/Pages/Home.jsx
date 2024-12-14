import React, { useState } from 'react';
import './Home.css';

const slidesData = [
    {
        background: 'linear-gradient(180deg, #0C1939 0%, #153060 100%)',
        title: 'Hi there, what would you like to know?',
        description: 'We provide an advanced chatbot designed to assist you and answer your inquiries in a professional manner.',
        imgSrc: '/FrontEnd/Vector.png',
    },
    {
        background: 'linear-gradient(180deg, #0C1939 0%, #153060 100%)',
        title: 'Title1',
        description: 'Functionality part1',
        imgSrc: '/FrontEnd/Vector.png',
    },
    {
        background: 'linear-gradient(180deg, #0C1939 0%, #153060 100%)',
        title: 'Title2',
        description: 'Functionality part2',
        imgSrc: '/FrontEnd/Vector.png',
    },
    {
        background: 'linear-gradient(180deg, #0C1939 0%, #153060 100%)',
        title: 'Title3',
        description: 'Sign in or sign up',
        imgSrc: '/FrontEnd/Vector.png',
        button: {
            text: 'Text',
            link: '/FrontEnd/Public/Login_Sign.Html',
        },
    },
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
    };

    return (
        <div class="container">

            <div className="home">
                <div className="slide">
                    {slidesData.map((slide, index) => (
                        <div
                            key={index}
                            className={`item ${index === currentIndex ? 'active' : ''}`}
                            style={{
                                display: index === currentIndex ? 'block' : 'none',
                                background: slide.background,
                            }}
                        >
                            <div className="content">
                                <div className="container-a">
                                    <img src={slide.imgSrc} alt="Chatbot Logo" className="logo" />
                                </div>
                                <div className="name">{slide.title}</div>
                                <div className="des">{slide.description}</div>
                                {slide.button && (
                                    <a href={slide.button.link}>
                                        <button
                                            type="button"
                                            style={{
                                                background: 'linear-gradient(to right, #e2e2e2, #c9d6ff)',
                                                color: '#153060',
                                                padding: '10px 45px',
                                                border: '1px solid transparent',
                                                borderRadius: '8px',
                                                fontWeight: 600,
                                                letterSpacing: '0.5px',
                                                textTransform: 'uppercase',
                                                marginTop: '10px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {slide.button.text}
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slide Navigation Buttons */}
                <div className="button">
                    <button className="prev" onClick={handlePrev}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="next" onClick={handleNext}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Home;