import "./AddPostForm.css"

export const AddPostForm = () => {
    return (
        <div id="add-post-form-container">
            <form>
                <h4>Create New Post</h4>
                <label>Post Title<input id="post-title-entry-box" type="text"></input></label>
                <input id="post-text-entry-box" type="text" placeholder="Write your post here..."></input>
                <div id="title-image-row">
                    <input type="file"></input>
                    <button type="submit">Add Post</button>
                </div> 
            </form>
        </div>
    )
}