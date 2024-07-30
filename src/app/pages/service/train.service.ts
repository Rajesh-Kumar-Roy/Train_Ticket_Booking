import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, Customer, LoginCustomer } from '../../model/train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  apiUrl: string = "https://freeapi.miniprojectideas.com/api/TrainApp/";
  
  
  constructor(private http: HttpClient) { }

  getAllStations(){
    return this.http.get(`${this.apiUrl}GetAllStations`);
  }

  getBookingByPassengerId(passengerId: number){
    return this.http.get<APIResponse>(`${this.apiUrl}GetBookingByPassengerId?passengerid=${passengerId}`);
  }
  
  
  getTrainSearch(from: number, to: number, date: string){
    return this.http.get(`${this.apiUrl}GetTrainsBetweenStations?departureStationId=${from}&arrivalStationId=${to}&departureDate=${date}`);

  }

  createNewCustomer(obj: Customer){
    return this.http.post<APIResponse>(`${this.apiUrl}AddUpdatePassangers`, obj);
  }

  loginCustomer(obj: LoginCustomer){
    return this.http.post<APIResponse>(`${this.apiUrl}login`, obj);
  }

  bookTrain(obj: any){
    return this.http.post<APIResponse>(`${this.apiUrl}bookTrain`, obj);
  }
}

