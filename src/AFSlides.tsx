import * as React from "react";

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
  interval = interval || 5000;
  delay = delay || 0;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const childrenArray = React.Children.toArray(children);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % childrenArray.length;
          return nextIndex;
        });
      }, interval); // or any other interval duration
      return () => clearInterval(intervalId);
    }, delay); // delay prop value
    return () => clearTimeout(timeoutId);
  }, [childrenArray, delay, interval]);

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <div key={index} className={activeIndex === index ? "current" : ""}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default AFSlides;
