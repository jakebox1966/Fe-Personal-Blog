import { redirect } from "next/navigation"
import dbConnect from "@/app/lib/dbConnection";

dbConnect()
export default function Home() {
  redirect('/posts/list')
}