import {useState, useEffect} from 'react';
import RepoCard from './repoCard';
import getRepos from '../lib/repositories';

export default function RepoPage() {
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        const fetchData = async () => { 
            const repos = await getRepos(import.meta.env.GITHUB_OAUTH_TOKEN); 
            setRepos(repos);
        }
        fetchData();
    }, []);

    return (
    <>
    <div className="container mt-4 mx-auto">
        <h1 className="text-5xl font-bold text-center text-slate-100">My Projects</h1>
    </div>
    <div className="flex flex-wrap mx-0.5">
        {repos.map((repo) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-28 py-6">
                <RepoCard repo={repo}/>
            </div>
        ))}
    </div>
    </>
    );
}