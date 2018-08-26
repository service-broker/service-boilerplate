/// <reference types="node" />
import { Readable } from "stream";
export interface Message {
    header?: {
        [key: string]: any;
    };
    payload?: string | Buffer | Readable;
}
export declare function advertise(name: string, capabilities: string[], priority: number, handler: (msg: Message) => Message | Promise<Message>): Promise<void>;
export declare function request(name: string, capabilities: string[], req: Message, timeout?: number): Promise<Message>;
export declare function publish(topic: string, text: string): Promise<void>;
export declare function subscribe(topic: string, handler: (text: string) => void): Promise<void>;
export declare function status(): Promise<any>;
export declare function shutdown(): Promise<void>;
