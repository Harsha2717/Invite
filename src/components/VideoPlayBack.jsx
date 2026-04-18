import { useEffect, useRef, useState } from "react";

function VideoPlayBack() {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const lastTapRef = useRef(0);

  const [showIcon, setShowIcon] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // ✅ Show hint when video comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHint(true);

          // auto hide after 3 sec
          setTimeout(() => setShowHint(false), 3000);

          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.4 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTap = () => {
    const now = Date.now();
    const video = videoRef.current;

    if (!video) return;

    // hide hint on interaction
    setShowHint(false);

    if (now - lastTapRef.current < 300) {
      // DOUBLE TAP → restart
      video.currentTime = 0;
      video.play();
      showTempIcon("⏮️");
    } else {
      // SINGLE TAP → toggle sound
      video.muted = !video.muted;
      showTempIcon(video.muted ? "🔇" : "🔊");
    }

    lastTapRef.current = now;
  };

  const showTempIcon = (icon) => {
    setShowIcon(icon);
    setTimeout(() => setShowIcon(false), 800);
  };

  return (
    <section>
      <h2 className="story-h2">Our Story</h2>

      <div
        className="video-wrapper"
        ref={wrapperRef} // ✅ needed for observer
        onClick={handleTap}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Pre-Wedding.mp4" type="video/mp4" />
        </video>

        {showIcon && <div className="tap-icon">{showIcon}</div>}

        {showHint && (
          <div className="video-hint">
            Tap for sound • Double tap to replay
          </div>
        )}

        <div className="video-overlay">
          A glimpse of our journey ❤️
        </div>
      </div>
    </section>
  );
}

export default VideoPlayBack;