import axios from "axios";

const getLatestRepos = async (token) => {
  // console.log("data", data);
  try {
    if (token) {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:thereal-cc`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      let repos = res.data.items;
      let latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
    } else {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:thereal-cc`
      );
      let repos = res.data.items;
      let latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
    }
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;