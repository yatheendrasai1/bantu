import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationLogListComponent } from './notification-log-list.component';

describe('NotificationLogListComponent', () => {
  let component: NotificationLogListComponent;
  let fixture: ComponentFixture<NotificationLogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationLogListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
