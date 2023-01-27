import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() control: FormControl | AbstractControl;
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() rightIcon: string;
  @Input() inputType: 'text' | 'number' | 'password' = 'text';
  @Input() rows: number = 1;
  @Output() rightButtonClicked: EventEmitter<any> = new EventEmitter();
}
