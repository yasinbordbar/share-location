import React, { useState, createContext } from "react";

// Create a provider for components to consume and subscribe to changes
export const LocationContextProvider = (props: any) => {
  const [allLocations, setAllLocations] = useState([]);

  return (
    <LocationContext.Provider value={[allLocations, setAllLocations]}>
      {props.children}
    </LocationContext.Provider>
  );
};

// Create Context Object
export const LocationContext = createContext(null);
