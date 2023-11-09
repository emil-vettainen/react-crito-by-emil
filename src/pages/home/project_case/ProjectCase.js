import React, { useEffect, useState } from 'react'
import './ProjectCase.css'
import ProjectsCard from '../../../components/ProjectsCard'
import BtnLinks from '../../../components/ui/BtnLinks'
import Img1 from './../../../assets/images/projects/Image1.jpg'
import Img2 from './../../../assets/images/projects/Image2.jpg'
import Img3 from './../../../assets/images/projects/Image3.jpg'
import Img4 from './../../../assets/images/projects/Image4.jpg'

const ProjectCase = () => {
    const [projects, setProjects] = useState([])

    useEffect (() => {

        const getProjects = () => {
            const projects = [
                {id: '1', src: Img1, alt: 'Person reading a newspaper.', title: 'Grow your business'},
                {id: '2', src: Img2, alt: 'On the table, there is a tablet and a smartwatch.', title: 'Why your client needs a responsive website'},
                {id: '3', src: Img3, alt: 'A notepad with a pen and a ruler.', title: 'Educate your employees to get better results'},
                {id: '4', src: Img4, alt: 'A computer displaying a chart.', title: 'Business insights is a important piece of your business'}
            ]
            setProjects(projects)
        }
        getProjects()
    }, [])
    
  return (
        <section className="project-case">
            <div className="container">
                <div className="project-case-info">
                    <h3>Project & Case Studies</h3>
                    <h2>Let's Looks Our Global Projects</h2>
                </div>
                <div className="project-case-grid">
                    {projects.map((project) => <ProjectsCard key={project.id} {...project} />)}
                </div>
                <div className="btn-projects">
                    <BtnLinks title="All Recent Projects" url="/projects" type="dark" />
                </div>
            </div>
        </section>
    )
}

export default ProjectCase