import React from "react";

function Video({ source, title, views, date }) {
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={source}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h1>{title}</h1>
            <span>{views} Views | Uploaded on {date}</span>
        </div>
    )
}

export default Video