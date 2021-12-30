import {Component, OnInit, Pipe, SecurityContext} from '@angular/core';
import {Video} from "../../shared/models/video";
import {VideoService} from "../../shared/services/video.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Marcacao} from "../../shared/models/marcacao";
import {first} from "rxjs/operators";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-listar-video',
  templateUrl: './listar-video.component.html',
  styleUrls: ['./listar-video.component.css']
})


export class ListarVideoComponent implements OnInit {

  videos?: Array<Video>;
  public videoForm: FormGroup;
  marcacoes?: Array<Marcacao>;
  public marcacoesForm: FormGroup;
  marcacaoVideo?: Video;

  constructor(
    private fb: FormBuilder,
    private videoService: VideoService,
    private roteador: Router,
    private sanitizer: DomSanitizer) {
    this.videoForm = this.fb.group({
      titulo: ["", [Validators.required]],
      link: ["", [Validators.required]]
    });

    this.marcacoesForm = this.fb.group({
      nome: ["", [Validators.required]],
      tempo_inicio: ["", [Validators.required]],
      tempo_fim: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.mostrarTodos()

  }
  mostrarTodos(){
    this.videoService.getAll()
      .subscribe(objs =>
        this.videos = objs
        );
  }



  deletar(video: Video){
    this.videoService.delete(video.id)
      .pipe(first())
      .subscribe(()=> this.videos = this.videos?.filter(x => x.id !== video.id));
  }
  inserirVideo(){
    const video = this.videoForm.value;
    this.videoService.post(video).subscribe(
      videoInserido => {
        this.mostrarTodos();
        this.videoForm.value('')
      }
    )
  }
  inserirMarcacao(idVideo: number){
    const marcacao = this.marcacoesForm.value;
    this.videoService.inserirMarcacao(idVideo, marcacao).subscribe(
      marcacaoInserida => {
        this.roteador.navigate([''])
      }
    )
  }

  mostrarMarcacao(id: number| undefined){
    this.videoService.getMarcacoes(id).subscribe(
      objs => this.marcacoes = objs
    )
  }
  deletarMarcacao(video: Video, marc: Marcacao) {
    this.videoService.deleteMarcacao(video.id, marc.id)
      .pipe(first())
      .subscribe( ()=> this.marcacoes = this.marcacoes?.filter(x => x.id !== marc.id))
  }
}
