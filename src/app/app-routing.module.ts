import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './sidenav/dashboard/dashboard.component';
import { ProjectsComponent } from './sidenav/projects/projects.component';

const routes: Routes = [
  { path: 'project', component: ProjectsComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { SidenavComponent: any }
