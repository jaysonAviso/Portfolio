import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { timer } from 'rxjs';
import { MailService } from 'src/app/_services/mail.service';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit {
  messageForm : FormGroup;
  isLoading = false;
  messageSent = false;

  constructor(private dialogRef: MatDialog, @Inject(MAT_DIALOG_DATA) public data : any, 
    private fb: FormBuilder, private mailService: MailService) {
    }

  ngOnInit(): void {
    console.log(this.data);
    this.initializeForm();
  }

  initializeForm() {
    this.messageForm = this.fb.group({
      email: ['', Validators.required],
      name: ['',Validators.required],
      company: ['']
    });
  }

  onSubmit() {
    this.isLoading = true;
    let messageContent = {
      to: "jayson.aviso1@gmail.com",
      subject: this.data.topic,
      body: `From: ${this.messageForm.value.name},
    email: ${this.messageForm.value.email},
    company: ${this.messageForm.value.company}
    
    ${this.data.message}`
    };

    
    this.mailService.sendMessage(messageContent).subscribe(() => {
      console.log('email sent!');
      this.isLoading = false;
      this.messageSent = true;
      setTimeout(() => { this.onClose(); }, 1000);
      
    })
  }

  onClose() {
    this.dialogRef.closeAll();
  }
}
