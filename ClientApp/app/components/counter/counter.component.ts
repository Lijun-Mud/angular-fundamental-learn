import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    constructor(private toastr: ToastrService) {
        
    }
    public currentCount = 0;

    public incrementCounter() {
        this.toastr.success(this.currentCount.toString());
        this.currentCount++;
    }
}
