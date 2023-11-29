import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/Roles';
import { RegisRolesService } from '../../services/regis-roles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regis-roles',
  templateUrl: './regis-roles.component.html',
  styleUrls: ['./regis-roles.component.css']
})
export class RegisRolesComponent implements OnInit {
  roles: Roles[] = [];

  constructor(
    private regisrolesService: RegisRolesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.regisrolesService.obtenerRolesPorProyecto(id).subscribe(data => {
        this.roles = data;
        console.log(data)
       } );

    });
  }
}
