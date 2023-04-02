export class ApiResponse {
  ok: boolean;
  status: number;
  message: {
    updatedUser: {
      id: string;
      username: string;
      email: string;
      password: string;
      Baby: {
        id: string;
        name: string;
        birthday: string;
        userId: string;
        communityCode: number;
      }
    }
  };
}
