import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-testimonial',
  templateUrl: './profile-testimonial.component.html',
  styleUrls: ['./profile-testimonial.component.scss']
})
export class ProfileTestimonialComponent {
  @Input() form!: FormGroup;
}
