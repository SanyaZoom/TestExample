import { Component, OnInit } from '@angular/core';
import { Router }            from "@angular/router";
import { Observable }        from 'rxjs/Rx';
import '../../assets/css/styles.css'

@Component({
    selector: 'first-page',
    templateUrl: './first-page.html',
})
export class FirstPageComponent implements OnInit {
    count: any = 12;
    subscription: any;

    constructor(private router: Router,){}

    ngOnInit(){
        let timer = Observable.timer(2000, 1000);
        this.subscription = timer.subscribe(t => {
            this.checkTimer();
        });
    }

    checkTimer(){
        this.count--;
        if (this.count == 0) {
            this.subscription.unsubscribe();
            this.router.navigate(['/second-page']);
        }
    }
}
