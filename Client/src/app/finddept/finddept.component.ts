import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeptserviceService } from '../deptservice.service';
import { Idept } from '../idept';

@Component({
  selector: 'app-finddept',
  templateUrl: './finddept.component.html',
  styleUrls: ['./finddept.component.css']
})
export class FinddeptComponent implements OnInit {
  deptdata:Idept={id:0,name:'',location:''}
  id:number=0
  constructor(private deptservice:DeptserviceService, private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    const tid=this.activateroute.snapshot.paramMap.get('id')
    this.id=Number(tid)
    this.deptservice.getDept(this.id).subscribe((data:Idept)=>{this.deptdata=data})
  }

}
