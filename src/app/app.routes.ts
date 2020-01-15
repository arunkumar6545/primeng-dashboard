import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from "./demo/view/dashboard.component";

export const routes: Routes = [
  { path: "", component: DashboardComponent },
  {
    path: "globalfeed",
    loadChildren: () =>
      import("./module/globalfeed/globalfeed.module").then(
        m => m.GlobalfeedModule
      )
  },
  { path: "**", component: DashboardComponent },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
