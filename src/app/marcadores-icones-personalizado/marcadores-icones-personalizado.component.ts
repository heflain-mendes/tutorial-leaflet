import { AfterViewInit, Component } from '@angular/core';
//import do leaflet para o componente
import * as L from 'leaflet';

@Component({
  selector: 'app-marcadores-icones-personalizado',
  templateUrl: './marcadores-icones-personalizado.component.html',
  styleUrls: ['./marcadores-icones-personalizado.component.css'],
})
export class MarcadoresIconesPersonalizadoComponent implements AfterViewInit {
  icone!: L.Icon;
  map!: L.Map;
  maker!: L.Marker;

  ngAfterViewInit(): void {
    //configurando icone
    // um código semelante foi usado para adicionar icone padrão em outros componentes
    this.icone = new L.Icon({
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png',

      iconSize: [25, 41], // tamanho do icone
      shadowSize: [41, 41], //tamnho da sombra do icone
      iconAnchor: [12, 41], //ponto da imagem que ficara em cima da marca
      shadowAnchor: [12, 41], //ponto que a sombra encontrará o icone
      popupAnchor: [1, -34], //ponto onde o popup deve abrir, em relação a iconAnchor
      tooltipAnchor: [16, -28], //ponto de inserção de mensagem
    });
    // OBSERVAÇÂO: para criar uma extenção de icon, foi usado o "new" e o nome Icon iniciando em maiúscula,
    // o que ocorre é que esse é a forma padrão, mas o leaflet também implementou metodos de criação que
    // que podem ser usados para criar instancias

    //criando o mapa
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">Openstreetmap</a>',
    }).addTo(this.map);

    // adicionando um marcado com icone personalizado
    this.maker = L.marker([51.508, -0.11], {icon: this.icone}).addTo(this.map).bindPopup("testando o novo icone").openPopup();
  }
}
