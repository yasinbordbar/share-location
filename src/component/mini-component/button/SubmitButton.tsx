import { ISubmitButton } from "../../../interface/form.interface";

const SubmitButton = ({ formType, handleSubmit }: ISubmitButton) => {
  return (
    <div>
      <button className="btn-save" onClick={handleSubmit}>
        {formType === "Add" ? "Add" : "Save"}
      </button>
    </div>
  );
};

export default SubmitButton;
