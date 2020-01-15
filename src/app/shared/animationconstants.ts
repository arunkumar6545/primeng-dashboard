import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

export const fadeInOut2sec = trigger("fadeInOut", [
  state(
    "void",
    style({
      opacity: 0
    })
  ),
  transition("void <=> *", animate(1500))
]);
