'use client';

import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    setSize();

    let particles: any[] = [];
    const calculateParticleCount = () => Math.floor((window.innerWidth * window.innerHeight) / 2000);
    
    class Particle {
      x: number = 0;
      y: number = 0;
      speed: number = 0;
      opacity: number = 0;
      fadeDelay: number = 0;
      fadeStart: number = 0;
      fadingOut: boolean = false;

      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() / 3 + 0.1;
        this.opacity = 1;
        this.fadeDelay = Math.random() * 800 + 200;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      update() {
        this.y -= this.speed;
        if (this.y < 0) this.y = canvas.height;
        if (!this.fadingOut && Date.now() > this.fadeStart) this.fadingOut = true;
        if (this.fadingOut) {
          this.opacity -= 0.005;
          if (this.opacity <= 0) this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.9})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.random() * 0.5 + 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const count = calculateParticleCount();
      for (let i = 0; i < count; i++) particles.push(new Particle());
    };

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', () => {
      setSize();
      init();
    });
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-[#05060f]">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
