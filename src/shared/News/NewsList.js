import React from "react";
import Navigation from "../Header";
import FeaturedVideos from "../Videos"
import "./NewsList.css";

export default function NewsList({ news }) {
  return (
    <section className="main">
      <FeaturedVideos />
      <div className="video-list-container">
        <div className="video-list-title">
          <strong>Featured Videos</strong>
        </div>
        {news &&
          news.map(post =>
            <div className="video-list" key={post.id}>
              <p>
                {post.id} ⬆ {post.title}
              </p>
              <div className="tag-line">
                by {post.author} {post.share} shares 
              </div>
            </div>
          )}
      </div>
    </section>
  );
}
