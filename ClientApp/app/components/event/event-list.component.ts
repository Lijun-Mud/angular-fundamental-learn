import { Component, OnInit } from '@angular/core';
import { EventService}  from './shared/event.service';

@Component({
    selector: 'events-list',
    templateUrl:'./event-list.component.html'
})

export class EventsListComponent implements OnInit {
    events:any[];
    constructor(private eventService: EventService) {
    }

    ngOnInit(): void {
        this.events = this.eventService.getEvents();
    }
}