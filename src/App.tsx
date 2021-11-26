import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddLocationForm from "./component/AddLocationForm";
import FullMap from "./component/FullMap";
import { LocationContext } from "./context/location_context";

function App() {
  const [all_locations, setAllLocations] = useState<any[]>([]);

  const [show_full_map, setShowFullMap] = useState(true);

  return (
    <LocationContext.Provider value={[all_locations, setAllLocations]}>
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

      <div>
        <p className="title">Share location</p>
        <div className="container">
          <AddLocationForm />
        </div>

        <div className="center">
          <button
            className="btn-show"
            onClick={() => setShowFullMap(!show_full_map)}
          >
            {show_full_map ? "Hide map" : "Full map"}
          </button>
        </div>

        {show_full_map ? <FullMap /> : null}
      </div>
    </LocationContext.Provider>
  );
}

export default App;
