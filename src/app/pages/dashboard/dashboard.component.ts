import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
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
    this.getUsers();
  }

  getUsers() {
    this._userService.getListUser().subscribe(
      data => {
        console.log(data);
        this.usuarios = data;
      },
      error => { console.log(error) }
    );
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

  deleteUser(id: number) {
    this._userService.deleteUser(id).subscribe(
      data => {
        this.toastr.error("El usuario fue eliminado con éxito", "Usuario eliminado.")
        this.getUsers()
      }, error => {
        console.log(error);
      }
    );
  }
}

export interface IUsuario {
  id: number,
  name: string,
  username: string,
  lastname: string,
  age: number
}
