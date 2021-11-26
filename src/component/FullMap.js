import React, { Fragment, useContext, useState, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LocationContext } from "../context/location_context";
import EditLocationForm from "./EditLocationForm";

const FullMap = () => {
  const popup = useRef(null);

  const [all_locations] = useContext(LocationContext);

  const [show_edit, setShowEdit] = useState(false);

  const hideElement = () => {
    setShowEdit(false);
    if (!popup.current) return;
    popup.current._close();
  };

  return (
    <div>
      {" "}
      <MapContainer center={[51.505, -0.09]} zoom={100} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {all_locations.map((location) => (
          <Fragment>
            <Marker position={location.location}>
              <Popup ref={popup}>
                {show_edit ? (
                  <Fragment>
                    <button className="btn-cancel" onClick={hideElement}>
                      Cancel
                    </button>

                    <EditLocationForm
                      selectedLocation={location}
                      popupRef={popup}
                    />
                  </Fragment>
                ) : (
                  <Fragment>
                    <button
                      className="btn-edit"
                      onClick={() => setShowEdit(true)}
                    >
                      edit
                    </button>
                    <div className="details">
                      <p>
                        <b>Details</b>
                      </p>
                      <p>{"name: " + location.name}</p>
                      <p>{"type: " + location.type}</p>
                      <img className="logo" src={location.logo} alt="" />
                    </div>
                  </Fragment>
                )}
              </Popup>
            </Marker>
          </Fragment>
        ))}
      </MapContainer>
    </div>
  );
};

export default FullMap;
