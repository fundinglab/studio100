'use client';

import { useEffect, useRef } from 'react';

export default function HeroAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    // Direct target — no lerp lag. The browser decodes as fast as it can.
    let targetTime = 0;
    let lastSetTime = -1;
    let seeking = false;
    let rafId: number;

    const getScrollProgress = (): number => {
      const rect = wrapper.getBoundingClientRect();
      const totalScroll = wrapper.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return 0;
      const scrolled = Math.max(0, Math.min(totalScroll, -rect.top));
      return scrolled / totalScroll;
    };

    const seek = () => {
      rafId = requestAnimationFrame(seek);

      // Skip if video isn't ready or we're already waiting for a previous seek
      if (
        Number.isNaN(video.duration) ||
        video.duration === 0 ||
        seeking
      ) return;

      // Only seek when target changed meaningfully (2ms threshold ≈ 1 frame at 30fps)
      if (Math.abs(targetTime - lastSetTime) < 0.002) return;

      seeking = true;
      lastSetTime = targetTime;

      // fastSeek is available in Firefox — it snaps to nearest keyframe, very fast
      if (typeof video.fastSeek === 'function') {
        video.fastSeek(targetTime);
        seeking = false;
      } else {
        video.currentTime = targetTime;
        // onseeked fires when the browser decoded the frame
      }
    };

    const onSeeked = () => {
      seeking = false;
    };

    const onScroll = () => {
      targetTime = getScrollProgress() * video.duration;
    };

    const init = () => {
      video.pause();
      targetTime = getScrollProgress() * video.duration;
      lastSetTime = targetTime;
      video.currentTime = targetTime;

      video.addEventListener('seeked', onSeeked);
      window.addEventListener('scroll', onScroll, { passive: true });
      rafId = requestAnimationFrame(seek);
    };

    if (video.readyState >= 1) {
      init();
    } else {
      video.addEventListener('loadedmetadata', init, { once: true });
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      video.removeEventListener('seeked', onSeeked);
      video.removeEventListener('loadedmetadata', init);
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="hero-animation-wrapper"
      style={{
        height: '350vh',
        position: 'relative',
        background: '#FAFAFA',
        marginTop: -72,
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: '#FAFAFA',
        }}
      >
        <video
          ref={videoRef}
          src="/video/studio100-animation.mp4"
          muted
          playsInline
          preload="auto"
          // @ts-expect-error — non-standard attribute
          disableremoteplayback=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            /* render at native resolution, no downscaling artifacts */
            imageRendering: 'high-quality' as React.CSSProperties['imageRendering'],
            willChange: 'contents',
          }}
        />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-animation-wrapper {
            height: 250vh !important;
          }
        }
      `}</style>
    </section>
  );
}
