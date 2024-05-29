import React from "react";

const Posts = ({ posts = [] }) => {
  return (
    <div>
      <h5>
        This page is render on the server and pushed to client only for
        Hydration
      </h5>
      <ul>
        {posts.map((post, key) => {
          return <li key={"index" + key}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from an API or perform any async operation
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/posts"
  );

  const posts = await data.json();

  // Return the data as props
  return {
    props: {
      posts,
    },
  };
}
export default Posts;
