const { Book, User } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, userId) => {
      return User.findOne({ _id: userId });
    },
  },
  Mutation: {},
};

module.exports = resolvers;
