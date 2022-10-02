
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactModalComponent } from '../modals/contact-modal/contact-modal.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messages : any = {};

  constructor(private dialogRef: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  openDialog() {
    console.log(this.messages);
    this.dialogRef.open(ContactModalComponent, {
      data: {
        topic: this.messages.topic,
        message: this.messages.message
      }
    });
  }

}
