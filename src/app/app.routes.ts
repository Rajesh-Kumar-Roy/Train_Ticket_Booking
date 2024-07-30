import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'mybooking',
        component: BookingListComponent
    },
    {
        path:'search/:fromStationId/:toStationId/:dateOfTravel',
        component: SearchComponent
    }
];
