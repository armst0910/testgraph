import{ Component } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  master = 'ภาคเหนือ';
  word:any ;

  getparam(param) {
     this.word = param;
   }


}
