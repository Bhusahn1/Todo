import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuardToken implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const cntx = GqlExecutionContext.create(context).getContext();
    if (!cntx.headers.authorization) return false;

    cntx.user = await this.validateToken(cntx.headers.authorization);
    return true;
  }

  async validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') {
      console.log;
      throw new UnauthorizedException('Not Authorize');
    }

    const token = await auth.split(' ')[1];
    try {
      return jwt.verify(token, 'demoapp');
    } catch (error) {
      throw new UnauthorizedException('Not Authorize');
    }
  }
}
