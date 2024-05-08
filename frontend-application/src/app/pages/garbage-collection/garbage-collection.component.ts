import { Component } from '@angular/core';
import { Report } from 'src/app/interfaces/report';
import { User } from 'src/app/interfaces/user';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-garbage-collection',
  templateUrl: './garbage-collection.component.html',
  styleUrls: ['./garbage-collection.component.scss']
})
export class GarbageCollectionComponent {
  tasks = [
    'Edwin',
    'David',
    'Politecnico'
  ]

  constructor(private reportService: ReportService) {}

  currentDate = new Date();
  currentDateAsString = this.currentDate.toISOString();

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

  report: Report = {
    id: undefined,
    user: this.user.id,
    reportDay: this.currentDateAsString
  }

  enviarReporte () {
    console.log(this.report)
    this.reportService.create(this.report).subscribe(data => {

    })
  }

  
}
