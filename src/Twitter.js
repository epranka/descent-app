import React from "react";
import "./Twitter.css";

const Twitter = () => {
    return (
        <a
            id="twitter"
            style={{ textTransform: "uppercase", color: "white" }}
            href="https://twitter.com/epranka"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow on Twitter"
        >
            <img src="/twitter.png" alt="Twitter logo" /> <span>epranka</span>
        </a>
    );
};

export default Twitter;
