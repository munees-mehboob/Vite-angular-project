import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
Login = new FormGroup({
email : new FormControl('',[Validators.email,Validators.required]),
password : new FormControl('',[Validators.required,Validators.minLength(8)])
})

onsubmit(){
  if(this.Login.valid)
{
  console.log(this.Login.value);

}
else{
  this.Login.markAllAsTouched();
}
}
}
