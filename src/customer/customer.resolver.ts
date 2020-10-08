import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport/dist';
import { AuthGuardToken } from './auth.guard';
import { CustomerInputType } from './customer.input';
import { CustomerObjectType } from './customer.object.type';
import { CustomerService } from './customer.service';
import { OtpObjectType } from './otp.input';
import { TokenObjectType } from './token.object.type';

@Resolver(of => CustomerObjectType)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {
    const Auth = new AuthGuardToken();
  }

  @Query(returns => [CustomerObjectType])
  @UseGuards(new AuthGuardToken())
  getCustomer(@Args('id') id: number) {
    return this.customerService.getCustomer(id);
  }

  @Mutation(returns => CustomerObjectType)
  signUp(@Args('customerInputType') customerInputType: CustomerInputType) {
    return this.customerService.signUp(customerInputType);
  }

  @Mutation(returns => TokenObjectType)
  login(
    @Args('firstName') firstName: string,
    @Args('password') password: string,
  ): Promise<{ token: string }> {
    console.log('.........', firstName, password);
    return this.customerService.login(firstName, password);
  }

  @Mutation(returns => CustomerObjectType)
  @UseGuards(new AuthGuardToken())
  updateProfile(
    @Args('customerInputType') customerInputType: CustomerInputType,
  ) {
    return this.customerService.updateProfile(customerInputType);
  }

  @Mutation(returns => CustomerObjectType)
  @UseGuards(new AuthGuardToken())
  deleteProfile(@Args('id') id: number) {
    return this.customerService.deleteProfile(id);
  }

  @Mutation(returns => CustomerObjectType)
  @UseGuards(new AuthGuardToken())
  updatePassword(@Args('id') id: number, @Args('password') password: string) {
    return this.customerService.updatePassword(id, password);
  }

  @Mutation(returns => OtpObjectType)
  generateOtp(@Args('firstName') firstName: string) {
    return this.customerService.generateOtp(firstName);
  }

  // @Mutation(returns => OtpObjectType)
  // generateOtp(@Args('otpInputType') otpInputType: OtpInputType) {
  //   return this.customerService.generateOtp(otpInputType);
  // }

  @Mutation(returns => CustomerObjectType)
  forgetPassword(
    @Args('firstName') firstName: string,
    @Args('otp') otp: number,
    @Args('password') password: string,
  ) {
    return this.customerService.forgetPassword(firstName, otp, password);
  }
}
