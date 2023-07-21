import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-when-n-where',
  templateUrl: './profile-when-n-where.component.html',
  styleUrls: ['./profile-when-n-where.component.scss']
})
export class ProfileWhenNWhereComponent {
  @Input() form!: FormGroup;
}
