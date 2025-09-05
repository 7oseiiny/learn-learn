import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from 'express';

export const CurrentUser = createParamDecorator(
    (data,context : ExecutionContext)=>{
        const request:Request = context.switchToHttp().getRequest()
        const payload =request['user']
        return payload
    }
) 