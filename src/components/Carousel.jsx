//PropsTypes:

// ImgSlides = [
//    {imageUrl: 'url-1', text: 'text-1' }
//    {imageUrl: 'url-2', text: 'text-2' }
//    ...
//  ]

// pass text : null for an image without darkening

// imgHeight = "someCssUnit" ex: '40rem'  (the carousel always takes the max-width of its container)

const Carousel = ({ imgSlides, imgHeight }) => {
    const imgStyles = {
        objectFit: "cover",
        objectPosition: "centered",
        overflow: "hidden",
        height: `${imgHeight}`,
    };

    return (
        <div
            id="standardCarousel"
            className="carousel slide m-3"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                {imgSlides.map((img, index) => (
                    <button
                        type="button"
                        key={img.text}
                        data-bs-target="#standardCarousel"
                        data-bs-slide-to={index}
                        className={
                            index === 0 ? "carousel-button active" : "carousel-button"
                        }
                        aria-current={index === 0 ? "true" : ""}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {imgSlides.map((img, index) => (
                    <div
                        key={img.text}
                        className={index === 0 ? "carousel-item active" : "carousel-item"}
                    >
                        <img
                            className="d-block w-100"
                            style={imgStyles}
                            src={`${process.env.REACT_APP_PUBLIC_URL_API}/activity/image/${img.imageUrl}`}
                            alt={img.text}
                        />
                        {img.text && (
                            <div className="carousel-caption  d-md-block">
                                <h1>{img.text}</h1>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#standardCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#standardCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    );
};

export default Carousel;
