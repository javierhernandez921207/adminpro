import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/models/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuarios: [IUsuario];
  formUser: FormGroup;

  constructor(private _userService: UserService, private fb: FormBuilder, private toastr: ToastrService) {
    this.formUser = fb.group({
      userName: ['', Validators.required],
      name: ['', [Validators.required, Validators.maxLength(16)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      age: ['', Validators.required]
    });
  }

  ngOnInit(): void {    
    this._userService.getClientes().subscribe(response => {
      this.usuarios = response.data;
      console.log(this.usuarios);
    });
    console.log(this.formUser);
  }

  addUser() {
    let u: any = {
      username: this.formUser.get('userName')?.value,
      name: this.formUser.get('name')?.value,
      lastname: this.formUser.get('lastName')?.value,
      age: this.formUser.get('age')?.value,
    }
    this.toastr.success("El usuario fue registrado con éxito", "Usuario registrado.");    
    this.formUser.reset();
  }

  editUser(index: number) {
    console.log(index);
  }

  deleteUser(index: number) {
    this.usuarios.splice(index, 1);
    this.toastr.error("El usuario fue eliminado con éxito", "Usuario eliminado.")
  }
}

export interface IUsuario {
  id: number,
  username: string,
  name: string,
  lastname: string,
  age: number
}
