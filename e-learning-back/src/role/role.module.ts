import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './role.schema';

@Module({
    controllers: [RoleController],
    providers: [RoleService],
    exports: [RoleService],
    imports: [
        MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }])
    ]
})
export class RoleModule {}
