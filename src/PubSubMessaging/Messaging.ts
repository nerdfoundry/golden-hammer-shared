import { type EventClassificationTypes } from './EventClassification';
import { type EventDataTypes } from './EventData';

export interface Platform {
  name: 'twitch'; // | 'discord' | 'youtube'; // Platform name, maps to which services to rely on
  eventName: String; // Original Event Name as it was received from the platform directly
  eventData: any; // Original Event Data as it was received from the platform directly
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface NormalizedMessagingEvent {
  pubSubMsgId: string;
  timestamp: number;
  platform: Platform;
  connectTarget: string; // ChannelName, Discord URI, etc?
  eventClassification: EventClassificationTypes;
  eventData: EventDataTypes;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type TargetClassMap = {
  connectTarget: string;
  eventCategories: string[];
};

export type PubSubConnectionResponse = {
  registered?: boolean;
  unregistered?: boolean;
  type: 'messaging'; //TODO: Move this into the `pubsub` property
  pubsub: PubSubMessagingInfo; // TODO: This could be many other types, we only support messaing for now
};

export type PubSubMessagingInfo = TargetClassMap & {
  platformName: Platform['name'];
};
