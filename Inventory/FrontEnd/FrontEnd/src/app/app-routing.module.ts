import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateElementComponent } from './components/create-element/create-element.component';
import { ListElementsComponent } from './components/list-elements/list-elements.component';

const routes: Routes = [
  {path: "", component:ListElementsComponent},
  {path:"create-element", component:CreateElementComponent},
  {path:"edit-element", component:CreateElementComponent},
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
