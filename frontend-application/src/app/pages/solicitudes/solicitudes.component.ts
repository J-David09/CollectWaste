import { Component } from '@angular/core';
import { Report } from 'src/app/interfaces/report';
import { User } from 'src/app/interfaces/user';
import { ReportService } from 'src/app/services/report.service';
import { WasteTypeService } from 'src/app/services/waste-type.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { WasteType } from 'src/app/interfaces/waste-type';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent {

  constructor(private reportService:  ReportService,
    private wasteTypeService: WasteTypeService,
    private modalService: NgbModal
  ) {}

  modalRef!: NgbModalRef; 

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

  selectedReport : Report = {};

  wasteTypes: { [key: number]: String } = {};

  reports: Array<Report> = new Array();

  ngOnInit() {
    this.reportService.getAll().subscribe(data =>{
      this.reports = data;
    });
    this.wasteTypeService.getAll().subscribe(data => {
      data.forEach((type: WasteType) => {
        this.wasteTypes[type.id || 0] = type.name || '';
      });
    });
  }

  getWasteType(id: number): String {
    return this.wasteTypes[id] || 'Desconocido';
  }

  openModal(content: any, report: Report) {
    this.modalRef = this.modalService.open(content, { centered: true });
    this.selectedReport = report;
  }

  closeModal() {
    this.modalRef.close();
    this.ngOnInit()
    this.selectedReport = {};
  }

  guardarCambio() {
    this.reportService.update(this.selectedReport).subscribe(data => {
      this.closeModal();
      this.ngOnInit();
      this.selectedReport = {};
    })
  }

}
