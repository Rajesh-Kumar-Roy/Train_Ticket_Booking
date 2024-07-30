import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { APIResponse, Customer, LoginCustomer } from './model/train';
import { FormsModule } from '@angular/forms';
import { TrainService } from './pages/service/train.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  trainServie = inject(TrainService);
  registerObj: Customer = new Customer();
  loginObj: LoginCustomer = new LoginCustomer();

  loggedUser: Customer = new Customer();

  constructor(){
    const localData = localStorage.getItem('trainApp');
    if(localData != null){
      this.loggedUser = JSON.parse(localData);
    }
  }

  onLogOff(){
    this.loggedUser = new Customer();
    localStorage.removeItem("trainApp");
  }
  onRegister(){
   this.trainServie.createNewCustomer(this.registerObj).subscribe((res: APIResponse) =>{
    if(res.result){
      alert("Registration Success.");
      this.closeRegisterModel();
    }
    else{
      alert(res.message);
    }
   });
  }

  onLogin(){
    this.trainServie.loginCustomer(this.loginObj).subscribe((res: APIResponse) =>{
     if(res.result){
       alert("Login Success.");
       localStorage.setItem('trainApp',JSON.stringify(res.data));
       this.loggedUser = res.data;
       this.closeLoginModel();
     }
     else{
       alert(res.message);
     }
    });
   }
  openRegisterModel(){
    const model = document.getElementById("registerModel");
    if(model != null){
      model.style.display="block";
    }
  }

  openLoginModel(){
    const model = document.getElementById("loginModel");
    if(model != null){
      model.style.display="block";
    }
  }

  closeRegisterModel(){
    const model = document.getElementById("registerModel");
    if(model != null){
      model.style.display="none";
    }
  }

  closeLoginModel(){
    const model = document.getElementById("loginModel");
    if(model != null){
      model.style.display="none";
    }
  }
}
