import { Post } from "./Post"
import "./Posts.css";
import { blogPosts } from "../Data/profileposts";

export const Posts = () => {
    return (
    <div id="posts-container">
        { blogPosts.map((blogPost) => <Post  post_title={blogPost.post_title} date_added={ blogPost.date_added } post={ blogPost.post } image={ blogPost.image }/>)}
    </div>
    )
}