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
  operacion = "Adicionar";
  id: number | undefined;

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



  saveUser() {
    let u: any = {
      username: this.formUser.get('userName')?.value,
      name: this.formUser.get('name')?.value,
      lastname: this.formUser.get('lastName')?.value,
      age: this.formUser.get('age')?.value,
    }

    if (this.id == undefined) {
      //Add User 
      this._userService.addUser(u).subscribe(
        data => {
          this.toastr.success("El usuario fue registrado con éxito", "Usuario registrado.");
          this.formUser.reset();
          this.getUsers();
        },
        error => {
          this.toastr.error("Opss.. Ocurrió un error.", "Error.");
          console.log(error);
        });
    } else {
      //Edit User
      u.id = this.id;
      this._userService.updateUser(this.id, u).subscribe(
        data => {
          this.toastr.info("El usuario fue actualizado con éxito", "Usuario registrado.");
          this.id = undefined;
          this.operacion = "Adicionar";
          this.formUser.reset();
          this.getUsers();
        },
        error => {
          this.toastr.error("Opss.. Ocurrió un error.", "Error.");
          console.log(error);
        }
      );
    }
  }

  editUser(usuario: any) {
    this.operacion = "Editar";
    this.id = usuario.id;

    this.formUser.patchValue({
      userName: usuario.userName,
      name: usuario.name,
      lastName: usuario.lastName,
      age: usuario.age
    })
    console.log(usuario);
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
