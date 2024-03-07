import { Component } from '@angular/core';

@Component({
  selector: 'app-crew',
  template: `
  <div class="Crew">
    <h3 class="Heading">Crew</h3>
<ul>
   <li>Bhrathwaj</li>
   <li>Prashanth</li>
   <li>Jasmine</li>
</ul></div>

  `,
  styles: `
   .Crew{
    border-radius: 10px;
    height: 180px;
    width: 150px;
    text-align: left;
    background-color: blue;
    color: aliceblue;
}
.Heading{
    text-align: center;
    color: yellow;

}
  `
})
export class CrewComponent {

}
