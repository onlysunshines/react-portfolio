import React from 'react';

export const GitHub = ({ username }) => {
  const url = `https://github.com/users/${username}/contributions`;

  return (
    <div className="github-contributions-box">
      <h4>GitHub Contributions</h4>
      <span>Recent activity graph for @{username}</span>
      <br />
      <br />
      <iframe
        title="GitHub Contributions"
        src={url}
        style={{ width: '100%', height: '200px', border: 'none' }}
        loading="lazy"
      />
    </div>
  );
};