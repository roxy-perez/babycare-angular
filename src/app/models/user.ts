export class User {
  id?: string;
  username: string;
  email: string;
  password: string;
  Baby?: {
    id: string;
    name: string;
    birthday: string;
    communityCode: number;
  };
}
