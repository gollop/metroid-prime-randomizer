import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeedHistoryComponent } from './seed-history/seed-history.component';
import { RomGenerationComponent } from './rom-generation/rom-generation.component';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { RulesComponent } from './rules/rules.component';
import { TwoPanelMultiselectComponent } from './two-panel-multiselect/two-panel-multiselect.component';

@NgModule({
  declarations: [
    AppComponent,
    SeedHistoryComponent,
    RomGenerationComponent,
    RandomizerComponent,
    GeneralSettingsComponent,
    RulesComponent,
    TwoPanelMultiselectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
