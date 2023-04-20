import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userRating  = 0;
  maxRating = 10;
  singleModel = "On"
  startDate : Date | undefined ;
  startTime : Date | undefined;
  userSettings: UserSettings = { ...this.originalUserSettings };

  postErrorMessage= '' ;
  postError = false;
  subscriptionTypes: Observable<string[]> | undefined;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();

    this.startDate = new Date();
    this.startTime = new Date();

  }

  onHttpError(errorResponse: any) {
    console.log('error :', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.value);
    // if (form.valid) {
    //   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    //     result => console.log('success :', result),
    //     error => this.onHttpError(error)

    //   );
    // }
    // else {
    //   this.postError = true;
    //   this.postErrorMessage = "Please fix the above errors"

    // }
  }

}
