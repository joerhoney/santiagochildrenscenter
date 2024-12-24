import * as React from "react";

interface SlideProps {
  url: string;
  alt: string;
}

interface AFSlidesProps {
  className: string;
  images: SlideProps[];
  // transition?: string;
}

const AFSlides: React.FC<AFSlidesProps> = ({ className, images }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        return nextIndex;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={className}>
      {images.map((image, index) => (
        <div key={index} className={activeIndex === index ? "active" : ""}>
          <img key={index} src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default AFSlides;
