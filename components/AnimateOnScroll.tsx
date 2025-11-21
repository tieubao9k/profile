import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale';
  delay?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fadeUp',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const animations = {
    fadeUp: {
      hidden: 'opacity-0 translate-y-10',
      visible: 'opacity-100 translate-y-0',
    },
    fadeLeft: {
      hidden: 'opacity-0 -translate-x-10',
      visible: 'opacity-100 translate-x-0',
    },
    fadeRight: {
      hidden: 'opacity-0 translate-x-10',
      visible: 'opacity-100 translate-x-0',
    },
    scale: {
      hidden: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100',
    },
  };

  const anim = animations[animation];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? anim.visible : anim.hidden}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
