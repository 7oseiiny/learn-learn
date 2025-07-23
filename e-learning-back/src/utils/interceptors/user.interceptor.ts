import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RemovePassInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map(data => {
                // إذا كانت مصفوفة
                if (Array.isArray(data)) {
                    return data.map(item => {
                        // إذا كان Document من mongoose
                        if (item && typeof item.toObject === 'function') {
                            item = item.toObject();
                        }
                        const { pass, ...otherData } = item;
                        return otherData;
                    });
                }
                // إذا كان عنصر واحد من mongoose
                if (data && typeof data.toObject === 'function') {
                    data = data.toObject();
                }
                const { pass, ...otherData } = data || {};
                return otherData;
            })
        );
    }
}