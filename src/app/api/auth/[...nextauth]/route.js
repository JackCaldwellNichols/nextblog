import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { connect } from "mongoose"
import User from "@/models/User"
import bcrypt from 'bcryptjs'


const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorise(credentials){
        await connect();

        try {
          const user = await User.findOne({email: credentials.email})
          if(user){
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
            if(isPasswordCorrect){
              return user
            }else{
              throw new Error("Password is incorrect.")
            }
          }
        } catch (error) {
          throw new Error(error)
        }
      }
    })
  ],
pages: {
  error:"/dashboard/login"
}
})


export {handler as GET, handler as POST}