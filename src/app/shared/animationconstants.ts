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

export const listAnimationAddAndRemove = trigger('AnimateList', [
  transition(':enter', [  
    style({opacity: 0, transform: 'translateY(-75%)', offset: 1.0}),
    animate('1s 600ms ease-in')
  ]),

  transition(':leave', [
    animate('1.2s ease-out'), 
    style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3})  
  ]),
])
