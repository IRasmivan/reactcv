import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    const posts = [
      {
        date: "May 11, 2019",
        category: "CV in React",
        title: "Build your CV using React",
        description: "This blog is to walk you through to build your CV using react.",
        image: "images/blog-1.png",
        url: "https://blog.rasmivan.com/"
      },
      {
        date: "May 12, 2019",
        category: "Blog Design",
        title: "Building a Blog",
        description: "This blog is to walk you through to build your own Blog site using style with bulma and blog content from contentful.",
        image: "images/blog-2.png",
        url: "https://blog.rasmivan.com/"
      }
    ];

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
							data-animate-effect={index === 0 ? "fadeInLeft" : "fadeInRight"}
							key={post.title}
						>
							<article className="blog-entry">
								<a href={post.url} className="blog-img" target="_blank" rel="noopener noreferrer">
									<img src={post.image} className="img-responsive" alt={post.title} />
								</a>
								<div className="desc">
									<div className="blog-meta">
										<span className="blog-date">{post.date}</span>
										<span className="blog-tag">{post.category}</span>
									</div>
									<h3>
										<a href={post.url} target="_blank" rel="noopener noreferrer">
											{post.title}
										</a>
									</h3>
									<p>{post.description}</p>
									<a className="blog-link" href={post.url} target="_blank" rel="noopener noreferrer">
										Read article <i className="icon-arrow-right3" aria-hidden="true" />
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
    )
  }
}
