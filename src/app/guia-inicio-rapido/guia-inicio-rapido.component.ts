import { AfterViewInit, Component, OnInit } from '@angular/core';
//import do leaflet para o componente
import * as L from 'leaflet';

@Component({
  selector: 'app-guia-inicio-rapido',
  templateUrl: './guia-inicio-rapido.component.html',
  styleUrls: ['./guia-inicio-rapido.component.css'],
})
export class GuiaInicioRapidoComponent implements AfterViewInit {
  map!: L.Map;
  maker!: L.Marker;
  circle!: L.Circle;
  polygon!: L.Polygon;
  popUp!: L.Popup;

  ngAfterViewInit(): void {
    //criando uma instância de mapa leaflet
    this.map = L.map('map').setView([51.505, -0.09], 13);

    //adicionando camada de bloco do openstreetmap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
    //nunca se esquecer de da os devidos direitos autorais


    //criando uma marcador
    this.maker = L.marker([51.5, -0.09]).addTo(this.map);

    //criando um círculo
    this.circle = L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(this.map);

    //crindo polígono
    this.polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ]).addTo(this.map);

    //inserindo popup em um marcador
    this.maker.bindPopup('vc está aki').openPopup();

    //criando popup e inserindo um popup diretamente no mapa
    this.popUp = L.popup()
      .setLatLng([51.513, -0.09])
      .setContent('Popup inserido com sucesso')
      .openOn(this.map);

    //inserindo poppup por meio do evento click
    this.map.on('click', (e : L.LeafletMouseEvent)=> {this.onMapClick(e)});
    // OBSERVAÇÃO: O segundo argumento deve ser uma função, caso passe um método
    // diretamente, não será possivel acessar nenhuma propriedade da classe
  }

  /**
   * Método usado para inserir popup dinâmicamente no mapa
   * @param e 
   */
  onMapClick(e: L.LeafletMouseEvent) {
    if (typeof this.map !== 'undefined') {
      L.popup()
        .setLatLng(e.latlng)
        .setContent('Vc clicou aki')
        .openOn(this.map);
    }
  }
}
