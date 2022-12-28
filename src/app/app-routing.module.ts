import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoroplethMapComponent } from './choropleth-map/choropleth-map.component';
import { GeoJSONComponent } from './geo-json/geo-json.component';
import { GuiaInicioRapidoComponent } from './guia-inicio-rapido/guia-inicio-rapido.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LeafletCelularComponent } from './leaflet-celular/leaflet-celular.component';
import { MapasAcessiveisComponent } from './mapas-acessiveis/mapas-acessiveis.component';
import { MarcadoresIconesPersonalizadoComponent } from './marcadores-icones-personalizado/marcadores-icones-personalizado.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'guiadeiniciorapido', component: GuiaInicioRapidoComponent},
  {path: 'leafletnocelular', component: LeafletCelularComponent},
  {path: 'marcadorescomiconespersonalizados', component: MarcadoresIconesPersonalizadoComponent},
  {path: 'mapasacessiveis', component: MapasAcessiveisComponent},
  {path: 'geojson', component: GeoJSONComponent},
  {path: 'choropletmap', component: ChoroplethMapComponent},
  {path: '**' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
