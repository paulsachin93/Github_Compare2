import React, { useState } from "react";
import DisplayTable from "./DisplayTable";

const Profile = () => {
	const [data, setData] = useState({});
	const [data2, setData2] = useState({});
  const [username, setUsername] = useState("");
  const [username2, setUsername2] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [starred, setStarred] = useState([]);

	const [starred2, setStarred2] = useState([]);
	

  const [repositories2, setRepositories2] = useState([]);
  const onChangeHandler = e => {
    setUsername(e.target.value);
  };
  const onChangeHandler2 = e => {
    setUsername2(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
	const profileJson = await profile.json();
	const profile2 = await fetch(`https://api.github.com/users/${username2}`);
	  const profileJson2 = await profile2.json();
	  const stars = await fetch(`https://api.github.com/users/${username}/starred`);
	  const starsJson = await stars.json();
	  const len1 = Object.keys(starsJson).length;
	  const stars2 = await fetch(`https://api.github.com/users/${username2}/starred`);
	  const starsJson2 = await stars2.json();
	  const len2 = Object.keys(starsJson2).length
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
	  const repoJson = await repositories.json();
	  const repositories2 = await fetch(profileJson2.repos_url);
	  const repoJson2 = await repositories2.json();

    if (profileJson) {
      setData(profileJson);
		setRepositories(repoJson);
		setStarred(len1);
	}
	if (profileJson2) {
		setData2(profileJson2);
		setRepositories2(repoJson2);
		setStarred2(len2);
	  }
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
					  />
			<input
              className="prompt"
              placeholder="search username here..."
              type="text"
              value={username2}
              onChange={onChangeHandler2}
            />
          </div>

          <button
            className="ui primary button"
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Search
          </button>
				  <DisplayTable data={data} repositories={repositories} starred={starred} data2={data2} repositories2={repositories2} starred2={starred2}/>
        </div>
      </div>
    </>
  );
};
export default Profile;