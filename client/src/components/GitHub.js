import React, { useState } from 'react';

export const GitHub = ({ username, fallbackImg }) => {
  const [hasError, setHasError] = useState(false);

  const contributionsUrl = `https://github.com/users/${username}/contributions`;

  return (
    <div className="github-contributions-box">
      <h4>GitHub Contributions</h4>
      {hasError ? (
        <img
          src={fallbackImg}
          alt="Fallback GitHub contributions"
          style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
        />
      ) : (
        <img
          src={contributionsUrl}
          alt={`${username} GitHub contributions`}
          style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};