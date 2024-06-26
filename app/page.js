const API_KEY = process.env.API_KEY;
import Results from "../app/components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = res.json();

  const results = data.results;
  console.log(results);
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
