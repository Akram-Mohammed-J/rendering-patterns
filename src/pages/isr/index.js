import React from "react";

export async function getStaticProps() {
  const data = await fetch(`https://api.chucknorris.io/jokes/random`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const joke = await data.json();
  return {
    props: {
      joke,
    },
    revalidate: 60,
  };
}

const Jokes = ({ joke }) => {
  return (
    <div>
      <h5>
        The below joke won't change for 60 seconds no matter how many times you
        reload in production build
      </h5>
      <li>{joke.value}</li>
    </div>
  );
};

export default Jokes;
