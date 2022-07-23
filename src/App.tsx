import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import FullMap from "./component/FullMap";
import { LocationContext } from "./context/location.context";
import Title from "./component/mini-component/Title";
import ShowMapButton from "./component/mini-component/button/ShowMapButton";
import LocationForm from "./component/LocationForm";

function App() {
  const [allLocations, setAllLocations] = useState<any[]>([]);
  const [showFullMap, setShowFullMap] = useState(false);

  return (
    <LocationContext.Provider value={[allLocations, setAllLocations]}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Title text="Share location" />
      <LocationForm formType="Add" />
      <ShowMapButton
        showFullMap={showFullMap}
        setShowFullMap={setShowFullMap}
      />
      {showFullMap && <FullMap />}
    </LocationContext.Provider>
  );
}

export default App;
