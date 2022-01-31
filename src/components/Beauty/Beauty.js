import SimpleImageSlider from "react-simple-image-slider";

const Beauty = () => {
    const images = [
        {
            url: "https://i.ibb.co/z4XcyL5/timer-muamari.jpg",
            by: "timer"
        },
        {
            url: "https://i.ibb.co/sjr57HZ/timer-khamar-nokula-bridge.jpg",
            by: "timer"
        },
        {
            url: "https://i.ibb.co/sgnLtgf/timer-khamar-nokula2.jpg",
            by: "timer"
        },
        {
            url: "https://i.ibb.co/dtCKgZp/timer-dudhkumar2.jpg",
            by: "timer"
        },
        {
            url: "https://i.ibb.co/L0Wr2Hb/timer-dudhkumar.jpg",
            by: "timer"
        },
        {
            url: "https://i.ibb.co/N3qLqzc/timer-chorberubari.jpg",
            by: "timer"
        },
        {
            url: "https://i.ibb.co/3zN0Tnq/rabby-thakurerbasa.jpg",
            by: "rabby"
        },
        {
            url: "https://i.ibb.co/C5bL825/rabby-chorbolorampur.jpg",
            by: "rabby"
        }
    
    ]
    return (
        <div>
            <h3 style={{ marginTop: '80px', borderBottom: '0.5px solid gray', color: '#FFB038', paddingBottom: '5px' }}>Beauty of Berubari</h3>
            <SimpleImageSlider
                style={{ margin: '0 auto', marginTop: '50px'}}
                width={300}
                height={300}
                images={images}
                showBullets={true}
                showNavs={true}
                loop={true}
                autoPlay={true}
            />
            <p style={{textAlign: 'center', marginTop: '10px'}}>Thanks to <span>@{images[0].by}</span>, <span>@{images[7].by}</span></p>
        </div>
    );
};

export default Beauty;