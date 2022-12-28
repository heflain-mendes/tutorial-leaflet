import { AfterViewInit, Component } from '@angular/core';

//import do leaflet para o componente
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-celular',
  templateUrl: './leaflet-celular.component.html',
  styleUrls: ['./leaflet-celular.component.css'],
})
export class LeafletCelularComponent implements AfterViewInit {
  map!: L.Map;

  ngAfterViewInit(): void {
    //criando uma instancia leaflet que mostre o mundo inteiro
    this.map = L.map('map').fitWorld();

    //adicionando o mapa
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy ; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    //obtendo o local atual do usuário
    this.map.locate({ setView: true, maxZoom: 20 });

    // Adicionando evento de locationfound e locationerror respectivamente localização encontrada
    // e localização não encontrada
    this.map.on('locationfound', (e : L.LocationEvent) => { this.onLocationFound(e) });
    this.map.on('locationerror', (e :L.ErrorEvent) => {this.onLocationErro(e)});
  }

  onLocationFound(e: L.LocationEvent) {
    let radius = e.accuracy;
    L.marker(e.latlng)
      .addTo(this.map)
      .bindPopup(`você está há ${radius.toFixed(2)} metros de distância desse local`).openPopup();

    L.circle(e.latlng, radius).addTo(this.map);
  }

  onLocationErro(e : L.ErrorEvent){
    alert(e.message)
  }
}
