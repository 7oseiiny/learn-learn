import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RoleService } from 'src/role/role.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly roleService: RoleService,
        private readonly reflector: Reflector,
    ) { }

    async canActivate(context: ExecutionContext) {
        const request: Request = context.switchToHttp().getRequest();
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        if (token && type == 'Bearer') {
            try {
                const payload: any = await this.jwtService.verifyAsync(
                    token,
                    {
                        secret: this.configService.get<string>('JWT_SECRET')
                    }
                );
                request['user'] = payload;

                // roles check 
                const requiredRoles = this.reflector.get<string[]>('perms', context.getHandler());
                if (requiredRoles && requiredRoles.length > 0) {
                    const userRole = await this.roleService.getRoleById(payload.role)
                    const hasRole = requiredRoles.some(role => userRole.permissions.includes(role));
                    if (!hasRole) {
                        throw new ForbiddenException('You do not have the required permission');
                    }
                }
            } catch (err) {
                if (err instanceof UnauthorizedException || err instanceof ForbiddenException) throw err;
                throw new UnauthorizedException("invalid token");
            }
        } else {
            throw new UnauthorizedException("no token");
        }
        return true;
    }
}