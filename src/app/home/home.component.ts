import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { TicketsServiceService } from '../services/tickets-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ticketService : TicketsServiceService) { 
  }

  tickets :Ticket[] = []

  ticket : Ticket = {
    category : 0,
    contactName :'',
    contactNumber : '',
    seatsCount : 0,
    dateTime : '',
    description : ''
  }

  ngOnInit(): void {
  }

  ticketDetailsAdd(result:any){
    this.ticket.category = result.category
    console.log(this.ticket.category)
    this.ticketService.addTicket(result).subscribe(
      (response:any)=>{
        console.log("test"+response)
        this.ticket.contactName = " "
      }
    )
  }
}
