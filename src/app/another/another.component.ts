import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit{
   ngOnInit() {
    alert('I am oninit')
   }
   constructor()
{
  alert('I am constructor')
}
name="sandy";
salary=22000;
jd='7/1/2023';
fruits=
[
  {name:'apple',
  price:22,
  stock:130},
  {name:'mango',
  price:27,
  stock:190},
  {name:'kiwi',
  price:29,
  stock:890}
];
}
