"use client"
import { useEffect, useState } from "react";

const Cursor = () => {
  const [hover, setHover] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const btn = document.querySelectorAll('button')
    const anchor = document.querySelectorAll('a')

    const isHover = [btn,anchor]

    isHover.forEach((item) => {

        item.forEach((item2) => {
          item2.addEventListener('mouseenter', () => {setHover(true)})
          item2.addEventListener('mouseleave', () => {setHover(false)})
        })
    })

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hover, position]);

  return (
    <div
      className={`cursor ${hover && "hover"}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {/* You can customize the cursor shape/style here */}
    </div>
  );
};

export default Cursor;
