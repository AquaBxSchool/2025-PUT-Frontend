import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

new maplibregl.Map({
  container: "map",
  style: {
    version: 8,
    sources: {
      light: {
        type: "raster",
        tiles: ["https://tile.openstreetmap.de/{z}/{x}/{y}.png"],
        tileSize: 256,
      },
    },
    layers: [
      {
        id: "light-layer",
        type: "raster",
        source: "light",
        layout: {
          visibility: "visible",
        },
      },
    ],
  },
  center: [15.3796785, 52.2425239],
  zoom: 10,
});
