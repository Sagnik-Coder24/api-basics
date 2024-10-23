import React, { useEffect, useState } from "react";
import axios from "axios";
import superagent from "superagent";

function Apicall() {
  const [aposts, setAPosts] = useState([]);
  const [sposts, setSPosts] = useState([]);
  const [subReddit, setSubReddit] = useState("");
  const [tmp, setTmp] = useState("");
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (subReddit !== "") {
      toggle ? getRedditByAxios() : getRedditBySuperAgent();
    }
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
      <div className="top-bar">
        <input
          type="text"
          placeholder="Enter sub-reddit here..."
          value={subReddit}
          onChange={(e) => setSubReddit(e.target.value)}
        />
        <button
          onClick={() => {
            setToggle((t) => !t);
            setTmp(subReddit);
          }}
        >
          Toggle Axios and Super-agent
        </button>
      </div>
      <h1>{`/r/${tmp} - ${toggle ? "Axios" : "Super-agent"}`}</h1>
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
