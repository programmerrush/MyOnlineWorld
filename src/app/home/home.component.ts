import { Component, OnInit } from '@angular/core';
import { SrService } from '../sr/sr.service';
import { List } from '../sr/list';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    focus;
    focus1;

    // from here
    lists: List[];
    constructor(private sr: SrService) { }
    ngOnInit() {
        this.sr.rlist().subscribe((lists: List[])=>{
            this.lists = lists;
            // console.log(this.lists);
          })
    }
}
