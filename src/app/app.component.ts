import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="sandy";
  adress="purusha";
  title='aa'
  f1()
  {
    alert ('hi how are you????')
  }
  uname=new FormControl('');
  update()
  {
    this.uname.setValue("sandy");
  }
}
