import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { Express } from 'express';
import { resolve } from 'path';
import { rejects } from 'assert';

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        { public_id: file.originalname },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      console.log(upload)

      toStream(file.buffer).pipe(upload);
    });
  }

  async getImage(file: Express.Multer.File): Promise<string> {
    const url = v2.url(file.originalname, {
        width: 100,
        height: 150,
        Crop: 'fill'
      });
    return url;
  }
}
