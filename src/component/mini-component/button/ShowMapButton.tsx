import { IShowMapButtonProps } from "../../../interface/props.interface";

const ShowMapButton = ({
  showFullMap,
  setShowFullMap,
}: IShowMapButtonProps) => {
  return (
    <div className="center">
      <button className="btn-show" onClick={() => setShowFullMap(!showFullMap)}>
        {`${showFullMap ? "Hide" : "Full"} map`}
      </button>
    </div>
  );
};

export default ShowMapButton;
