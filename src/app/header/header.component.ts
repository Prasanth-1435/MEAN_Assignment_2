import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="Header">
    <h1>Angular Mission Program</h1>
    <h3>Mission Name: {{missionName}}</h3>
    <h3>Technology: {{techName}}</h3></div>
  `,
  styles: `
     .Header{
       text-align:center;
       color: green;

  
     }
  `
})
export class HeaderComponent {
  missionName : string="Angular Program";
  techName: string="Angular4";
}
