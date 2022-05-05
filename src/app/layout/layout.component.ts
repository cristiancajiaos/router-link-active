import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menuOptions: Array<any> = [
    { route: 'foo', name: 'Foo' },
    { route: 'bar', name: 'Bar' },
    { route: 'baz', name: 'Baz' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
