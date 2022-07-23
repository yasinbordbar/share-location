import { ILocationDetailsProps } from "../../interface/props.interface";
import EditButton from "./button/EditButton";
import React from "react";

const LocationDetails = ({ location, handleEdit }: ILocationDetailsProps) => {
  const { name, type, logo } = location;
  return (
    <>
      <EditButton onClick={handleEdit} />
      <div className="details">
        <p>
          <b>Details</b>
        </p>
        <p>{`name: ${name}`}</p>
        <p>{`type: ${type}`}</p>
        <img className="logo" src={logo} alt="" />
      </div>
    </>
  );
};

export default LocationDetails;
