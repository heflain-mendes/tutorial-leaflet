import { AfterViewInit, Component } from '@angular/core';
import { Feature, GeoJsonProperties, GeoJsonTypes, Point } from 'geojson';
//import do leaflet para o componente
import * as L from 'leaflet';

@Component({
  selector: 'app-geo-json',
  templateUrl: './geo-json.component.html',
  styleUrls: ['./geo-json.component.css'],
})
export class GeoJSONComponent implements AfterViewInit {
  map!: L.Map;
  geojsonFeature = {
    type: 'Feature' as GeoJsonTypes,
    properties: {
      name: 'Coors Field',
      amenity: 'Baseball Stadium',
      popupContent: 'This is where the Rockies play!',
    },
    geometry: {
      type: 'Point' as GeoJsonTypes,
      coordinates: [-104.99404, 39.75621],
    },
  };

  myLines = [
    {
      type: 'LineString' as GeoJsonTypes,
      coordinates: [
        [-100, 40],
        [-105, 45],
        [-110, 55],
      ],
    },
    {
      type: 'LineString' as GeoJsonTypes,
      coordinates: [
        [-105, 40],
        [-110, 45],
        [-115, 55],
      ],
    },
  ];

  geojsonFeature2 = {
    type: 'Feature' as GeoJsonTypes,
    properties: {
      name: 'Coors Field',
      amenity: 'Baseball Stadium',
      popupContent: 'This is where the Rockies play!',
    },
    geometry: {
      type: 'Point' as GeoJsonTypes,
      coordinates: [-104.99404, 41],
    },
  };

  someFeatures = [
    {
      type: 'Feature' as GeoJsonTypes,
      properties: {
        name: 'Coors Field',
        show_on_map: true,
        popupContent: 'heflain',
      },
      geometry: {
        type: 'Point' as GeoJsonTypes,
        coordinates: [-104.99404, 42],
      },
    },
    {
      type: 'Feature' as GeoJsonTypes,
      properties: {
        name: 'Busch Field',
        popupContent: 'heflain',
        show_on_map: false,
      },
      geometry: {
        type: 'Point' as GeoJsonTypes,
        coordinates: [-104.98404, 39.74621],
      },
    },
  ];

  geojsonMarkerOptions = {
    radius: 8,
    fillColor: '#ff7800',
    color: '#000',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  };

  myStyle = {
    color: '#ff7800',
    weight: 5,
    opacity: 0.65,
  };

  onEachFeature(
    feature: GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>,
    layer: L.Layer
  ): void {
    let popupcontent = `${feature.geometry.type}`;
    if (feature.properties && feature.properties['popupContent']) {
      popupcontent += feature.properties['popupContent'];
    }

    layer.bindPopup(popupcontent);
  }

  onFilter(
    feature: GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>
  ): boolean {
    if (feature.properties) return feature.properties['show_on_map'];

    return true;
  }

  onPintToLayer(
    geoJsonPoint: GeoJSON.Feature<GeoJSON.Point, GeoJSON.GeoJsonProperties>,
    latlng: L.LatLng
  ) {
    return L.circleMarker(latlng, this.geojsonMarkerOptions);
  }

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([39.75621, -104.99404], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    L.geoJSON(this.geojsonFeature).addTo(this.map);
    L.geoJSON(this.myLines, { style: this.myStyle }).addTo(this.map);

    L.geoJSON(this.geojsonFeature2, {
      onEachFeature: this.onEachFeature,
    }).addTo(this.map);

    L.geoJSON(this.someFeatures, {
      filter: this.onFilter,
      onEachFeature: this.onEachFeature,
      pointToLayer: (geoJsonPoint, latlng) => {
        return this.onPintToLayer(geoJsonPoint, latlng);
      },
    }).addTo(this.map);
  }
}
