import { connectDB } from "@/util/database"
import Link from "next/link"
import ListItem from "./Listitem"

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    console.log(result[0].title)

    return (
      <div className="list-bg">
        <ListItem result={result}/>
      </div>
    )
} 