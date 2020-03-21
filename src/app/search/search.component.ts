import { Component, Input } from "@angular/core";

@Component({
  selector: "search",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class SearchComponent {
  @Input() name: string;
}
