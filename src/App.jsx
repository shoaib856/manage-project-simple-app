import { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () =>
    setProjectsState((prev) => ({ ...prev, selectedProjectId: null }));

  const handleAddProject = (data, id) =>
    setProjectsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, { ...data, id }],
      selectedProjectId: undefined,
    }));

  const handleCancelProject = () =>
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));

  const handleSelect = (id) =>
    setProjectsState((prev) => ({ ...prev, selectedProjectId: id }));

  const handleDelete = (id) =>
    setProjectsState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      projects: prev.projects.filter((p) => p.id !== id),
    }));

  const handleAddTask = (id, task) =>
    setProjectsState((prev) => ({
      ...prev,
      tasks: [...prev.tasks, { id, ...task }],
    }));
  const handleDeleteTask = (id) =>
    setProjectsState((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((p) => p.taskId !== id),
    }));

  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onCancel={handleCancelProject} onAdd={handleAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected {...{ onStartAddProject: handleStartAddProject }} />
    );
  } else if (projectsState.selectedProjectId) {
    content = (
      <SelectedProject
        project={projectsState.projects.find(
          (p) => p.id === projectsState.selectedProjectId
        )}
        onDelete={handleDelete}
        onDeleteTask={handleDeleteTask}
        onAddTask={handleAddTask}
        tasks={projectsState.tasks.filter(
          (task) => task.id === projectsState.selectedProjectId
        )}
      />
    );
  }

  return (
    <main className="min-h-screen my-8 flex gap-8">
      <Sidebar
        {...{
          onStartAddProject: handleStartAddProject,
          onSelect: handleSelect,
          projectsState,
        }}
      />
      {content}
    </main>
  );
}

export default App;
