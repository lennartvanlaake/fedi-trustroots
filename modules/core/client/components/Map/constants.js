import { getMapBoxToken } from '../../utils/map';
import osmStyle from './osm.json';
// don't know where to put this
export const brandName = 'Bicycle Touring Community';
export const MAP_STYLE_MAPBOX_OUTDOORS = 'mapbox://styles/mapbox/outdoors-v11';
export const MAP_STYLE_MAPBOX_SATELLITE =
  'mapbox://styles/mapbox/satellite-streets-v11';
export const MAP_STYLE_MAPBOX_STREETS = 'mapbox://styles/mapbox/streets-v11';
export const MAP_STYLE_OSM = osmStyle;
export const MAP_STYLE_DEFAULT = getMapBoxToken()
  ? MAP_STYLE_MAPBOX_STREETS
  : MAP_STYLE_OSM;
