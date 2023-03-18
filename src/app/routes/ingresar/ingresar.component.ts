import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss'],
  providers: [AuthService]
})
export class IngresarComponent {
  ocurrioError:boolean = false
  usuarioRegistrado:boolean=false


  loginForm: FormGroup = this.formBuilder.group({
    correo: ['', [Validators.email, Validators.required]],
    contrasena: ['', [Validators.required]]
  })

  constructor (
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router : Router
  ) { }

  async ingresar () {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    } else {
      const info = await this._authService.login(this.loginForm.controls['correo'].value, this.loginForm.controls['contrasena'].value)
      
      localStorage.setItem('Usuario', JSON.stringify(info));
       this._router.navigate(['/dashboard']);
    }
  }

  async ingresarConGoogle () {
    const info = await this._authService.loginWithGoogle();
    localStorage.setItem('Usuario', JSON.stringify(info));
  this._router.navigate(["/dashboard"]);
  }

  campoEsValido (campo: string) {
    return (
      this.loginForm.controls[campo].errors &&
      this.loginForm.controls[campo].touched
    );
  }

  async register() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    } else {
      const info = await this._authService.register(this.loginForm.controls['correo'].value, this.loginForm.controls['contrasena'].value)
      if (info == null ){ 
        this.ocurrioError=true
        this.usuarioRegistrado=false
      }
      else{
        localStorage.setItem('Usuario', JSON.stringify(info));
        this.ocurrioError= false
        
        this.usuarioRegistrado=true
        setTimeout(()=>{
          this._router.navigate(["/dashboard"]);
        },4000)

      }
    }
   }

} 