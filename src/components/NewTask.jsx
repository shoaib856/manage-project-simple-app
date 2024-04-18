import { useState } from "react";

const NewTask = ({ onAddTask, projectId }) => {
  const [name, setName] = useState("");

  const onChange = (evt) => setName(evt.target.value);

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (!name) return;
    const taskId = Math.random() * 99999999999;
    onAddTask(projectId, { name, taskId });
    setName("");
  };

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-4">
      <input
        type="text"
        onChange={onChange}
        value={name}
        className="w-64 p-2 flex-1 rounded-sm bg-stone-200 outline-none border-2 focus:border-stone-500 transition"
      />
      <button className="text-stone-700 hover:text-stone-950">Add Task</button>
    </form>
  );
};

export default NewTask;
