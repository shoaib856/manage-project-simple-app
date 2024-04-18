import { useId, useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import Header2 from "./H2";
import Paragraph from "./P";

const NewProject = ({ onAdd, onCancel }) => {
  const id = useId();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  const handleSubmit = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (!title.trim() || !description.trim() || !dueDate.trim()) {
      modalRef.current.open();
      return;
    }
    onAdd({ title, description, dueDate }, id);
  };
  return (
    <>
      <Modal ref={modalRef} btnCaption={"Okay"}>
        <Header2>Invalid Input</Header2>
        <Paragraph>Oops ... looks like you forget to enter a value.</Paragraph>
        <Paragraph>
          Please make sure you provide a valid value for every input field.
        </Paragraph>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950 transition"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSubmit}
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md transition"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} id={"title"} label={"Title"} type={"text"} />

          <Input
            ref={descriptionRef}
            id="description"
            label="Description"
            isTextarea
          />

          <Input
            ref={dueDateRef}
            id={"date"}
            label={"Due Date"}
            type={"date"}
          />
        </div>
      </div>
    </>
  );
};

export default NewProject;
