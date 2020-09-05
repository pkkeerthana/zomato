import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor{

    intercept(req:HttpRequest<any>,next:HttpHandler){
        console.log("the request is on its way");
        const header = new HttpHeaders().set('user-key','fb65f765faed30f895f332ac758a64c2');
        const modifiedReq = req.clone({headers:header});
        return next.handle(modifiedReq);
    }
}