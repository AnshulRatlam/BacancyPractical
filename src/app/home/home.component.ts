import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees = [];
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.getData()
  }
  
  getData(){
    this.commonService.getProfileDetails().subscribe((response:any)=>{

        this.employees = response.slice(0,20)
        //this.employees
    })
  }
}
