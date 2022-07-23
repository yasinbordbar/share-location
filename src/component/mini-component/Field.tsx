import { IField } from "../../interface/form.interface";

const Field = ({ label, children }: IField) => {
  return (
    <div>
      <span className="label">{label}:</span>
      {children}
    </div>
  );
};

export default Field;
