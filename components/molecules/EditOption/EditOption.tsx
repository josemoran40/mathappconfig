import { DeleteIcon, EditIcon } from "../../atoms";

export function EditOption({ children, className }) {
  return (
    <div className={`w-full flex gap-4 justify-center items-center`}>
      {children}
      <EditIcon className="h-4 cursor-pointer" />
      <DeleteIcon className="h-4 cursor-pointer" />
    </div>
  );
}
