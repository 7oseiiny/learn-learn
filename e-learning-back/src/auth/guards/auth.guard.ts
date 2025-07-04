import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) { }
    async canActivate(context: ExecutionContext) {
        const request: Request = context.switchToHttp().getRequest()
        const [type, token] = request.headers.authorization?.split(' ') ?? []
        if (token && type == 'Bearer') {
            try {
                const payload: any = await this.jwtService.verifyAsync(
                    token,
                    {
                        secret: this.configService.get<string>('JWT_SECRET')
                    }
                )
                request['user'] = payload
            } catch (err) {
                throw new UnauthorizedException("invalied token")
            }
        } else {
            throw new UnauthorizedException("no token")
        }
        return true
    }
}