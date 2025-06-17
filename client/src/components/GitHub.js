import React from "react";

const GitHubContributions = ({ onlysunshines }) => {
  const url = `https://github.com/users/${onlysunshines}/contributions`;

  return (
    <div className="w-full overflow-auto bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-semibold mb-4">GitHub Contributions</h2>
      <iframe
        title="GitHub Contributions"
        src={url}
        style={{ width: "100%", height: "200px", border: "none" }}
        loading="lazy"
      />
    </div>
  );
};

export default GitHubContributions;