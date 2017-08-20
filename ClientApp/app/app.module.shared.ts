import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { EventAppComponent } from './components/event/eventapp.component';
import { NavBarComponent } from './components/event/nav/navbar.component';
import { EventsListComponent } from './components/event/event-list.component';
import { EventThumbnailComponent } from './components/event/event-thumbnail';
import { EventService } from './components/event/shared/event.service';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        EventAppComponent,
        NavBarComponent,
        EventsListComponent,
        EventThumbnailComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'event-app', component: EventAppComponent},
            { path: '**', redirectTo: 'home' }
        ]),
        ToastrModule.forRoot()
    ],
    providers: [
        EventService
    ]
};
