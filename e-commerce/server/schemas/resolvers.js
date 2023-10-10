const { AuthenticationError } = require("apollo-server-express");
const { User, Product } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    userById: async (parent, args, context) => {
      const user = await User.findById(args.userId).select("-email");
      return user;
    },
    users: async () => {
      const users = await User.find().select("-email");
      return users;
    },
    // single product
    product: async (parent, args, context) => {
      const product = await Product.findById(args.productId);
      return product;
    },
    // product by id
    productById: async (parent, args, context) => {
      const product = await Product.findById(args.productId);
      return product;
    },
    // all products
    products: async () => {
      const products = await Product.find();
      return products;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    addProduct: async (parent, args, context) => {
      if (context.user) {
        const product = await Product.create({
          ...args,
          // This is where we'll add the user's ID to the product
          user: context.user._id,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { products: product._id } },
          { new: true }
        );

        return product;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateProduct: async (parent, args, context) => {
      if (context.user) {
        return await Product.findByIdAndUpdate(args.productId, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
