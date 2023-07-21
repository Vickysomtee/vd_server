import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { Express } from 'express';

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        { folder: 'vd_portal', resource_type: 'auto', allowed_formats: ['png', 'jpg', 'jpeg'] },
        (error, result) => {
          if (error) reject(error)
          resolve(result)
        },
      )

      toStream(file.buffer).pipe(upload);
    });
  }
}
