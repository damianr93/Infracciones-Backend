import { Inject, Injectable } from '@nestjs/common';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';
import { Version } from './interfaces/versions.interface';
import { Model } from 'mongoose';

@Injectable()
export class VersionsService {
  constructor(
    @Inject('VERSION_MODEL')
    private readonly versionModel: Model<Version>,
  ) {}

  getVersion() {
    return this.versionModel.findOne().exec();
  }
}
