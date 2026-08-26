import { useEffect, useRef, useState, type ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  onVisible?: (id: string) => void;
}

export default function Section({
  id,
  children,
  className = '',
  onVisible,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onVisible?.(id);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [id, onVisible]);

  return (
    <section
      id={id}
      ref={ref}
      className={`flex min-h-[100dvh] w-full max-w-full snap-start items-center justify-center px-4 py-20 pb-28 sm:px-6 md:px-10 md:py-32 ${className}`}
    >
      <div
        className={`mx-auto w-full max-w-6xl transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {children}
      </div>
    </section>
  );
}
