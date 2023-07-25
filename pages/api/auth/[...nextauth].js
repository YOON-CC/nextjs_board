import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'e25346b4869d9d6bad91',
            clientSecret: '7605798f75091ea77a2c7a2ed6c8105d7699ed83',
        }),
    ],
    secret : 'qwer1234',
    adapter : MongoDBAdapter(connectDB),

};
export default NextAuth(authOptions); 