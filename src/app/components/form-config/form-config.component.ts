import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-config',
  templateUrl: './form-config.component.html',
  styleUrls: ['./form-config.component.css']
})
export class FormConfigComponent implements OnInit {
  jsonString: string;
  formModel: any;
  constructor() { }

  ngOnInit() {
  }

  //sets jsonString propert of component
  onJsonInput(jsonString) {
    this.jsonString = jsonString;
  }


  //converts jsonString to a JSON object and sets property
  //this property gets sent down to child component of form-model
  renderJson() {
    this.formModel = JSON.parse(this.jsonString).Form
  }

}

//for future use, this component can be replaced with a Service that makes a 
//call to the API and returns the correct JSON Object
