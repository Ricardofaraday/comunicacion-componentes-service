import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HijoAComponent } from './components/hijo-a/hijo-a.component';
import { HijoBComponent } from './components/hijo-b/hijo-b.component';
import { HijoAAComponent } from './components/hijo-a/hijo-aa/hijo-aa.component';
import { HijoBbComponent } from './components/hijo-b/hijo-bb/hijo-bb.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoAComponent,
    HijoBComponent,
    HijoAAComponent,
    HijoBbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
