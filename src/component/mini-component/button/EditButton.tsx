import { IButton } from "../../../interface/form.interface";

const EditButton = ({ onClick }: IButton) => {
  return (
    <button className="btn-edit" onClick={onClick}>
      edit
    </button>
  );
};

export default EditButton;
