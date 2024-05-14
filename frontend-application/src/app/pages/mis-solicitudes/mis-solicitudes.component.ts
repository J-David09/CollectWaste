import { Component } from '@angular/core';
import { Report } from 'src/app/interfaces/report';
import { User } from 'src/app/interfaces/user';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-mis-solicitudes',
  templateUrl: './mis-solicitudes.component.html',
  styleUrls: ['./mis-solicitudes.component.scss']
})
export class MisSolicitudesComponent {

  constructor(private reportService:  ReportService) {}

  idString = localStorage.getItem("id");
  nameString = localStorage.getItem("name");
  userNameString = localStorage.getItem("userName");
  roleString = localStorage.getItem("role");

  user: User = {
    id: parseInt(this.idString || "0"),
    name: this.nameString || "",
    role: parseInt(this.roleString || "0"),
    userName: this.userNameString || "",
    password: ""
  }

  reports: Array<Report> = new Array();

  ngOnInit() {
    this.reportService.getByUser(this.user.id).subscribe(data =>{
      this.reports = data;
    })
  }
}
