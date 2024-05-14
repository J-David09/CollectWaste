import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Report } from 'src/app/interfaces/report';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/interfaces/user';
import { ReportService } from 'src/app/services/report.service';
import { Router } from '@angular/router';
import { WasteTypeService } from 'src/app/services/waste-type.service';
import { WasteType } from 'src/app/interfaces/waste-type';

@Component({
  selector: 'app-garbage-collection',
  templateUrl: './garbage-collection.component.html',
  styleUrls: ['./garbage-collection.component.scss']
})
export class GarbageCollectionComponent {
  @ViewChild('confirmation', { static: true })
  confirmation!: TemplateRef<any>;

  constructor(private reportService: ReportService,
    private modalService: NgbModal,
    private router: Router,
    private wasteTypeService: WasteTypeService
  ) {}

  wasteTypes : Array<WasteType> = new Array();

  modalRef: any; 

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
    reportDay: this.currentDateAsString,
    estado: "En espera de confirmacion"
  }

  tituloModal = "";
  bodyModal = "";
  mostrarBoton = true;

  ngOnInit() {
    this.wasteTypeService.getAll().subscribe(data => {
      this.wasteTypes = data;
    })
  }

  enviarReporte () {
    console.log(this.report)
    this.reportService.create(this.report).subscribe(data => {
      this.mostrarBoton = true;
      this.tituloModal = "Solicitud creada correctamente";
      this.bodyModal = "Su solicitud se ha creado correctamente, podra ver el estado de la misma en la pagina: Mis solicitudes";
      this.openModal(this.confirmation);
    },
    error => {
      this.mostrarBoton = false;
      this.tituloModal = "La solicitud no se ha podido crear";
      this.bodyModal = "Su solicitud no se ha creado correctamente, por favor vuelva a intentarlo";
      this.openModal(this.confirmation);
    })
  }

  openModal(content: any) {
    this.modalRef = this.modalService.open(content, { centered: true });
  }

  closeModal() {
    this.modalRef.close();
    this.router.navigate(["/misSolicitudes"]);
  }

  
}
