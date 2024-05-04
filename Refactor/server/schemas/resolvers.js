const { Book, User } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, userId) => {
      return;
    },
  },
  Mutation: {
    login: async (parent, args) => {},
    addUser: async (parent, args) => {
      return User.create();
    },
    saveBook: async (parent, { userId, savedBook }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { savedBook: savedBook } },
        { new: true }
      );
    },
    removeBook: async (parent, { userId, savedBook }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedBook: savedBook } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
