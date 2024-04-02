import { JwtModule } from "@nestjs/jwt";
import { envs } from "src/config/envs";


export const Jwt = JwtModule.register({
    secret: envs.JWT_SECTRET,
    signOptions: { expiresIn: '8h' },
  })