import React, { useState, createContext } from "react";

// Create Context Object
export const LocationContext = createContext(null);

// Create a provider for components to consume and subscribe to changes
export const LocationContextProvider = (props) => {
  const [all_locations, setAllLocations] = useState([]);

  return (
    <LocationContext.Provider value={[all_locations, setAllLocations]}>
      {props.children}
    </LocationContext.Provider>
  );
};
