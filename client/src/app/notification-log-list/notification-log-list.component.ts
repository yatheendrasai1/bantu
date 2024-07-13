import { Component, OnInit } from '@angular/core';
import { NotificationLogService } from '../notification-log.service';

@Component({
  selector: 'app-notification-log-list',
  templateUrl: './notification-log-list.component.html',
  styleUrl: './notification-log-list.component.css'
})

export class NotificationLogListComponent implements OnInit {
  logs: any[] = [];

  constructor(private notificationLogService: NotificationLogService) { 
  console.log("%% ~ NotificationLogListComponent ~ logs:");

  }

  ngOnInit(): void {
    console.log("heyyyyyyyyyyyy")
    this.notificationLogService.getLogs().subscribe(data => {
      console.log(data);
      this.logs = data;
    });
  }
}