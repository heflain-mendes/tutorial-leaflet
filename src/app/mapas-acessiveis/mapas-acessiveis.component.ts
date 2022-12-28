import { AfterViewInit, Component } from '@angular/core';

//import do leaflet para o componente
import * as L from 'leaflet';

//configurações necessarias para usar o icone padrão do macador
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;
//--------------------------------------------------------------

@Component({
  selector: 'app-mapas-acessiveis',
  templateUrl: './mapas-acessiveis.component.html',
  styleUrls: ['./mapas-acessiveis.component.css']
})
export class MapasAcessiveisComponent implements AfterViewInit{
  map! : L.Map;
  marker! : L.Marker;

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([50.4501, 30.5234], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    
    // é conselhavel que tenha somente o alt ou o title
    this.marker = L.marker([50.4501, 30.5234],{alt: "Kyiv"}).bindPopup("Kyiv, cidade Ucrâniana").addTo(this.map);
    //OBSERVAÇÂO:  o alt passado no construto do marker
  }
}
