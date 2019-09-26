import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SrService } from '../sr/sr.service';
import { List } from '../sr/list';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute,private sr: SrService) { }

  lists: List[];
  name: string;
  // info: any[];

  ngOnInit() {
      this.route.params.subscribe(params => {
      this.name = params['name']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      // console.log(params['name']);
    });

    this.sr.alist(this.name).subscribe((lists: List[])=>{
      this.lists = lists;
      // console.log(this.lists);
    });

    // this.filterData(this.lists,this.name); 
 
    // console.log(this.info); 
  }

  // filterData(list, name){
  //   // console.log(this.lists);
  //   for (let index = 0; index < list.length; index++) {
  //     // const element = array[index];
  //     if (list.amount == name) {
  //       this.info = List[index];
  //     }
      
  //   }
  // }

  

}
