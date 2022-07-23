import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  @Input() usersList: any;
  @Output() deleteItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteItemFromArray(id:any) {
    this.deleteItem.emit(id);
  }

}
