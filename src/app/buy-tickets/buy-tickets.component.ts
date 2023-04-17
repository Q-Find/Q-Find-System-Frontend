import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { TicketsServiceService } from '../services/tickets-service.service';

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.css']
})
export class BuyTicketsComponent implements OnInit {

  tickets :Ticket[] = []

  constructor(private ticketService : TicketsServiceService) { }

  ngOnInit(): void {
    this.getAllTicketsDetails()
  }

  getAllTicketsDetails(){
    this.ticketService.getAllTickets().subscribe(
      response =>{
        this.tickets=response;
      }
    )
  }
}
