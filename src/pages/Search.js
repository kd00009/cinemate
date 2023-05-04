import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data, loading, error } = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ data.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          { data.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  );
};
