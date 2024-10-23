import React, { useEffect, useState } from "react";
import axios from "axios";
import superagent from "superagent";

function Apicall() {
  const [aposts, setAPosts] = useState([]);
  const [sposts, setSPosts] = useState([]);
  const [subReddit, setSubReddit] = useState("space");
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    toggle ? getRedditByAxios() : getRedditBySuperAgent();
  }, [toggle]);

  const getRedditByAxios = () => {
    axios
      .get(`https://www.reddit.com/r/${subReddit}.json`)
      .then((response) => {
        setAPosts([]);
        setSPosts([]);
        const posts = response.data.data.children.map((obj) => obj.data);
        setAPosts(posts);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getRedditBySuperAgent = () => {
    superagent
      .get(`https://www.reddit.com/r/${subReddit}.json`)
      .then((response) => {
        setAPosts([]);
        setSPosts([]);
        const posts = response.body.data.children.map((obj) => obj.data);
        setSPosts(posts);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const p = toggle ? aposts : sposts;

  return (
    <div>
      <button onClick={() => setToggle((t) => !t)}>
        Toggle Axios and Super-agent
      </button>
      <h1>{`/r/${subReddit} - ${toggle ? "Axios" : "Super-agent"}`}</h1>
      <ul>
        {p.map((p) => (
          <li key={p.id}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              {p.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Apicall;
