import { Component } from '@angular/core';
import { faDumpster, faPencil, faRemove } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { WasteType } from 'src/app/interfaces/waste-type';
import { WasteTypeService } from 'src/app/services/waste-type.service';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent {
  faDumpster = faDumpster
  faPencil = faPencil
  faRemove = faRemove

  wasteTypes : Array<WasteType> = new Array();

  modalRef!: NgbModalRef; 

  selectedWaste : WasteType = {}

  constructor(
    private wasteTypeService: WasteTypeService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list () {
    this.wasteTypeService.getAll().subscribe(data => {
      this.wasteTypes = data;
    })
  }

  openEditModal(content: any, waste: WasteType) {
    this.modalRef = this.modalService.open(content, { centered: true });
    this.selectedWaste = waste;
  }

  closeEditModal() {
    this.modalRef.close();
    this.selectedWaste = {};
  }

  editWaste () {
    this.wasteTypeService.update(this.selectedWaste).subscribe(data => {
      this.list();
      this.closeEditModal();
    })
  }

  openDeleteModal(content: any, waste: WasteType) {
    this.modalRef = this.modalService.open(content, { centered: true });
    this.selectedWaste = waste;
  }

  closeDeleteModal() {
    this.modalRef.close();
    this.selectedWaste = {};
  }

  deleteWaste () {
    this.wasteTypeService.delete(this.selectedWaste).subscribe(data => {
      this.list();
      this.closeDeleteModal();
    })
  }

  openAddModal(content: any) {
    this.modalRef = this.modalService.open(content, { centered: true });
    this.selectedWaste = {};
  }

  closeAddModal() {
    this.modalRef.close();
    this.selectedWaste = {};
  }

  addWaste () {
    this.wasteTypeService.add(this.selectedWaste).subscribe(data => {
      this.list();
      this.closeDeleteModal();
    })
  }
}
