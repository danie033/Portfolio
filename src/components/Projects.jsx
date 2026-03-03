function Projects(){

    const ProjectList=[
        {
            title:'Predicting the Average time for real Data Flights.',
            description:"For this project I used Linear Regression Model from the scikit-learn libray.",
            link:""
        },
        {
            title:'Interactive Map for Health Care Visualization.',
            description:"For this project I used data gather from CMS to predict average payment of Medicare by state and service provided.",
            link:""
        },
        {
            title:'Predicting and Cleaning funding Investors.',
            description:"For this project I used pySpark to process and predict investment Data.",
            link:""
        },
        
    ];


    return(
        <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="projects-grid">
            {
                ProjectList.map((project,id)=>(
                    <div className="card" key={id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>View Project</a>
                    </div>

                ))
            }


            </div>


            
            
        </section>
        
        
        
        
    )


}

export default Projects;