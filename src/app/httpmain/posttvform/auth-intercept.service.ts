import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType
} from "@angular/common/http";

import { tap } from "rxjs/operators";
export class AuthIntercetorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Request is on the way.... ");
    const modifiedRequest = req.clone({
      headers: req.headers.append("Auth", "AuthKeys")
    });
    return next.handle(modifiedRequest).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log("Response Came ", event.body);
        }
      })
    );
  }
}
