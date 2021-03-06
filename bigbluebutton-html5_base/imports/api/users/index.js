import { Meteor } from 'meteor/meteor';

const Users = new Mongo.Collection('users');
export const CurrentUser = new Mongo.Collection('current-user');

if (Meteor.isServer) {
  // types of queries for the users:
  // 1. meetingId
  // 2. meetingId, userId

  Users._ensureIndex({ meetingId: 1, userId: 1 });
}

export default Users;
