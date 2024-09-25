// DynamicHeading.tsx
"use client"
import { useState, useEffect } from "react";

interface DynamicHeadingProps {
  names: string[]; // Accept the names array as a prop
}

const DynamicHeading: React.FC<DynamicHeadingProps> = ({ names }) => {
  const [currentName, setCurrentName] = useState(names[0]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let index = 0;

    const changeName = () => {
      setCurrentName(names[index]);
      index = (index + 1) % names.length;

      if (index === names.length - 1) {
        clearInterval(interval);
        setCurrentName(names[names.length - 1]);
      }
    };

    const interval = setInterval(() => {
      changeName();
    }, hovered ? 300 : 1000);

    return () => clearInterval(interval);
  }, [hovered, names]);

  return (
    <h1
      className="text-white text-3xl font-semibold mb-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {currentName}
    </h1>
  );
};

export default DynamicHeading;
