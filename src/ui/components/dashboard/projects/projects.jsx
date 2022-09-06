import './projects.css'
import woman from '../../../resources/woman.jpg'
const Card = () => {
  return (
    <div className='project_Container'>
        <span><img src={woman} alt="" /></span>
        <div >
            <h1>Logo design limited </h1>
            <p>5 months ago</p>
        </div>
    </div>
  )
}

const Projects = ()=>{
  return(
    <div className='projects_holder'>
      <div>
      <Card />
      <Card />
      <Card />
      </div>
      <span>See all projects</span>
    </div>
  )
}
export default Projects