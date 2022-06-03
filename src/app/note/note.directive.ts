import {Directive, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[note]'
})
export class NoteDirective {
  constructor(
    public viewContainer: ViewContainerRef
  ) {
  }
}
