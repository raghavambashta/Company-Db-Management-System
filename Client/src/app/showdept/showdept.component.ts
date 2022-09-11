import { Component, OnInit } from '@angular/core';
import { DeptserviceService } from '../deptservice.service';

@Component({
  selector: 'app-showdept',
  templateUrl: './showdept.component.html',
  styleUrls: ['./showdept.component.css']
})
export class ShowdeptComponent implements OnInit {
  deptlist:any[]=[]

  constructor(private deptservice:DeptserviceService) {
    this.deptservice.showdeptinfo().subscribe(data=>{
      this.deptlist = data
    })
   }

  ngOnInit(): void {
  }

}