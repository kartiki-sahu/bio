import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  { path: '', component: ComponentsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 60]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
