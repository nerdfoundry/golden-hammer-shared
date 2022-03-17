import { type EventDataTypes } from './EventData';

export interface Platform {
  name: 'twitch'; // | 'discord' | 'youtube'; // Platform name, maps to which services to rely on
  eventName: string; // Original Event Name as it was received from the platform directly
  eventData: any; // Original Event Data as it was received from the platform directly
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const PossibleEventClassifications = [
  'Administration.Ban',
  'Administration.MessageRemoval',
  'Administration.Timeout',
  'Monetization.Subscription',
  'Monetization.Tip',
  'PlatformSpecific',
  'UserChat.Message',
  'UserChat.Presence'
] as const;

export type EventClassification = typeof PossibleEventClassifications[number];
export type EventClassifications = EventClassification[];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ConnectTargetClassificationsAssociation = {
  connectTarget: string; // ChannelName, Discord URI, etc?
  eventClassifications: EventClassifications;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type NormalizedMessagingEvent = {
  pubSubMsgId: string;
  timestamp: number;
  platform: Platform;
  connectTarget: string; // ChannelName, Discord URI, etc?
  eventClassification: typeof PossibleEventClassifications[number];
  eventData: EventDataTypes;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type PubSubConnectionResponse = {
  registered?: boolean;
  unregistered?: boolean;
  error?: string;
  type: 'messaging'; //TODO: Move this into the `pubsub` property
  pubsub: Omit<PubSubMessagingInfo, 'eventClassifications'> &
    Partial<Pick<PubSubMessagingInfo, 'eventClassifications'>>; // TODO: This could be many other types, we only support messaing for now
};

export type PubSubMessagingInfo = ConnectTargetClassificationsAssociation & {
  platformName: Platform['name'];
};
