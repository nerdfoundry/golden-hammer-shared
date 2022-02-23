export type EventClassifications =
  | 'Administration.Ban'
  | 'Administration.MessageRemoval'
  | 'Administration.Timeout'
  | 'Administration' // ! TODO Remove this
  | 'Monetization.Subscription'
  | 'Monetization.Tip'
  | 'Monetization' // ! TODO Remove this
  | 'PlatformSpecific'
  | 'System' // ! TODO Remove this
  | 'UserChat.Message'
  | 'UserChat.Presence'
  | 'UserChat'; // ! TODO Remove this

export interface EventClassification {
  category: EventClassifications;
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
