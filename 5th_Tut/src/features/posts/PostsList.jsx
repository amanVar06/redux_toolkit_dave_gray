// import { useSelector, useDispatch } from "react-redux";
// import {
//   selectAllPosts,
//   getPostsError,
//   getPostsStatus,
//   fetchPosts,
// } from "./postsSlice";

// import { useEffect } from "react";
// import PostsExcerpt from "./PostsExcerpt";

// const PostsList = () => {
//   const posts = useSelector(selectAllPosts);
//   const postsStatus = useSelector(getPostsStatus);
//   const error = useSelector(getPostsError);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (postsStatus === "idle") {
//       dispatch(fetchPosts());
//     }
//   }, [postsStatus, dispatch]);

//   let content;
//   if (postsStatus === "loading") {
//     content = <p>"Loading..."</p>;
//   } else if (postsStatus === "succeeded") {
//     const orderedPosts = posts
//       .slice()
//       .sort((a, b) => b.date.localeCompare(a.date));
//     content = orderedPosts.map((post, index) => (
//       <PostsExcerpt key={index} post={post} />
//     ));
//     // why the post appearing twice??
//     // console.log(orderedPosts);
//   } else if (postsStatus === "failed") {
//     content = <p>{error}</p>;
//   }

//   return <section>{content}</section>;
// };

// export default PostsList;

import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    // console.log(orderedPostIds);
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};
export default PostsList;
