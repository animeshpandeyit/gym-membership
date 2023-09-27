import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    console.log('Token from TokenInterceptor:', token);

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}

// constructor(private inject: Injector) {}
// const localToken = JSON.parse(localStorage.getItem('token'));

// intercept(
//   req: HttpRequest<any>,
//   next: HttpHandler
// ): Observable<HttpEvent<any>> {
//   let authservice = this.inject.get(AuthService);
//   let jwtToken = req.clone({
//     setHeaders: {
//       Authorization: ' Bearer ' + authservice.getUserToken(),
//     },
//   });
//   return next.handle(jwtToken);
// }
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = JSON.parse(localStorage.getItem('token'));
//     if (token && request.headers.get('skip-Authorization') === null ) {
//         request = request.clone({
//             setHeaders: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//     }
//     return next.handle(request);
// }

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '{}');
//     console.log('currentUser', currentUser);
//     if (currentUser?.token) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${currentUser.token}`,
//         },
//       });
//     }

//     return next.handle(request);
//   }
// }
// const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

// if (token) {
//   const cloned = request.clone({
//     setHeaders: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return next.handle(cloned);
// }

// return next.handle(request);
