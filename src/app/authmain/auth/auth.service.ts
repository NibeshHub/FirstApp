import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, Subject, BehaviorSubject } from "rxjs";
import { User } from "../authlogin/user.model";
export interface AuthResponse {
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered?: boolean;
}
@Injectable({ providedIn: "root" })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) {}
  signup(postData: {}) {
    console.log("Sign Up Data Came", postData);
    return this.http
      .post<AuthResponse>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEV2CNdCjhlvqr6LF6R4DM4R6nobe1sxw",
        postData
      )
      .pipe(
        catchError(this.handleError),
        tap(respData => {
          this.handleAuthentication(
            respData.email,
            respData.localId,
            respData.idToken,
            +respData.expiresIn
          );
        })
      );
  }

  login(postData: {}) {
    console.log("Log In  Data Came", postData);
    return this.http
      .post<AuthResponse>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEV2CNdCjhlvqr6LF6R4DM4R6nobe1sxw",
        postData
      )
      .pipe(
        catchError(this.handleError),
        tap(respData => {
          this.handleAuthentication(
            respData.email,
            respData.localId,
            respData.idToken,
            +respData.expiresIn
          );
        })
      );
  }
  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = "An unknown Error Occured ";
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = " Email already exists ";
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = " Email not exists ";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "Password is wrong.";
        break;
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    let expireTime = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expireTime);
    console.log("User Object bounf ", user);
    this.user.next(user);
    localStorage.setItem("userData", JSON.stringify(user));
  }
  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return;
    }
    const loadUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loadUser.token) {
      this.user.next(loadUser);
    }
  }
}
