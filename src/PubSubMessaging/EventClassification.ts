export const EventClassifications = [
  'Administration.Ban',
  'Administration.MessageRemoval',
  'Administration.Timeout',
  'Administration', // ! TODO Remove this
  'Monetization.Subscription',
  'Monetization.Tip',
  'Monetization', // ! TODO Remove this
  'PlatformSpecific',
  'UserChat.Message',
  'UserChat.Presence',
  'UserChat' // ! TODO Remove this
] as const;

export type EventClassificationsType = typeof EventClassifications[number];

export interface EventClassification {
  category: EventClassificationsType;
  subCategory: any;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface UserChatEventClassification extends EventClassification {
  subCategory: 'Message' | 'Presence';
}

export interface AdministrationEventClassification extends EventClassification {
  subCategory: 'Timeout' | 'Ban' | 'MessageRemoval';
}

export interface MonetizationEventClassification extends EventClassification {
  subCategory: 'Subscription' | 'Tip';
}

// ! FIXME: Remove this in favor of the `EventClassifications` above
export type EventClassificationTypes =
  | AdministrationEventClassification
  | MonetizationEventClassification
  | UserChatEventClassification;
