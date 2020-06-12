import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ExampleComponent } from './example/example.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddDataFormComponent } from './add-data-form/add-data-form.component';


const routes: Routes = [
  {path:'',component: HomePageComponent},
  // {path:'home',component: HomePageComponent},
  {path:'examples/:id',component: ExampleComponent},
  {path:'new', component:AddDataFormComponent},
  {path:'**',component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
