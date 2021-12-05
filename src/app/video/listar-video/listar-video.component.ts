import { Component, OnInit } from '@angular/core';
import {Video} from "../../shared/models/video";
import {VideoService} from "../../shared/services/video.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-listar-video',
  templateUrl: './listar-video.component.html',
  styleUrls: ['./listar-video.component.css']
})
export class ListarVideoComponent implements OnInit {

  videos: Array<Video> | undefined;
  public videoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private videoService: VideoService,
    private roteador: Router) {
    this.videoForm = this.fb.group({
      titulo: ["", [Validators.required]],
      link: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.videoService.getAll().subscribe(
      objs => this.videos = objs
    )
  }

  deletar(video: Video){
    this.videoService.delete(video.id).subscribe(
      video =>{
        this.roteador.navigate(['listar-video'])
      }
    )
  }
  inserirVideo(){
    const video = this.videoForm.value;
    this.videoService.post(video).subscribe(
      videoInserido => {
        this.roteador.navigate(['listar-video'])
      }
    )
  }
}
