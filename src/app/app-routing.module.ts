import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from "./video/video.component";
import {CadastrarVideoComponent} from "./video/cadastrar-video/cadastrar-video.component";
import {ListarVideoComponent} from "./video/listar-video/listar-video.component";

const routes: Routes = [
  {
    path: 'video',
    component: VideoComponent,
    children:[
      {
        path: 'inserir',
        component: CadastrarVideoComponent
      },
      {
        path: 'listar',
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
