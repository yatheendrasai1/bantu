import { Component } from '@angular/core';
import { NotificationLogService } from '../notification-log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data : any;
  constructor(private notificationLogService:NotificationLogService) { }
  ngOnInit(): void {

  }
}
