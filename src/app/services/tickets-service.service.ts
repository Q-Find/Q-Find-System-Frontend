import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketsServiceService {

  constructor(private http : HttpClient) { }

  // apiUrl = environment.production ? environment.releaseUrl : environment.debugUrl;
  apiUrl = "https://qfind20230723201455.azurewebsites.net/api";
  baseUrl = this.apiUrl + "/Tickets";

  getAllTickets():Observable<Ticket[]>{ 
    console.log(this.baseUrl);
    return this.http.get<Ticket[]>(this.baseUrl);
  }

  addTicket(ticket:Ticket):Observable<Ticket>{
    return this.http.post<Ticket>(this.baseUrl,ticket);
  }

  deleteTicket(id:number):Observable<Ticket>{
    return this.http.delete<Ticket>(this.baseUrl+'/'+id);
  }

  updateTicket(ticket:Ticket):Observable<Ticket>{
    return this.http.put<Ticket>(this.baseUrl+'/'+ticket.id,ticket);
  }
}
