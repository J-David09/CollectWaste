import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageCollectionComponent } from './garbage-collection.component';

describe('GarbageCollectionComponent', () => {
  let component: GarbageCollectionComponent;
  let fixture: ComponentFixture<GarbageCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarbageCollectionComponent]
    });
    fixture = TestBed.createComponent(GarbageCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
