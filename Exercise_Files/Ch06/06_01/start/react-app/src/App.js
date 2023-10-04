import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height="180" alt={name}></img>
    </div>
  );
}

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/shrikantpate1`)
      .then((res) => {
        if (res.ok) return res.json();
        else {
          setError("Error from server -  " + res.status);
          setLoading(true);
        }
      })
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  return (
    <GithubUser
      name={data.login}
      location={data.location}
      avatar={data.avatar_url}
    />
  );
}

export default App;
