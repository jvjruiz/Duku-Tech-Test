import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {
  //received formModel input from parent component
  @Input() formModel: any;
  sortedFormFields: any;
  myForm: FormGroup;
  formData: any;
  
  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.sortedFormFields = [];
    this.sortFormFields();
    this.addValidators();
  }

  //sorts out form fields based on groupname, then sets sortedFormFields property of this component
  sortFormFields() {
    let formFields = this.formModel.FormFields;
    let sortedFormFields = {};
    let tempFormFieldArray = [];
    formFields.forEach((field) => {
      let groupName = field.GroupName
      if(!sortedFormFields[groupName]) {
        tempFormFieldArray.push(field);
        sortedFormFields[groupName] = tempFormFieldArray;
        tempFormFieldArray = [];
      }
      else if(sortedFormFields[groupName]) {
        sortedFormFields[groupName].push(field);
      }
    })
    for(let formGroup in sortedFormFields) {
      this.sortedFormFields.push(sortedFormFields[formGroup])
    }
    this.sortedFormFields.sort((a,b) => {
      return a[0].Col > b[0].Col
    })
  }

  //generates formgroup based on possible fields in form
  createForm() {
    this.myForm = this.fb.group({
      NAME: '',
      NOTES: '',
      REQDATE: '',
      TYPE: '',
      DATERECEIVED: '',
      INSURED: '',
      REQUIRED_OF: '',
      OPPORTUNITY_Parent: '',
      REQFLEIDPK: ''
    })
  }

  //add isRequired validators to formcontrols that have a IsRequired property
  addValidators() {
    this.sortedFormFields.forEach((group) => {
      group.forEach((field) => {
        let fieldName = field.Name;
        if(field.IsRequired) {
          this.myForm.controls[fieldName].setValidators([Validators.required])
        }
      })
    })
  } 

  //where you would submit form data, for now just displays it onto the DOM
  onSubmit() {
    this.formData = this.myForm.value;
  }
}

//this component initializes the form on the html template and passes down the overlooking formgroup
//and passes down the different sub-groups to a form-field-group component which then renders the fields

