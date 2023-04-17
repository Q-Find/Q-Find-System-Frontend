import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { StarredComponent } from './starred/starred.component';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { SellTicketsComponent } from './sell-tickets/sell-tickets.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'settings',component:SettingsComponent},
  {path:'starred',component:StarredComponent},
  {path:'buy-tickets',component:BuyTicketsComponent},
  {path:'sell-tickets',component:SellTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
