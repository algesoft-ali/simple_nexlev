export interface IUser {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  googleId?: string;
  createdAt: Date;
  updatedAt: Date;
}
