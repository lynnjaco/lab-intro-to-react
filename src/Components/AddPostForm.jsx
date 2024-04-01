export const AddPostForm = () => {
    return (
        <div>
            <form>
                <h4>Add Post</h4>
                <label>Post Title<input type="text"></input></label>
                <label>Post<input type="text" placeholder="Write your post here..."></input></label>
                <label>Post Image<input type="file"></input></label>
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}