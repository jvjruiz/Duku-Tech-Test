import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() field: any;
  @Input() parentFormGroup: any;

  public options = [
    { value: 'option 1', display: 'Option 1' },
    { value: 'option 2', display: 'Option 2' },
    { value: 'option 3', display: 'Option 3' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
