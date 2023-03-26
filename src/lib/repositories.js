import axios from "axios";

const getLatestRepos = async () => {
  let res;
  try {
    res = await axios.get(
      `https://api.github.com/search/repositories?q=user:thereal-cc`
    );

    let repos = res.data.items;
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    return repos.slice(0, 6);
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;