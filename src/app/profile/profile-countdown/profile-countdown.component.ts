import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-countdown',
  templateUrl: './profile-countdown.component.html',
  styleUrls: ['./profile-countdown.component.scss']
})
export class ProfileCountdownComponent {
  @Input() form!: FormGroup;
}
