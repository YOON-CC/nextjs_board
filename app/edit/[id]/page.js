import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js"


export default async function Edit(props) {
    let db = (await connectDB).db('forum')
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})

    return (
        <div className="write">
            <h4>수정페이지</h4>
            <form action="/api/post/edit" method="POST">
                <input name="title" defaultValue={result.title} />
                <input name="content" defaultValue={result.content} />
                <input style={{display : "none"}} name="_id" defaultValue={result._id.toString()}/>
                <button type="submit">전송</button>
            </form>
        </div>
    )
} 