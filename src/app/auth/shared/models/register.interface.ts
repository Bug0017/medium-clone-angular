import { UserInterface } from 'src/app/shared/models/user.interface';

export interface RegisterInterface {
  user: Pick<UserInterface, 'username' | 'password' | 'email'>;
}
