import './projectCard.css'

function ProjectCard() {
  return (
    <div id='pCardContainer'>
        <div className='pCardSection'>
            <span className='num'>98</span>
            <section>
                <h1>Rank</h1>
                <p>In top 20%</p>
            </section>
        </div>
        <div id='pCardSection-o' >
            <div className='pCardSection pCardSection-2' >
            <span className='num'>32</span>
            <section>
                <h1>Projects</h1>
                <p>8 this month</p>
            </section>
            </div>
            
            <p id='additionalSpans'>
            <span>mobile app</span>
            <span>branding</span>
            </p>
            
        </div>
    </div>
  )
}

export default ProjectCard