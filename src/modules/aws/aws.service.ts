import { Injectable } from '@nestjs/common';
import { CreateAwDto } from './dto/create-aw.dto';
import { UpdateAwDto } from './dto/update-aw.dto';
import { envs } from "src/config/envs";
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class AwsService {
  private s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      region: envs.AWS_REGION,
      credentials: {
        accessKeyId: envs.AWS_ACCESS_KEY_ID,
        secretAccessKey: envs.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async generatePresignedUrl(filename: string) {
    const params = {
      Bucket: 'infracciones-app',
      Key: filename,
    };
    const command = new PutObjectCommand(params);
    return await getSignedUrl(this.s3Client, command, { expiresIn: 60 * 5 });
  }
}
