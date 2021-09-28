import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { MiniSecaoComponent } from './mini-secao/mini-secao.component';
import { Secao1Component } from './secao1/secao1.component';

@NgModule({
  declarations: [ AppComponent, TopoComponent, MiniSecaoComponent, Secao1Component ],imports: [ BrowserModule, AppRoutingModule ],
  providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
