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
    this.sortSubCols();
  }

  sortSubCols() {
    let tempArray = [];
    let formFieldGroup = this.formFieldGroup.sort((a,b) => {
      return a.FieldOrder > b.FieldOrder
    });
    for(let i = 0; i<formFieldGroup.length; i++) {
      if(formFieldGroup[i].SubCol === 0 || !formFieldGroup[i].SubCol) {
        tempArray.push(formFieldGroup[i])
        this.sortedSubCols.push(tempArray)
        tempArray = [];
      }
      else {
        tempArray.push(formFieldGroup[i]);
        if(formFieldGroup[i].SubCol > formFieldGroup[i+1].SubCol) {
          this.sortedSubCols.push(tempArray);
          tempArray = [];
        }
      }
    }
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
//TODO: finish sortSubCol function and make getClass have give out different classes based on
//length of sorted out field for subCol