export default function Post({post}) {
    return (
        <div className="card mt-3">
            <h1 className="card-header">{post.title}</h1>
            <div className="card-body">
                {post.body}
            </div>
        </div>
    )
}