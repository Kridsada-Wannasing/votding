import { Collection } from 'fireorm';

export interface UserEntityInterface {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  imagePath?: string;
}

@Collection()
export class UserEntity implements UserEntityInterface {
  id!: string;

  username!: string;

  firstName!: string;

  lastName!: string;

  email!: string;

  password!: string;

  imagePath?: string;
}
