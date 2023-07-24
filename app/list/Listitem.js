'use client'

import Link from "next/link"

export default function ListItem(props) {
    return (
        <div>
            { 
                props.result.map((a, i)=>{
                    return (
                        <div className="list-item" key={i}>
                            <Link href={'/detail/' + props.result[i]._id}>
                                <h4>{props.result[i].title}</h4>
                            </Link>
                            <Link href={'/edit/'  + props.result[i]._id}>✏️</Link>
                            <span className="list-btn" onClick={(e)=>{
                                fetch('/api/post/delete', { method: 'DELETE', body: props.result[i]._id }).then(()=>{
                                    e.target.parentElement.style.opacity = 0;
                                    setTimeout(()=>{
                                        e.target.parentElement.style.display = 'none';
                                    }, 1000)
                                })
                            }}>🗑️</span>
                            <p>1월 1일</p>
                        </div>
                    )
                })
            }
        </div>
    )
}