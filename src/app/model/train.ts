export interface IStation{
    stationID: number;
    stationName: string;
    stationCode: string;
}

export class Search{
    fromStationId: number;
    toStationId: number;
    dateOfTravel: string;

    constructor(){
        this.fromStationId = 0;
        this.toStationId = 0;
        this.dateOfTravel = '';
    }
}


export class Customer {
    passengerID: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;


    constructor(){
    this.passengerID = 0;
    this.firstName = '';
    this.email = ''
    this.phone = ''
    this.password = '';
    this.lastName = '';
    }
  }

  export class LoginCustomer {
    phone: string;
    password: string;
    
    constructor(){
    this.phone = ''
    this.password = '';
    }
  }

  export interface APIResponse{
    message: string;
    result: boolean;
    data: any;
  }
  export interface IBookingPassenger {
    trainId: number
    trainName: string
    trainNo: number
    departureStationName: string
    seatNo: number
    arrivalStationName: string
    arrivalTime: string
    departureTime: string
    departureDate: string
    passengerName: string
    age: number
    bookingPassengerId: number
  }

export interface ITrain {
    trainId: number
    trainNo: number
    trainName: string
    departureStationName: string
    arrivalStationName: string
    arrivalTime: string
    departureTime: string
    totalSeats: number
    departureDate: string
    bookedSeats: number
  }

  
  