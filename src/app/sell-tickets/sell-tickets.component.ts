import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { TicketsServiceService } from '../services/tickets-service.service';

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

  isUpdated : boolean = false

  ticket: Ticket = {
    id: -1,
    category: 0,
    contactName: '',
    contactNumber: '',
    seatsCount: 0,
    dateTime: '',
    description: ''
  }

  ngOnInit(): void {
    this.getAllTickets()
  }

  addTicketDetails() {
    if (this.ticket.id === -1) {
      this.ticketService.addTicket(this.ticket).subscribe(
        (response: any) => {
          console.log(response)
        }
      )
    } else {
      this.updateTicket(this.ticket)
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
    this.ticket = ticket;
    this.isUpdated = true;
  }


  updateTicket(ticket: Ticket) {
    this.ticketService.updateTicket(ticket)
      .subscribe(
        response => {
          console.log(response)
          this.getAllTickets();
          this.isUpdated =false;
        }
      )
  }

}
