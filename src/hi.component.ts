import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'hi',
  template: `
  <input #hi>
  <button (click)="alertButtonPressed(hi.value)"></button>
  `
})

export class HiComponent {
  @Output() hiSender = new EventEmitter();

  alertButtonPressed(hi: string) {
    this.hiSender.emit(hi);
  }
}
