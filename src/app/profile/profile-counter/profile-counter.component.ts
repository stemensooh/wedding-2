import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-counter',
  templateUrl: './profile-counter.component.html',
  styleUrls: ['./profile-counter.component.scss']
})
export class ProfileCounterComponent {
  @Input() form!: FormGroup;
}
