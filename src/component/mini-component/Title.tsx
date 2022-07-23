import { ITitleProps } from "../../interface/props.interface";

const Title = ({ text }: ITitleProps) => {
  return <p className="title">{text}</p>;
};

export default Title;
