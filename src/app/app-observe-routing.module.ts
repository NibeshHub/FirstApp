import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./routingmain/home/home.component";

import { RserversComponent } from "./routingmain/rservers/rservers.component";

import { UsersComponent } from "./routingmain/users/users.component";

import { UserComponent } from "./routingmain/users/user/user.component";

import { EditRserverComponent } from "./routingmain/rservers/edit-rserver/edit-rserver.component";

import { RserverComponent } from "./routingmain/rservers/rserver/rserver.component";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./can-deactivate-guard.service";
import { ObservHomeComponent } from "./observable-test/observ-home/observ-home.component";
import { OuserComponent } from "./observable-test/ouser/ouser.component";

const appRoutes: Routes = [
  { path: "", component: ObservHomeComponent },
  { path: "ouser", component: OuserComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule {}
