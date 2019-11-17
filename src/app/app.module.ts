import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalculatorComponent } from "./calculator/calculator.component";
import { TestComponent } from "./test/test.component";
import { CardPipe } from "./card.pipe";
import { PersonPipe } from "./person.pipe";
import { PersonComponent } from "./person/person.component";
import { PersonsComponent } from "./persons/persons.component";
import { DeptappComponent } from "./deptapp/deptapp.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { MathService } from "./math.service";
import { from } from "rxjs";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AnimationComponent } from "./animation/animation.component";
import { JqtestComponent } from "./jqtest/jqtest.component";
import { ServicetestComponent } from "./servicetest/servicetest.component";
import { UrlserviceService } from "./urlservice.service";
import { DirectiveTestComponent } from "./directive-test/directive-test.component";
import { BackGroundColorDirective } from "./directive-test/directives/backgroundColor.directive";
import { BetterDirective } from "./directive-test/directives/better.directive";
import { AccountserviceComponent } from "./accountservice/accountservice.component";
import { AccountComponent } from "./accountservice/account/account.component";
import { NewaccountComponent } from "./accountservice/newaccount/newaccount.component";
import { LoggingApp } from "./accountservice/loggingapp.service";
import { AccountsService } from "./accountservice/accounts.service";
import { RoutingmainComponent } from "./routingmain/routingmain.component";
import { HomeComponent } from "./routingmain/home/home.component";
import { UsersComponent } from "./routingmain/users/users.component";
import { UserComponent } from "./routingmain/users/user/user.component";
import { RserversComponent } from "./routingmain/rservers/rservers.component";
import { Routes, RouterModule } from "@angular/router";
import { EditRserverComponent } from "./routingmain/rservers/edit-rserver/edit-rserver.component";
import { RserverComponent } from "./routingmain/rservers/rserver/rserver.component";
import { RserverService } from "./routingmain/rservers/rserver/rserver.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthGuard } from "./auth-guard.service";
import { AuthService } from "./auth.service";
import { CanDeactivateGuard } from "./can-deactivate-guard.service";
import { ObservableTestComponent } from "./observable-test/observable-test.component";
import { OuserComponent } from "./observable-test/ouser/ouser.component";
import { ObservHomeComponent } from "./observable-test/observ-home/observ-home.component";
import { ObservableRoutingModule } from "./app-observe-routing.module";
import { OuserService } from "./observable-test/ouser.service";
import { FormappmainComponent } from "./formappmain/formappmain.component";
import { SimpleformComponent } from "./formappmain/simpleform/simpleform.component";
import { ReactiveformComponent } from "./formappmain/reactiveform/reactiveform.component";
import { PipetestComponent } from "./pipetest/pipetest.component";
import { HttpmainComponent } from "./httpmain/httpmain.component";
import { PosttvformComponent } from "./httpmain/posttvform/posttvform.component";
import { AuthIntercetorService } from "./httpmain/posttvform/auth-intercept.service";
import { LoggingInterceptorService } from "./httpmain/posttvform/logging-interceptor.service";
import { AuthmainComponent } from "./authmain/authmain.component";
import { AuthComponent } from "./authmain/auth/auth.component";
import { AuthheaderComponent } from "./authmain/authheader/authheader.component";
import { AuthloginComponent } from "./authmain/authlogin/authlogin.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { SuccessloggedComponent } from "./authmain/successlogged/successlogged.component";
import { AuthInterceptor } from "./authmain/auth/auth-interceptor.service";
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CalculatorComponent,
    TestComponent,
    CardPipe,
    PersonPipe,
    PersonComponent,
    PersonsComponent,
    DeptappComponent,
    ParentComponent,
    ChildComponent,
    AnimationComponent,
    JqtestComponent,
    ServicetestComponent,
    DirectiveTestComponent,
    BackGroundColorDirective,
    BetterDirective,
    AccountserviceComponent,
    AccountComponent,
    NewaccountComponent,
    RoutingmainComponent,
    HomeComponent,
    EditRserverComponent,
    UsersComponent,
    UserComponent,
    RserversComponent,
    RserverComponent,
    PageNotFoundComponent,
    ObservableTestComponent,
    OuserComponent,
    ObservHomeComponent,
    FormappmainComponent,
    SimpleformComponent,
    ReactiveformComponent,
    PipetestComponent,
    HttpmainComponent,
    PosttvformComponent,
    AuthmainComponent,
    AuthComponent,
    AuthheaderComponent,
    AuthloginComponent,
    LoadingSpinnerComponent,
    SuccessloggedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    MathService,
    RserverService,
    UrlserviceService,
    LoggingApp,
    AccountsService,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    OuserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthIntercetorService,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoggingInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
