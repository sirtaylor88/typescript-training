declare module "chats" {
    export type Chat = {
        time: string;
        message: string;
    }
    export function log(chats: Chat[]): void;
    export const chats: Chat[];
}

export default "chats";
