import { Component, OnInit } from '@angular/core';
import { NotificationLogService } from '../notification-log.service';

@Component({
  selector: 'app-notification-log-list',
  templateUrl: './notification-log-list.component.html',
  styleUrl: './notification-log-list.component.css'
})

export class NotificationLogListComponent implements OnInit {
  logs: any[] = [];
  extractedData
  constructor(private notificationLogService: NotificationLogService) { 
  }

  logsprocessor(data){
    let logs = [];
    data.forEach(element => {
      let logRec = element?.log;
      if(!logRec) return data;
      let displayLog = {
        text : logRec.text,
        title : logRec.title
      }
      logs.push(displayLog);
      // this.extractedData = this.bankMessageParser(logRec.text);
    });
    return logs;
  }

  bankMessageParser(transactionString){
    // const transactionString = "HDFC Bank: Rs. 1.00 credited to a/c XXXXXX4037 on 27-07-24 by a/c linked to VPA kavya.dammala@axl (UPI Ref No 457577568249).";
    if(!transactionString.startsWith("HDFC")){
      return;
    }
    // Define regular expressions
    const bankNameRegex = /^(.*?):/;
    const moneyRegex = /Rs\. (\d+\.\d{2})/;
    const transactionTypeRegex = /(credited|debited)/;
    const accountNumberRegex = /a\/c (\w+)/;
    const dateRegex = /on (\d{2}-\d{2}-\d{2})/;
    const fromWhoRegex = /linked to VPA (.*?) \(UPI Ref No/;
    const upiRefNumberRegex = /UPI Ref No (\d+)/;

    // Extract data using regex
    const bankName = (transactionString.match(bankNameRegex) || [])[1];
    const money = (transactionString.match(moneyRegex) || [])[1];
    const transactionType = (transactionString.match(transactionTypeRegex) || [])[1];
    const accountNumber = (transactionString.match(accountNumberRegex) || [])[1];
    const date = (transactionString.match(dateRegex) || [])[1];
    const fromWho = (transactionString.match(fromWhoRegex) || [])[1];
    const upiRefNumber = (transactionString.match(upiRefNumberRegex) || [])[1];

    // Construct JSON object
    const extractedData = {
        "Bank Name": bankName,
        "Money": money,
        "Transaction Type": transactionType,
        "Account Number": accountNumber,
        "Date": date,
        "From Whom": fromWho,
        "UPI Reference Number": upiRefNumber
    };
    console.log(extractedData);
  }

  ngOnInit(): void {
    this.notificationLogService.getLogs().subscribe(data => {
      let displayLogs = this.logsprocessor(data);
      this.logs = displayLogs;
    });
  }
}