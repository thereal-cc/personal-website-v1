import axios from "axios";

const getLatestRepos = async () => {
  let res;
  try {
    res = await axios.get(
      `https://api.github.com/search/repositories?q=user:thereal-cc`
    );

    let repos = res.data.items;
    repos.filter(item => !item.archived); // Remove archived repos
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); // Sort by date (latest first)
    return repos.slice(0, 6);
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;