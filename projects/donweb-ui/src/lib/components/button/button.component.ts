import { Component, input } from '@angular/core';

@Component({
  selector: 'donweb-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
    label = input<string>('label');
}
