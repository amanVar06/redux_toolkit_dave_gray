import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { Link, useParams } from "react-router-dom";
import { selectAllPosts, selectPostsByUser } from "../posts/postsSlice";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  // const postForUser = useSelector((state) => {
  //   const allPosts = selectAllPosts(state);
  //   return allPosts.filter((post) => post.userId === Number(userId));
  //   //returned posts related to the given User
  // });

  //using new way memoized selector
  const postsForUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  // console.log(postsForUser);

  const postTitles = postsForUser.map((post, index) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
    // why the post appearing twice??
    // <li key={index}>
    //   <Link to={`/post/${post.id}`}>{post.title}</Link>
    // </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{postTitles}</ol>
    </section>
  );
};

export default UserPage;
