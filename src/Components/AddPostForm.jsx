import "./AddPostForm.css"

export const AddPostForm = () => {
    return (
        <div id="add-post-form-container">
            <form>
                <h4>Add Post</h4>
                <label>Post Title<input type="text"></input></label>
                <label><input type="file"></input></label>
                <label><input id="post-text-entry-box" type="text" placeholder="Write your post here..."></input></label>
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}