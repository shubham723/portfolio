// components/VideoPlayer.js

export default function VideoPlayer() {
    return (
        <div className="video-player">
            <video
                width="640"
                height="360"
                autoPlay
                muted
                loop
                playsInline
                style={{ pointerEvents: 'none' }}
                onContextMenu={(e) => e.preventDefault()}
            >
                <source
                    src="/video/ninhil-video-1.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
