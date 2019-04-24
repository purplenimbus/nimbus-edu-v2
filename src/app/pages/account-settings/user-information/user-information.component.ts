import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../account-settings.component';

@Component({
  selector: 'ngx-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit {
	@Input() user: User;

	saving: boolean = false;
	userInformationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
  	this.buildForm();
  }

  private buildForm() {
    this.userInformationForm = this.formBuilder.group({
      firstName: [{value:this.user.firstname || '',disabled:true}, Validators.required],
      middleName: [{value:this.user.middlename || '',disabled:true}],
      lastName: [{value:this.user.lastname || '',disabled:true}, Validators.required],
      email: [{value:this.user.email || '',disabled:true}, Validators.required],
    });
  }
}
