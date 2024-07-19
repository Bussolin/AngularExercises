import { HttpInterceptorFn } from '@angular/common/http';
import { BasicAuthService } from '../basicAuth/basic-auth.service';
import { inject } from '@angular/core';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  let basicAuth = inject(BasicAuthService);
  let username = basicAuth.getAuthenticatedUser();
  let token = basicAuth.getToken();
  
  if( username && token){
    req = req.clone({ 
      setHeaders: { Authorization: `${token}` }
    });
  }
  return next( req );
};
