import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DeptserviceService } from '../deptservice.service';
import { Idept } from '../idept';
@Component({
  selector: 'app-adddept',
  templateUrl: './adddept.component.html',
  styleUrls: ['./adddept.component.css']
})
export class AdddeptComponent implements OnInit {
  deptdata:Idept = {id:0,name:'',location:''}
  saveDept(dept:Idept){
    this.deptdata=dept
    this.deptservice.addDept(this.deptdata).subscribe(
    ()=>{
      alert('Record Saved')
      this.router.navigate(['/list'])
    })
  }
  constructor(private deptservice:DeptserviceService, private router:Router) { }

  ngOnInit(): void {
    
  }

}
