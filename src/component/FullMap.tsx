import React, { Fragment, useContext, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { LocationContext } from "../context/location.context";
import LocationForm from "./LocationForm";
import CustomMapContainer from "./CustomMapContainer";
import LocationDetails from "./mini-component/LocationDetails";

const FullMap = () => {
  const popup = useRef(null);
  const [allLocations] = useContext(LocationContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => setShowEdit(true);

  return (
    <div>
      <CustomMapContainer>
        {allLocations.map((location: any) => (
          <Fragment>
            <Marker position={location.location}>
              <Popup ref={popup}>
                {showEdit ? (
                  <LocationForm
                    formType="Edit"
                    selectedLocation={location}
                    popupRef={popup}
                  />
                ) : (
                  <LocationDetails
                    location={location}
                    handleEdit={handleEdit}
                  />
                )}
              </Popup>
            </Marker>
          </Fragment>
        ))}
      </CustomMapContainer>
    </div>
  );
};

export default FullMap;
