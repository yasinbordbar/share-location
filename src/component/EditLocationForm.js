import React, { Fragment, useContext, useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { LocationContext } from "../context/location_context";

const EditLocationForm = ({ selectedLocation, popupRef }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("Business");
  const [logo, setLogo] = useState("");

  const [all_locations, setAllLocations] = useContext(LocationContext);

  const submitForm = () => {
    toast.success("Location edited successfully!");

    if (!popupRef.current) return;
    popupRef.current._close();

    const place = {
      id: uuidv4(),
      name,
      location: selected_position,
      type,
      logo,
    };

    let _newLocations = [...all_locations];
    let plece_to_edit = _newLocations.find(
      (item) => item.id === selectedLocation.id
    );
    Object.assign(plece_to_edit, place);

    setAllLocations(_newLocations);
  };

  const [selected_position, setSelectedPosition] = useState([51.505, -0.09]);

  const handleLogo = (e) => {
    var selected_file = e.target.files[0];
    const objectUrl = URL.createObjectURL(selected_file);

    setLogo(objectUrl);
  };

  useEffect(() => {
    setName(selectedLocation.name);
    setName(selectedLocation.name);
    setType(selectedLocation.type);
    setLogo(selectedLocation.logo);
    setSelectedPosition(selectedLocation.location);
  }, []);

  return (
    <Fragment>
      <div className="card-edit">
        <div>
          <span className="label">Location name:</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>

        <div>
          <span className="label">Location on map:</span>
          <MapContainer
            center={selected_position}
            zoom={100}
            style={{ width: "200px", height: "150px" }}
            scrollWheelZoom={false}
            whenCreated={(map) => {
              map.on("click", function (e) {
                setSelectedPosition(e.latlng);
              });
            }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={selected_position}></Marker>
          </MapContainer>
        </div>

        <div>
          <span className="label">Location type:</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            name=""
            id=""
          >
            <option value="Business">Business</option>
            <option value="Park">Park</option>
            <option value="Hotel">Hotel</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <span className="label">Logo:</span>
          <input onChange={(e) => handleLogo(e)} type="file" />
          <img className="logo" src={logo} alt="" />
        </div>

        <div>
          <button className="btn-save" onClick={submitForm}>
            Save
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default EditLocationForm;
