import { UserInterface } from "./UserInterface";

export interface MessageInterface {
  id: number;
  conversationIndex: number;
  user: UserInterface;
  text: string;
}
