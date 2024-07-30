import { Component, inject, OnInit } from '@angular/core';
import { APIResponse, Customer, IBookingPassenger } from '../../model/train';
import { TrainService } from '../service/train.service';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent implements OnInit {
  bookingList: IBookingPassenger[] = [];
  logedUserData: Customer = new Customer();
  trainService = inject(TrainService);
  
  constructor(){
    const localData = localStorage.getItem('trainApp');
    if(localData != null){
      this.logedUserData = JSON.parse(localData);
    }
  }
  ngOnInit(): void {
    this.trainService.getBookingByPassengerId(this.logedUserData.passengerID).subscribe((res: APIResponse)=>{
      this.bookingList = res.data as IBookingPassenger[];
    })
  }

}
