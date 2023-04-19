import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})


export class UserSettingFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: '',
    subscriptionType: '',
    notes: ''
  };

  userSettings: UserSettings = { ...this.originalUserSettings };
  dataService: any;

  constuctor( dataService : DataService) {

   }

  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      (      result: any) => console.log('success:', result),
      (      error: any) => console.log('error:', error)

    );
  }

}
