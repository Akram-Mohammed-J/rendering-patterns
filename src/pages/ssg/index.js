import React from "react";

const StaticJoke = ({ joke }) => {
  return (
    <div>
      <h5>
        Although you are calling the random jokes api the joke won't change at
        <br />
        all no matter how many times u reload SSG in production build
      </h5>
      <p>{joke.value}</p>
    </div>
  );
};

export default StaticJoke;

export async function getStaticProps() {
  const jokeData = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await jokeData.json();

  return {
    props: {
      joke,
    },
  };
}
