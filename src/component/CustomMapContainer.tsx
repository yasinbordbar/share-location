import { MapContainer, TileLayer } from "react-leaflet";

const CustomMapContainer = ({ setSelectedPosition, children }: any) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={100}
      className={setSelectedPosition ? "map-container" : ""}
      scrollWheelZoom={false}
      whenCreated={
        setSelectedPosition
          ? (map) => {
              map.on("click", function (e) {
                // @ts-ignore
                setSelectedPosition(e.latlng);
              });
            }
          : null
      }
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};

export default CustomMapContainer;
