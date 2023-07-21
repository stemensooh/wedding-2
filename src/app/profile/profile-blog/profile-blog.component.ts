import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-blog',
  templateUrl: './profile-blog.component.html',
  styleUrls: ['./profile-blog.component.scss']
})
export class ProfileBlogComponent {
  @Input() form!: FormGroup;
}
