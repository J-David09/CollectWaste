import { Component } from '@angular/core';

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
}
