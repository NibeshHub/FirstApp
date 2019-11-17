import { OnInit, Directive, ElementRef } from "@angular/core";
import { Element } from "@angular/compiler";
@Directive({
  selector: "[BackGroundColorDirective]"
})
export class BackGroundColorDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "grey";
  }
}
