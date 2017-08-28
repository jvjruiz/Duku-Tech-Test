import { Component, OnInit, Input } from '@angular/core';
import { OrderByPipe } from '../../pipes/order-by.pipe';

@Component({
  selector: 'form-field-group',
  templateUrl: './form-field-group.component.html',
  styleUrls: ['./form-field-group.component.css']
})
export class FormFieldGroupComponent implements OnInit {
  @Input() formFieldGroup: any;
  @Input() parentFormGroup: any;
  sortedSubCols: any;
  constructor() { }

  ngOnInit() {
    this.sortedSubCols = [];
  }

  

  getClass(field) {
    if(field.SubCol === 0 || !field.SubCol) {
      return 'col-md-12';
    }
    else {
      return 'col-md-6';
    }
  }

}

//this component uses a pipe to sort out the groups by FieldOrder
//if the field is hidden, will render a hidden component
//if the field is to be displayed and not hidden, uses a switch in template to generate the correct input box
