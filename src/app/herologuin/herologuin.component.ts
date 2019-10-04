import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { Router } from "@angular/router";





declare var M: any;
@Component({
  selector: 'app-herologuin',
  templateUrl: './herologuin.component.html',
  styleUrls: ['./herologuin.component.css'],
  providers: [UsuarioService]
})
export class HerologuinComponent implements OnInit {

  userActual: Usuario;
  _id: string;
  userLogin: Usuario;
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
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

  login(form: NgForm)
  {
    if(form.value.name == "" || form.value.pass == "" )
    {
      M.toast({html: 'Si no pones todo no va'});
    }
    else
    {
      this.usuarioService.loginUsuario(form.value.name, form.value.pass)
      .subscribe(res => {console.log(res), (error) =>{console.log(error)}

      var longitud = res as string;
         if (longitud.length == 0)
         {
          M.toast({html: 'Ese usuario no existe o esto no está funcionando, una de dos'})
         }else if (longitud.length != 0)
         {
           this.userLogin = new Usuario();
           this.userLogin._id = res[0]._id;
           this.userLogin.id = res[0].id;
           this.userLogin.name = res[0].name;
           this.userLogin.pass = res[0].pass;
           this.userLogin.info = res[0].info;
           M.toast({html: 'Very good login'})
           this.resetForm(form);
           this.router.navigateByUrl("/api/general/" + `${this.userLogin._id}`);
           

         }
        // var json = res as string;
        // var obj = JSON.parse(json);
        // this.userLogin = new Usuario();
        //     this.userLogin._id= obj._id;
        //     this.userLogin.id= res["id"].value;
        //     this.userLogin.name= res["name"].value;
        //     this.userLogin.pass= res["pass"].value;
        //     this.userLogin.info= res["info"].value;
        //      M.toast({html: 'Very good login'})
        //       this.resetForm(form);
        //       this.router.navigateByUrl("/api/general");

      })
    }
  }

  addUsuario(form: NgForm)
  {
    if(form.value.id == "" || form.value.name == "" || form.value.pass == "" )
    {
      M.toast({html: 'Todos los campos son obligatorios'});
    }
    else
    {
        this.userActual = new Usuario();
        this.userActual.id = form.value.id;
        this.userActual.name = form.value.name;
        this.userActual.pass = form.value.pass;
        this.userActual.info = "No tiene aún información";

        this.usuarioService.postUsuario(this.userActual)
          .subscribe(res => {
                    
              M.toast({html: 'Usuario registrado putisima madre'})
              this.resetForm(form);
          
          })    
    }
    
  }

}
