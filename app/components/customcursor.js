'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const hideTimeout = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => {
      // Show cursor immediately
      setVisible(true);

      // Clear previous timeout if clicking again
      if (hideTimeout.current) clearTimeout(hideTimeout.current);

      // Hide after 2 seconds
      hideTimeout.current = setTimeout(() => {
        setVisible(false);
      }, 500);
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x - 15}px, ${pos.current.y - 15}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      cancelAnimationFrame(requestRef.current);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: 'rgba(108, 167, 201, 0.7)',
        pointerEvents: 'none',
        opacity: visible ? 1 : 0,
        zIndex: 9999,
        transform: 'translate3d(0, 0, 0)',
        transition: 'opacity 0.25s ease',
      }}
    />
  );
}
