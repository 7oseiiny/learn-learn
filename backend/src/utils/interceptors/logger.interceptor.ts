import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
    private readonly logger = new Logger('LoggerInterceptor');

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const method = req.method;
        const url = req.originalUrl || req.url;
        this.logger.log(`Incoming request: ${method} ${url}`);
        return next.handle().pipe(
            map((data: any) => {
                this.logger.log(`Outgoing response for: ${method} ${url}`);
                if (data && typeof data === 'object') {
                    const { pass, ...otherData } = data;
                    return { ...otherData };
                }
                return data;
            })
        );
    }
}