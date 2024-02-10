import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Affiliation = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-4" style={{ color: 'blue' }}>Our Affiliations</h2>
                <Slider {...settings}>
                    <div className="logo-slide">
                        <img src="https://i.pinimg.com/564x/88/28/b0/8828b022edf0b8f7d4454039c2a6630b.jpg" alt="ship" className="w-48 h-auto mx-auto rounded-full" style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="logo-slide">
                        <img src="https://i.pinimg.com/564x/f3/10/a3/f310a3760cc58675be9b60106c63926b.jpg" alt="Affiliation 1" className="w-48 h-auto mx-auto rounded-full" style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="logo-slide">
                        <img src="https://i.pinimg.com/564x/ee/a1/7d/eea17d40b0ccb959f7fe4a1e87cf2d16.jpg" alt="Affiliation 1" className="w-48 h-auto mx-auto rounded-full" style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="logo-slide">
                        <img src="https://i.pinimg.com/564x/6e/32/2b/6e322b3c9d5e7f98f68eb4faf50de38c.jpg" alt="Affiliation 1" className="w-48 h-auto mx-auto rounded-full" style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="logo-slide">
                        <img src="https://i.pinimg.com/564x/c2/d1/50/c2d150942db96654f36094bd9db57bb7.jpg" alt="Affiliation 1" className="w-48 h-auto mx-auto rounded-full" style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="logo-slide">
                        <img src="https://i.pinimg.com/564x/83/cb/11/83cb11dce75a4b30e157819d7bf8b5f2.jpg" alt="Affiliation 1" className="w-48 h-auto mx-auto rounded-full" style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="logo-slide">
                        <img src="https://i.pinimg.com/564x/f3/a7/5e/f3a75e31234bd53f73a335e59d403ea0.jpg" alt="Affiliation 1" className="w-48 h-auto mx-auto rounded-full" style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="logo-slide">
                        <img src="https://i.pinimg.com/564x/ae/46/4a/ae464a969786f3e27833c29ba2576b4b.jpg" alt="Affiliation 1" className="w-48 h-auto mx-auto rounded-full" style={{ borderRadius: '50%' }} />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

// Custom arrow components
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: '#fff', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', left: '-50px', zIndex: 1 }}
            onClick={onClick}
        />
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: '#fff', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', right: '-50px', zIndex: 1 }}
            onClick={onClick}
        />
    );
};

export default Affiliation;
