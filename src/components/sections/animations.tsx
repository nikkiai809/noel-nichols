'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export function FadeInUp({ children, className = '', delay = 0, y = 30, duration = 0.6 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ children, className = '', id }: SectionContainerProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-wide">{children}</div>
    </section>
  );
}

interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <FadeIn>
      <div className="section-label">{label}</div>
    </FadeIn>
  );
}
