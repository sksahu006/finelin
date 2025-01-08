import { useState, useEffect } from 'react';

const useMouseDirectionOnHover = (ref) => {
  const [isMovingLeft, setIsMovingLeft] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        setIsMovingLeft(event.movementX < 0);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref]);

  return isMovingLeft;
};

export default useMouseDirectionOnHover;
