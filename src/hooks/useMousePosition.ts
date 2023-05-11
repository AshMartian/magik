import React from 'react';

const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null });
  React.useEffect(() => {
    const updateMousePosition = (ev:PointerEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    const updateTouchPosition = (ev:TouchEvent) => {
        setMousePosition({ x: ev.touches[0].clientX, y: ev.touches[0].clientY });
    };
    window.addEventListener('pointermove', updateMousePosition);
    window.addEventListener('touchmove', updateTouchPosition);
    window.addEventListener('touchstart', updateTouchPosition);
    return () => {
        window.removeEventListener('pointermove', updateMousePosition);
        window.removeEventListener('touchmove', updateTouchPosition);
        window.removeEventListener('touchstart', updateTouchPosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;