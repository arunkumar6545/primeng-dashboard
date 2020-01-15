import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from "./demo/view/dashboard.component";

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'globalfeed',
    loadChildren: //'./module/globalfeed/globalfeed.module#GlobalfeedModule'
    () => import('./module/globalfeed/globalfeed.module').then(m=> m.GlobalfeedModule)
  }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
