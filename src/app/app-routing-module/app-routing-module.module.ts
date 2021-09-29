import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [], },
  { path: '**', redirectTo: '', canActivate: [], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
