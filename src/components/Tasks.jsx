import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask, projectId, onDeleteTask }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask {...{ onAddTask, projectId }} />
      {!tasks.length ? (
        <p className="text-stone-800 my-4  bg-stone-200 text-center py-5 font-bold uppercase">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="flex flex-col gap-1 mt-5">
          {tasks.map((task) => (
            <li
              className="bg-stone-200 text-stone-950 p-1.5 pl-4 flex items-center justify-between"
              key={task.taskId}
            >
              <span title={task.name} className="flex-1 truncate">{task.name}</span>
              <button
                className="px-2 py-1.5 bg-stone-700 rounded-md text-stone-200 hover:bg-stone-600 transition-colors"
                onClick={() => onDeleteTask(task.taskId)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
