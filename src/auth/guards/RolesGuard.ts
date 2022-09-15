import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roleName = this.reflector.get<string>(
      'roleName',
      context.getHandler(),
    );
    const request = context.switchToHttp().getRequest();
    const header = request.headers;
    const token = header.authorization.replace('Bearer ', '');
    const decrypToken = this.jwtService.decode(token, {
      complete: true,
      json: true,
    });
    return true;
  }
}
