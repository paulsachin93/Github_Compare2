// author Sachin Paul
import React from "react";

const DisplayTable = ({ data, repositories, starred, data2, repositories2, starred2}) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Avatar</th>
                  <th>Location</th>
                  <th>Starred</th>
          <th>Followers</th>
          <th>Bio</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>
            {!data.avatar_url ? (
              " "
            ) : (
              <img
                className="ui small circular image"
                src={data.avatar_url}
                alt={data.avatar_url}
              />
            )}
          </td>
                  <td>{data.location}</td>
                  <td>{starred}</td>
                <td>{data.followers}</td>
          <td>{data.bio}</td>
          <td>
            {repositories.map(repo => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </td>
			  </tr>
			  <tr>
          <td>{data2.name}</td>
          <td>
            {!data2.avatar_url ? (
              " "
            ) : (
              <img
                className="ui small circular image"
                src={data2.avatar_url}
                alt={data2.avatar_url}
              />
            )}
          </td>
                  <td>{data2.location}</td>
                  <td>{starred2}</td>
                  <td>{data2.followers}</td>
          <td>{data2.bio}</td>
          <td>
            {repositories2.map(repo => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;
