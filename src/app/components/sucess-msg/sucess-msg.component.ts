import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sucess-msg',
  templateUrl: './sucess-msg.component.html',
  styleUrls: ['./sucess-msg.component.css'],
})
export class SucessMsgComponent {
  @Input() isSucessMsg = false;
  @Input() textMsg = '';
}
