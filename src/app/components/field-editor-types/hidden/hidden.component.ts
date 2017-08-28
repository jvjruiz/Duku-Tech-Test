import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.css']
})
export class HiddenComponent implements OnInit {
  @Input() field: any;
  @Input() parentFormGroup: any;
  constructor() { }

  ngOnInit() {
  }

}
