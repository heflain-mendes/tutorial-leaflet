import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { GuiaInicioRapidoComponent } from './guia-inicio-rapido/guia-inicio-rapido.component';
import { LeafletCelularComponent } from './leaflet-celular/leaflet-celular.component';
import { MarcadoresIconesPersonalizadoComponent } from './marcadores-icones-personalizado/marcadores-icones-personalizado.component';
import { MapasAcessiveisComponent } from './mapas-acessiveis/mapas-acessiveis.component';
import { GeoJSONComponent } from './geo-json/geo-json.component';
import { ChoroplethMapComponent } from './choropleth-map/choropleth-map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    GuiaInicioRapidoComponent,
    LeafletCelularComponent,
    MarcadoresIconesPersonalizadoComponent,
    MapasAcessiveisComponent,
    GeoJSONComponent,
    ChoroplethMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
