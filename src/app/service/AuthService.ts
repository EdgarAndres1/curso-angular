import { Injectable } from "@angular/core";
import { AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from "firebase/compat/app"
@Injectable({

    providedIn: "root"
})

export class AuthServiceService {
    constructor(private afauth : AngularFireAuth){}

        async login(email : String, password : string){
            try {
                return await this.afauth.singInWithEmailAndPassword(email,password);
            } catch (err){
                console.log("error en login", err);
                return null;
            }
        }
        async loginWithGoogle(email:String, password : string){
          try {
            return await this.afauth.singInWithpopup(new firebase.auth.GoogleAuthProvider());
          } catch (err) {
            console.log("error en login con Google", err);
            return null;
          } 
        }

    
}