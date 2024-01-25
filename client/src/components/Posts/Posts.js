import React from "react";
import { useSelector as UseSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";



const Posts = () => {
    const posts = UseSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts)

    return (
        <>
        <h1>Posts</h1>
        <Post/>
      
        
        </>
    );
}

export default Posts;