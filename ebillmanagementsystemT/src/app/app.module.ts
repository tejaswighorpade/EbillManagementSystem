import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsrListComponent } from './viewcsrdata/csr-list/csr-list.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CsrformComponent } from './addcunsumer/csrform/csrform.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterformComponent } from './usermodule/registerform/registerform.component';
import { LoginComponent } from './usermodule/login/login.component';
import { GeneratebillComponent } from './generatebill/generatebill.component';

@NgModule({
  declarations: [
    AppComponent,
    CsrListComponent,
    WelcomeComponent,
    CsrformComponent,
    RegisterformComponent,
    LoginComponent,
    GeneratebillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
