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
import { AuthComponent } from "./authmain/auth/auth.component";
import { AuthloginComponent } from "./authmain/authlogin/authlogin.component";
import { PosttvformComponent } from "./httpmain/posttvform/posttvform.component";
import { SuccessloggedComponent } from "./authmain/successlogged/successlogged.component";

const appRoutes: Routes = [
  // { path: "", component: HomeComponent },

  { path: "", component: AuthComponent },
  { path: "successlogged", component: SuccessloggedComponent },
  { path: "authlogin", component: AuthloginComponent },
  { path: "authtitle", component: PosttvformComponent },

  { path: "Home", component: HomeComponent },
  // { path: "servers", component: RserversComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }]
  },

  {
    path: "servers",
    canActivate: [AuthGuard],
    component: RserversComponent,
    children: [
      {
        path: ":id/edit",
        component: EditRserverComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      { path: ":id", component: RserverComponent }
    ]
  },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/page-not-found" }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
