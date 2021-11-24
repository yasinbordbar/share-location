import React, { useState } from "react";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Business");
  const [logo, setLogo] = useState("");

  const [all_locations, setAllLocations] = useState<any[]>([]);

  const submitForm = () => {
    const place = {
      name,
      location,
      type,
      logo,
    };

    console.log(all_locations);
    setAllLocations([...all_locations, place]);
  };

  return (
    <div>
      <p>Share location</p>
      <div>
        {" "}
        <MapContainer
          center={[51.505, -0.09]}
          zoom={100}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="card">
        <div>
          <span>Location name:</span>
          <input onChange={(e) => setName(e.target.value)} type="text" />
        </div>

        <div>
          <span>Location on map:</span>
          <input onChange={(e) => setLocation(e.target.value)} type="text" />
        </div>

        <div>
          <span>Location type:</span>
          <select onChange={(e) => setType(e.target.value)} name="" id="">
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <span>Logo:</span>
          <input onChange={(e) => setLogo(e.target.value)} type="file" />
        </div>
      </div>
      <button>Cancel</button>
      <button onClick={submitForm}>Save</button>
    </div>
  );
}

export default App;
