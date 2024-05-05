const { signToken } = require("../../../Original/server/utils/auth");
const { Book, User } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, userId) => {
      return;
    },
  },
  Mutation: {
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});

      if(!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password)

      if(!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user)

      return {token, user}
    },
    addUser: async (parent, {username, email, password}) => {
      const user = await User.create({username, email, password});
      const token = signToken(user);
      return {token, user};
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
