import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerInputType } from './customer.input';
import { CustomerObjectType } from './customer.object.type';
import { CustomerService } from './customer.service';
import { OtpObjectType } from './otp.input';

@Resolver(of => CustomerObjectType)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query(returns => [CustomerObjectType])
  getCustomer() {
    return this.customerService.getCustomer();
  }

  @Mutation(returns => CustomerObjectType)
  signUp(@Args('customerInputType') customerInputType: CustomerInputType) {
    return this.customerService.signUp(customerInputType);
  }

  @Mutation(returns => CustomerObjectType)
  login(
    @Args('firstName') firstName: string,
    @Args('password') password: string,
  ) {
    return this.customerService.login(firstName, password);
  }

  @Mutation(returns => CustomerObjectType)
  updateProfile(
    @Args('customerInputType') customerInputType: CustomerInputType,
  ) {
    return this.customerService.updateProfile(customerInputType);
  }

  @Mutation(returns => CustomerObjectType)
  deleteProfile(@Args('id') id: number) {
    return this.customerService.deleteProfile(id);
  }

  @Mutation(returns => CustomerObjectType)
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
