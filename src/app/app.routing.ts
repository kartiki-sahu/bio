import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ComponentsComponent } from './components/components.component';

const routes: Routes =[
    { path: '', component: ComponentsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
