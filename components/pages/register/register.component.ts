import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    usuario={
      email:'',
      password:''
    }

    constructor(private authService: AuthService){

    }

    ingresar(){
      console.log(this.usuario)
      const {email,password} = this.usuario
      this.authService.login(email,password).then(res=>{
        console.log("Se registro",res);
      })
    }

    ingresarConGoogle(){
      console.log(this.usuario)
      const {email,password} = this.usuario
      this.authService.loginWithGoogle(email,password).then(res=>{
        console.log("Se registro",res);
      })
    }
    ingresarConFacebok(){
        console.log(this.usuario)
        const {email,password} = this.usuario
        this.authService.loginWithFacebook(email,password).then(res=>{
          console.log("Se registro",res);
        })
      }
      ingresarConGithub(){
        console.log(this.usuario)
        const {email,password} = this.usuario
        this.authService.loginWithGithub(email,password).then(res=>{
          console.log("Se registro",res);
        })
      }
    /*obtenerUsuarioLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email)
    })
    }*/
    logout(){
      this.authService.logout();
    }
    }
