import Post from "./posts/page";
import dbConnect from "@/app/lib/dbConnection";

dbConnect()
export default function Home() {
  return (
    <>
      <Post />
    </>
  )
}
1