import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const tipo = context.switchToHttp().getRequest().user.tipo

    console.log(tipo)
    
    if (tipo !== 'Juez') throw new ForbiddenException('No tienes permiso para acceder a este recurso.')

    return true;
  }
}
