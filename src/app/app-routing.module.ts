import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from "./video/video.component";
import {ListarVideoComponent} from "./video/listar-video/listar-video.component";

const routes: Routes = [
  {
    path: '',
    component: VideoComponent,
    children:[
      {
        path: '',
        component: ListarVideoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
