import { useState } from 'react';

const useResizableWindow = (initialWidth:number) => {
  const [windowWidth, setWindowWidth] = useState(initialWidth);
  const [resizing, setResizing] = useState(false);

  const handleMouseDown = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setResizing(true);

    const handleMouseMove = (event: { movementX: number; }) => {
      if (resizing) {
        const newWidth = windowWidth + event.movementX;
        setWindowWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const resizableProps = {
    style: { width: windowWidth },
    onMouseDown: handleMouseDown,
  };

  return [windowWidth, resizableProps];
};

export default useResizableWindow;
