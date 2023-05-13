import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { TicketsServiceService } from '../services/tickets-service.service';
import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.css']
})


// @Pipe({  
//   name: 'myfilter',  
//   pure: false  
// })  

export class BuyTicketsComponent implements OnInit {

  tickets: Ticket[] = []
  tempTicketArray: Ticket[] = []

  filterCategory: number = -1;

  constructor(private ticketService: TicketsServiceService) { }

  ngOnInit(): void {
    if (this.filterCategory == -1) {
      this.getAllTicketsDetails()
    }
  }

  getAllTicketsDetails() {
    this.ticketService.getAllTickets().subscribe(
      response => {
        this.tickets = response;
      }
    )
  }

  filter() {
    this.ticketService.getAllTickets().subscribe(
      response => {
        this.tempTicketArray = response;
        this.tickets = []
        for (let ticket of this.tempTicketArray) {
          if (ticket.category == this.filterCategory) {
            this.tickets.push(ticket)
          }
        }
      }
    )
  }
}
