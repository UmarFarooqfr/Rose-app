import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
childChecked:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  showOptions(e:any){
    console.log('e: ', e);
    if(e.checked){
      this.childChecked=true
    }else{
      this.childChecked=false
    }

  }

}
