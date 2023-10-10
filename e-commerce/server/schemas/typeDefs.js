const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    bio: String
    profilePicUrl: String
    bannerUrl: String
  }

  type Product {
    _id: ID
    name: String
    price: Float
    description: String
    image: String
    category: String
    quantity: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    userById(userId: ID): User
    users: [User]
    product: Product
    productById(productId: ID): Product
    products: [Product]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      bio: String
      profilePicUrl: String
      bannerUrl: String
    ): User
    login(email: String!, password: String!): Auth
    addProduct(
      name: String!
      price: Float!
      description: String!
      image: String
      category: String
      quantity: Int
    ): Product
    updateProduct(
      name: String
      price: Float
      description: String
      image: String
      category: String
      quantity: Int
    ): Product
  }
`;

module.exports = typeDefs;
