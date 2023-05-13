import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { TicketsServiceService } from '../services/tickets-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-sell-tickets',
  templateUrl: './sell-tickets.component.html',
  styleUrls: ['./sell-tickets.component.css']
})
export class SellTicketsComponent implements OnInit {

  constructor(private ticketService: TicketsServiceService) {
  }

  form: any = {};
  tickets: Ticket[] = []

  isUpdated: boolean = false

  ticketForm = new FormGroup({
    category: new FormControl('', Validators.required),
    contactName: new FormControl('', Validators.required),
    contactNumber: new FormControl('', Validators.required),
    seatsCount: new FormControl('', Validators.required),
    dateTime: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  ticket: Ticket = {
    id: -1,
    category: this.ticketForm.value.category,
    contactName: this.ticketForm.value.contactName,
    contactNumber: this.ticketForm.value.contactNumber,
    seatsCount: this.ticketForm.value.seatsCount,
    dateTime: this.ticketForm.value.dateTime,
    description: this.ticketForm.value.description
  }

  ngOnInit(): void {
    this.getAllTickets()
  }

  addTicketDetails() {
    if (this.isUpdated == false) {
      this.ticketService.addTicket(this.ticketForm.value).subscribe(
        (response: any) => {
          console.log(response)
          this.getAllTickets()
        }
      )
    } else {
      this.updateTicket()
    }
  }

  getAllTickets() {
    this.ticketService.getAllTickets().subscribe(
      response => {
        this.tickets = response;
      }
    )
  }

  deleteTicket(id: number) {
    this.ticketService.deleteTicket(id).subscribe(
      response => {
        console.log(response)
      }
    )
  }

  edit(ticket: Ticket) {
    this.ticket.id = ticket.id
    this.ticketForm.patchValue({
      category: ticket.category,
      contactName: ticket.contactName,
      contactNumber: ticket.contactNumber,
      seatsCount: ticket.seatsCount,
      dateTime: ticket.dateTime,
      description: ticket.description
    })
    this.isUpdated = true;
  }


  updateTicket() {
    this.ticket.category = this.ticketForm.value.category,
    this.ticket.contactName = this.ticketForm.value.contactName,
    this.ticket.contactNumber = this.ticketForm.value.contactNumber,
    this.ticket.seatsCount = this.ticketForm.value.seatsCount,
    this.ticket.dateTime = this.ticketForm.value.dateTime,
    this.ticket.description = this.ticketForm.value.description
    this.ticketService.updateTicket(this.ticket)
      .subscribe(
        response => {
          console.log(response)
          this.getAllTickets();
          this.isUpdated = false;
        }
      )
  }

}
