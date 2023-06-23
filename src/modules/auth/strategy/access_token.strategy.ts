import { PassportStrategy } from "@nestjs/passport";
import { JwtService } from "@nestjs/jwt";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";

import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
config()

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy) {
    constructor(
        private jwtService: JwtService,
        private configService: ConfigService,
      ) {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: configService.get<string>('JWT_SECRET'),
        });
      }

      public validate(payload: any) {
        if (!payload.id) {
          throw new UnauthorizedException();
        }
    
        return payload;
      }
}