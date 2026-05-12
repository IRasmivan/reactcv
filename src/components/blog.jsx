import React, { Component } from "react";
import posts from "../data/blogPosts.json";

export default class Blog extends Component {
  render() {
    return (
      <div>
	        <section id="blog" className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
						<span className="heading-meta">Read</span>
						<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row blog-grid-row">
					{posts.map((post, index) => (
						<div
							className="col-md-6 col-sm-6 animate-box"
							data-animate-effect={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
							key={post.url || post.title}
						>
							<article className="blog-entry">
								<div className="desc">
									<div className="blog-meta">
										<span className="blog-date">{post.date}</span>
										<span className="blog-tag">
											{post.platform === "linkedin" && <i className="icon-linkedin2" aria-hidden="true" />}
											{post.platform === "linkedin" ? " " : ""}
											{post.category}
										</span>
									</div>
									<h3>
										<a href={post.url} target="_blank" rel="noopener noreferrer">
											{post.title}
										</a>
									</h3>
									<p>{post.description}</p>
									<a className="blog-link" href={post.url} target="_blank" rel="noopener noreferrer">
										{post.platform === "linkedin" && <i className="icon-linkedin2" aria-hidden="true" />}
										{post.platform === "linkedin" ? " View on LinkedIn " : "Read article "}
										<i className="icon-arrow-right3" aria-hidden="true" />
									</a>
								</div>
							</article>
						</div>
					))}
				</div>
				{/* <div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div> */}
			</div>
			</section>
      </div>
    );
  }
}
