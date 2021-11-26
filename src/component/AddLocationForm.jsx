import React, { useContext, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { v4 as uuidv4 } from "uuid";
import { LocationContext } from "../context/location_context";

const AddLocationForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("Business");
  const [logo, setLogo] = useState("");

  const [all_locations, setAllLocations] = useContext(LocationContext);

  const submitForm = () => {
    const place = {
      id: uuidv4(),
      name,
      location: selected_position,
      type,
      logo,
    };

    setAllLocations([...all_locations, place]);
  };

  const [selected_position, setSelectedPosition] = useState([51.505, -0.09]);

  const handleLogo = (e) => {
    var selected_file = e.target.files[0];
    const objectUrl = URL.createObjectURL(selected_file);

    setLogo(objectUrl);
  };

  return (
    <div className="card">
      <div>
        <span className="label">Location name:</span>
        <input onChange={(e) => setName(e.target.value)} type="text" />
      </div>

      <div>
        <span className="label">Location on map:</span>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={100}
          style={{ width: "500px", height: "300px" }}
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
        <select onChange={(e) => setType(e.target.value)} name="" id="">
          <option value="Business">Business</option>
          <option value="Park">Park</option>
          <option value="Hotel">Hotel</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <span className="label">Logo:</span>
        <input onChange={(e) => handleLogo(e)} type="file" />
      </div>

      <div>
        <button className="btn-save" onClick={submitForm}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddLocationForm;
