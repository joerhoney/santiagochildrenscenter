import * as React from "react";
import "./AFSlides.css";

interface AFSlidesProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  interval?: number;
}

const AFSlides: React.FC<AFSlidesProps> = ({
  children,
  className,
  delay,
  interval,
}) => {
  interval = interval || 7000;
  delay = delay || 0;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const childrenArray = React.Children.toArray(children);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % childrenArray.length;
        return nextIndex;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [childrenArray, interval]);

  return (
    <div className={`aFSlides ${className}`}>
      {childrenArray.map((child, index) => (
        <div key={index} className={activeIndex === index ? "current" : ""}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default AFSlides;
