export interface Message {
    id: string;
    text: string;
    timestamp: Date;
    isOwn: boolean;
    avatar?: string;
    images?: string[];
}