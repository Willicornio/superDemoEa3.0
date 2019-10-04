import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsuarioService} from '../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { Router } from "@angular/router";

declare var M: any;
@Component({
  selector: 'app-herogeneral',
  templateUrl: './herogeneral.component.html',
  styleUrls: ['./herogeneral.component.css']
})
export class HerogeneralComponent implements OnInit {

 
  listaUsuarios : Usuario[];
  usuariologin : Usuario;
  usuarioEditar: Usuario;
  id :any;
  constructor(private activatedRouter: ActivatedRoute, private usuarioService: UsuarioService, private router: Router) { 

  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (typeof params['id'] !== 'undefined') {
        this.id = params['id'];
      } else {
        this.id = "No funciono >:C";
      }
    });
    this.getUsuario();
    this.getUsuarios();
  }

  editUser(form: NgForm)
  {
    this.usuarioEditar = new Usuario;
    this.usuarioEditar._id = this.usuariologin._id;
    this.usuarioEditar.name = this.usuariologin.name;
    this.usuarioEditar.pass = this.usuariologin.pass;
    this.usuarioEditar.id = this.usuariologin.id;
    this.usuarioEditar.info = form["info"];
    
    this.usuarioService.putUsuario(this.usuarioEditar)
      .subscribe(res =>
        {
          var longitud = res as string;
          if(longitud.length > 0)
          {
            M.toast({html: 'Se ha actualizado tu información de una forma espectacular de bien'})
            this.resetForm(form);
           
          }
      }), (error) =>{console.log(error)}

      this.getUsuarios();
 
  {

  }
}
  resetForm(form?: NgForm)
  {
    if(form)
    {
      form.reset();
      this.usuarioService.selectedUsuario = new Usuario();
      this.usuarioService.nuevoUsuario = new Usuario();
    }
  }

  getUsuarios()
  {
    this.usuarioService.getUsuarios()
      .subscribe(res => 
        {
          this.listaUsuarios = res as Usuario[];
        })
  }

  

  getUsuario()
  {
    this.usuarioService.getUsuario(this.id)
      .subscribe(res => 
        {
          this.usuariologin = res;
          /*new Usuario();
          var a = res as Usuario;
          this.usuariologin._id = a._id;
          this.usuariologin.id=a.id;
          this.usuariologin.name = a.name;
          this.usuariologin.pass = a.pass;
          this.usuariologin.info = a.info;*/
        })
  }
}
