import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ExampleComponent } from './example/example.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SafePipe } from './safe.pipe';
import { AddDataFormComponent } from './add-data-form/add-data-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ExampleComponent,
    NotfoundComponent,
    SafePipe,
    AddDataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
