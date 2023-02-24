export default function RepoCard({ repo }) {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-2xl m-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-slate-100">{repo.name}</div>
            <p className="text-slate-100 text-base">{repo.description}</p>
            <div className="link link-info">
                <a href={repo.html_url}>{repo.html_url}</a>
            </div>
          </div>
        </div>
    );
}