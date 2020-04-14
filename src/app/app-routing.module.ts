import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "form",
    loadChildren: () => import("./form/form.module").then((m) => m.FormModule),
  },
  {
    path: "success",
    loadChildren: () =>
      import("./custom/custom.module").then((m) => m.CustomModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
