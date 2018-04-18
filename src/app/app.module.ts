import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainService } from './main.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule

  ],
  providers: [
		MainService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
