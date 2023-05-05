import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CsrListComponent } from './viewcsrdata/csr-list/csr-list.component';
import { CsrformComponent } from './addcunsumer/csrform/csrform.component';
import { RegisterformComponent } from './usermodule/registerform/registerform.component';
import { LoginComponent } from './usermodule/login/login.component';
import { WelcomeUserComponent } from './usermodule/welcomeuser/welcomeuser.component';
import { LocationComponent } from './location/location.component';



const routes: Routes = [{path:'',component:WelcomeComponent},{path:'csrlist',component:CsrListComponent},{path:'csrform',component:CsrformComponent},{path:'updateCsr/:id',component:CsrformComponent},{path:'register',component:RegisterformComponent},{path:'login',component:LoginComponent},{path:'welcome',component:WelcomeUserComponent},{path:'logout',component:LoginComponent},{path:'loc',component:LocationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
