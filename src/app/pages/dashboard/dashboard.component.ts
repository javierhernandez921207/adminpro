import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/models/user.service';
import { IResponse } from '../../services/models/response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  usuarios: [IUsuario];

  constructor(private _userService: UserService) {
    _userService.getClientes().subscribe(response => {
      this.usuarios = response.data;
      console.log(this.usuarios);
    });
  }

  ngOnInit(): void {

  }

}

export interface IUsuario {
  id: number,
  username: string,
  name: string,
  lastname: string,
  age: number
}
