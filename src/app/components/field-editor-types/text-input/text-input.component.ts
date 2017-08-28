import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() field: any;
  @Input() parentFormGroup: any;
  isHidden: boolean;
  isDisplayField: boolean;
  isDate: boolean;

  constructor() {}

  ngOnInit() {
    let dataType = this.field.DataType;
    if(dataType === 'datetime') {
      this.isDate = true;
    }
  }

}
