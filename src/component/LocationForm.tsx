import { useContext, useEffect, useState } from "react";
import { Marker } from "react-leaflet";
import { v4 as uuidv4 } from "uuid";
import { LocationContext } from "../context/location.context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ILocation } from "../interface/form.interface";
import Field from "./mini-component/Field";
import SubmitButton from "./mini-component/button/SubmitButton";
import CustomMapContainer from "./CustomMapContainer";
import { ILocationFormProps } from "../interface/props.interface";
import { LocationType } from "../interface/types";

const LocationForm = ({
  formType,
  selectedLocation,
  popupRef,
}: ILocationFormProps) => {
  const [name, setName] = useState("");
  const [type, setType] = useState<LocationType>("Business");
  const [logo, setLogo] = useState("");
  const [allLocations, setAllLocations] = useContext(LocationContext);
  const [selectedPosition, setSelectedPosition] = useState([51.505, -0.09]);

  const handleLogo = (e: any) => {
    let selected_file = e.target.files[0];
    const objectUrl = URL.createObjectURL(selected_file);

    setLogo(objectUrl);
  };

  const handleSubmit = () => {
    const place: ILocation = {
      id: uuidv4(),
      name,
      location: selectedPosition,
      type,
      logo,
    };

    if (formType === "Add") handleAdd(place);
    else if (formType === "Edit") handleEdit(place);
  };

  const handleAdd = (place: any) => {
    setAllLocations([...allLocations, place]);
    toast.success("Location added successfully!");
  };

  const handleEdit = (place: any) => {
    let _newLocations = [...allLocations];
    let place_to_edit = _newLocations.find(
      (item) => item.id === selectedLocation.id
    );
    Object.assign(place_to_edit, place);

    setAllLocations(_newLocations);

    if (!popupRef.current) return;
    popupRef.current._close();

    toast.success("Location edited successfully!");
  };

  useEffect(() => {
    if (formType === "Edit") {
      setName(selectedLocation.name);
      setType(selectedLocation.type);
      setLogo(selectedLocation.logo);
      setSelectedPosition(selectedLocation.location);
    }
  }, [formType, selectedLocation]);

  return (
    <div className={formType === "Edit" ? "" : "container"}>
      <div className={formType === "Edit" ? "card-edit" : "card"}>
        <Field label="Location name">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </Field>

        <Field label="Location on map">
          <CustomMapContainer setSelectedPosition={setSelectedPosition}>
            {/* @ts-ignore */}
            <Marker position={selectedPosition}></Marker>
          </CustomMapContainer>
        </Field>

        <Field label="Location type">
          <select
            value={type}
            onChange={(e: any) => setType(e.target.value)}
            name=""
            id=""
          >
            <option value="Business">Business</option>
            <option value="Park">Park</option>
            <option value="Hotel">Hotel</option>
            <option value="Other">Other</option>
          </select>
        </Field>

        <Field label="Logo">
          <>
            <input onChange={(e) => handleLogo(e)} type="file" />
            <img className="logo" src={logo} alt="" />
          </>
        </Field>

        <SubmitButton formType={formType} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default LocationForm;
