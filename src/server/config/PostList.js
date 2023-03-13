import dummy from "./postdb.json";

export default function PostList() {
  return (
    <ul>
      {dummy.posts.map((post) => (
        <li>
          <li key={post.id}>제목: {post.title}</li>
          <li key={post.id}>상태: {post.state}</li>
        </li>
      ))}
    </ul>
  );
}
