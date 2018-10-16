import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material';
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { IconComponent } from './icon/icon.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkoutComponent } from './workout/workout.component';
import { SettingsComponent } from './settings/settings.component';
import { BodyprofileComponent } from './bodyprofile/bodyprofile.component';


const appRoutes: Routes = [
	{ path: 'dashboard', component: DashboardComponent},
	{ path: 'recovery', component: RecoveryComponent},
	{ path: 'workout', component: WorkoutComponent},
	{ path: 'settings', component: SettingsComponent},
	{ path: 'settings/bodyprofile', component: BodyprofileComponent},
	{ path: '', component: DashboardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    IconComponent,
    RecoveryComponent,
    DashboardComponent,
    WorkoutComponent,
    SettingsComponent,
    BodyprofileComponent
  ],
  imports: [
    BrowserModule,
		MatIconModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
