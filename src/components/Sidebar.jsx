import Button from "./Button";

const Sidebar = ({ onStartAddProject, projectsState, onSelect }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="uppercase font-bold mb-8 md:text-xl text-stone-200">
        your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projectsState.projects.map((project) => (
          <li key={project.id}>
            <button
              data-selected={project.id === projectsState.selectedProjectId}
              onClick={() => onSelect(project.id)}
              className="data-[selected='true']:text-stone-200 data-[selected='true']:bg-stone-800 w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
