import { type SubscriberConfig, type SubscriberArgs } from "@medusajs/medusa";
export default function handleItemsReturned({ data, container }: SubscriberArgs<Record<string, string>>): Promise<void>;
export declare const config: SubscriberConfig;
