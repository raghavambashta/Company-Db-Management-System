import { Component, OnInit } from '@angular/core';
import { DeptserviceService } from '../deptservice.service';
@Component({
  selector: 'app-listdept',
  templateUrl: './listdept.component.html',
  styleUrls: ['./listdept.component.css']
})
export class ListdeptComponent implements OnInit {
  deptlist:any[]=[]
  constructor(private deptservice:DeptserviceService) { 
    this.deptservice.getDeptList().subscribe(data=>{
      this.deptlist=data
    })
  }

  ngOnInit(): void {
  }

}
