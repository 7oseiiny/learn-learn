import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiSecurity } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';

export function Authenticated(...perms: string[]) {
    return applyDecorators(
        SetMetadata('perms', perms),
        UseGuards(AuthGuard),
        ApiSecurity('bearer') // swagger
    );
}