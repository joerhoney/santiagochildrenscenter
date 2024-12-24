import * as React from "react";

interface AFSlidesProps {
  children: React.ReactNode;
}

/**
 * AFSlides component.
 * @param props - An object containing a children property, which is a React node.
 * @param slide - A string representing the image source.
 * @returns A JSX element containing the children.
 */
function AFSlides(props: { children: React.ReactNode; slide: string }) {
  console.log("aFSlides", props.children);
  console.log("slide", props.slide);

  return <div className="aFSlides">{props.children}</div>;
}

export default AFSlides;
