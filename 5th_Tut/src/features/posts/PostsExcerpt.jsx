import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { Link } from "react-router-dom";
// import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const PostsExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  // console.log(post);
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

//must see again why we did this in tut5 22:36
//this allows component to not re-render if the prop it recieves
//not changed
//nothing wrong with this solution but normaization over this is more recommended
// PostsExcerpt = React.memo(PostsExcerpt);

export default PostsExcerpt;

//Normalization
//- recommended in docs
//- no duplication of data
//- creates an id lookup

//Redux toolkit offers createEntityAdapter API
//- abstracts more logic from components
//- built-in CRUD methods
//- Automatic selector generation

//that will make our slices less complicated and easier to manage
