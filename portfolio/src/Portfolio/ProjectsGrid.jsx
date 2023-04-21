import { useContext } from 'react';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from './ProjectsContext';

const ProjectsGrid = () => {
	const {
		projects
	} = useContext(ProjectsContext);

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<h1 id="name">
					Project portfolio
				</h1>
			</div>
            <br></br>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{projects.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					  ))}
			</div>
		</section>
	);
};

export default ProjectsGrid;