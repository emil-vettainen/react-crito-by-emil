import React from 'react'
import './ProjectCase.css'

const ProjectCase = () => {
  return (
    <section className="project-case">
    <div className="container">

        <div className="project-case-info">
            <h3>Project & Case Studies</h3>
            <h2>Let's Looks Our Global Projects</h2>
        </div>

        <div className="project-case-grid">
            
            <a className="clickable" href="#">
                <article className="blog-card" aria-label="link to grow your business">
                    <img src="/images/projects/Image1.jpg" alt="Picture of a person reading a newspaper." />
                    <div className="blog-info">
                        <h4>Grow your business</h4>
                        <div className="blog-button">
                            <p>Read more<i className="fa-regular fa-arrow-up-right" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </article>
            </a>

            <a className="clickable" href="#">
                <article className="blog-card" aria-label="link to why your client needs a responsive website">
                    <img src="/images/projects/Image2.jpg"
                        alt="On the table, there is a tablet and a smartwatch." />
                    <div className="blog-info">
                        <h4>Why your client needs a responsive website</h4>
                        <div className="blog-button">
                            <p>Read more<i className="fa-regular fa-arrow-up-right" aria-hidden="true"></i></p>
                        </div>
                        
                    </div>
                </article>
            </a>

            <a className="clickable" href="#">
                <article className="blog-card" aria-label="link to educate your employees to get better results">
                    <img src="/images/projects/Image3.jpg" alt="Picture of a notepad with a pen and a ruler." />
                    <div className="blog-info">
                        <h4>Educate your employees to get better results</h4>
                        <div className="blog-button">
                            <p>Read more<i className="fa-regular fa-arrow-up-right" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </article>
            </a>

            <a className="clickable" href="#">
                <article className="blog-card" aria-label="Business Insights is a important piece of your business">
                    <img src="/images/projects/Image4.jpg" alt="Picture of a computer displaying a chart." />
                    <div className="blog-info">
                        <h4>Business Insights is a important piece of your business</h4>
                        <div className="blog-button">
                            <p>Read more<i className="fa-regular fa-arrow-up-right" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </article>
            </a>

        </div>

        <div className="btn-projects">
            <a aria-label="all recent projects" className="button" href="#">All Recent Projects<i className="fa-regular fa-arrow-up-right" aria-hidden="true"></i></a>
        </div>

    </div>
</section>
  )
}

export default ProjectCase