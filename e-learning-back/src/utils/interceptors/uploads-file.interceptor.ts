// src/utils/interceptors/user-file.interceptor.ts
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

export function uploadFile() {
    return FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
            }
        })
    });
}