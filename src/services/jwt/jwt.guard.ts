import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private excludedRoutes = [
    '/users',
    '/users/login',
    '/users/register',
    '/aws/presigned-url',
    '/infracciones/ciudadano',
    '/versions',
    '/infracciones/pago',
    '/pagos/mercadopago',
  ];

  public exclude(request: any): boolean {
    return this.excludedRoutes.some((route) => request.url.includes(route));
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    if (this.exclude(request)) {
      return true;
    }
    return super.canActivate(context);
  }
}
