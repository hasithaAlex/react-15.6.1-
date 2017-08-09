import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    // console.log(this.props.projects);  
    let projectItems;

    if (this.props.projects) {
        projectItems = this.props.projects.map(project =>{
            // console.log(project);
            return(
                <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project} />
            );
        });
    }  

    return (
      <div className="Projects">
        <h3>Latest Project</h3>
        {projectItems}
      </div>
    );
  }
}

export default Projects;
