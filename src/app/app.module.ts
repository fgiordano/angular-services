import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';   // <-- Import declaration

import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MySecondCounterComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      // RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
