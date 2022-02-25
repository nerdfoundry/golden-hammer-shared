export declare namespace UserChatEventData {
  interface EmoteMeta {
    emoteId: string;
    uri: string;
  }

  interface MessageBuffer {
    // TODO: Consider UTF-8/etc extraction(s)?
    type: 'word' | 'emote' | 'uri';
    content: string;
    meta?: UserChatEventData.EmoteMeta;
  }
}

export interface UserChatEventData {
  userName: string;
  userId?: string; // Not on join/part
  messageId?: string; // Not on join/part
  roles?: string[]; // 'mod', 'sub', 'DiscordRoleName'
  messageBuffers?: UserChatEventData.MessageBuffer[];
  presence?: string | boolean; // indicates presence on a platform (ie, join|part, online|offline (as bool))
}

export interface AdministrationEventData {
  userName: string; // Target userName
  roles?: string[]; // 'mod', 'sub', 'DiscordRoleName'
  removedMessage?: string; // Message that was removed
  targetId?: string; // Depends on subCategory| Timeout=userId, Ban=userId, MessageRemoval=messageId
  duration?: number; // If a duration is associated, we store it here
}

export interface MonetizationEventData {
  sourceUserName: string;
  targetUserName?: string;
  duration?: number;
  estimatedValue?: number;
  message?: string;
}

export type EventDataTypes = AdministrationEventData | MonetizationEventData | UserChatEventData;
