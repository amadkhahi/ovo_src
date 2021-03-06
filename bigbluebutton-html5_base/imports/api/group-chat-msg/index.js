import { Meteor } from 'meteor/meteor';

const GroupChatMsg = new Mongo.Collection('group-chat-msg');
const UsersTyping = new Mongo.Collection('users-typing');

if (Meteor.isServer) {
  GroupChatMsg._ensureIndex({ meetingId: 1, chatId: 1 });
  UsersTyping._ensureIndex({ meetingId: 1, isTypingTo: 1 });
}

// As we store chat in context, skip adding to mini mongo
if (Meteor.isClient) {
  GroupChatMsg.onAdded = () => false;
}

export { GroupChatMsg, UsersTyping };
