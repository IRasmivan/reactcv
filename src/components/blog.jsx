import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://blog.rasmivan.com/" className="blog-img"><img src="images/blog-1.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>May 11, 2019 </small> | <small> CV in React </small> </span>
							<h3><a href="https://blog.rasmivan.com/">Build your CV using React</a></h3>
							<p>This blog is to walk you through to build your CV using react.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="https://blog.rasmivan.com/" className="blog-img"><img src="images/blog-2.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>May 12, 2019 </small> | <small> Blog Design </small> </span>
							<h3><a href="https://blog.rasmivan.com/">Building a Blog </a></h3>
							<p>This blog is to walk you through to build your own Blog site using style with bulma and blog content from contentful.</p>
						</div>
					</div>
					</div>
					
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
