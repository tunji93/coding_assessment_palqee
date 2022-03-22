import { useEffect, useState } from "react";
import StarWars from "..";
import DataTable from "./dataTable";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { client } from "pages/_app";

const Characters = ({ data }) => {
  const router = useRouter();

  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, [router.pathname]);

  return (
    <StarWars>
      <h5>Characters</h5>
      <q style={{ color: "Highlight" }}>
        {loading ? "Loading Quote..." : error ? "Error Loading Quote" : quote}
      </q>
      <div>&nbsp;</div>
      <DataTable data={data} />
    </StarWars>
  );
};

export default Characters;

export const getStaticProps = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query {
          allPeople {
            people {
              id
              name
              hairColor
              skinColor
              eyeColor
              gender
              homeworld {
                name
              }
            }
          }
        }
      `,
    });
    return {
      props: {
        data: data.allPeople.people,
      },
    };
  } catch (err) {
    console.log(err)
    return {
      redirect: {
        destination: "/",
        statusCode: 307,
      },
    };
  }
};
