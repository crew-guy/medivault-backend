export class CreateUserDto {
  name: string;
  rollNumber: string;
  phoneNumber?: string;
  isPrivacyOpen?: boolean;
}
