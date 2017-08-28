import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {
  @Input() field: any;
  @Input() parentFormGroup: any;
  
  constructor() { }

  ngOnInit() {
  }

}
