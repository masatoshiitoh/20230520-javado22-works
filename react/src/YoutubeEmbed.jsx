import React, { useEffect, useState } from "react";

const YoutubeEmbed = ({ myId }) => {
    const [videoId, setVideoId] = useState(myId);

    useEffect(() => {
        // Cloudflare Workerのエンドポイントを指定
        fetch(`https://hello-world-floral-cloud-eb0a.masatoshi9953.workers.dev/?movie-id=${myId}`)
            .then((response) => response.text())
            .then((id) => {
                setVideoId(id);
            });
    }, []);

    return (
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
};

export default YoutubeEmbed;