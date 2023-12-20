const fetchRepo = () => {
  const now = new Date();
  const intlNow = now.toISOString().split("T")[0];
  const date1 = process.argv[2];
  const date2 = process.argv[3];

  const dateQuery = date2
    ? `${date1}..${date2}`
    : date1
    ? `>%3D${date1}`
    : `<%3D${intlNow}`;
  const apiEndpoint = `https://api.github.com/search/repositories?q=stars:%3E1600+pushed%3A${dateQuery}&sort=stars&order=desc&per_page=10`;

  const fetchData = async () => {
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    const repos = data.items;
    repos
      .map((repo) => {
        return {
          repoName: repo.name,
          html_url: repo.html_url,
          description: repo.description,
          stargazers_count: repo.stargazers_count,
          language: repo.language,
        };
      })
      .forEach((info) => {
        console.log(info);
      });
  };

  fetchData();
};

module.exports = fetchRepo;
