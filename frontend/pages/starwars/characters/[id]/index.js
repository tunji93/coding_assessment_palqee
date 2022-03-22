import { client } from "pages/_app";
import { gql, useQuery } from "@apollo/client";
import StarWars from "pages/starwars";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  row-gap: 2rem;
  justify-items: center;
  margin: 2.5rem 0;

  .card {
    width: 20rem;
    border-radius: 0.125rem;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.gray};
    padding: 1rem;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const CharacterDetails = ({ id }) => {
  const router = useRouter();

  const [quote, setQuote] = useState("");
  const [loadingQ, setLoading] = useState(true);
  const [errorQ, setError] = useState(false);

  useEffect(() => {
    fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data, 'heererer')
        setQuote(data.content);

        setLoading(false);
      })
      .catch((err) => setError(true));
  }, [router.pathname]);

  const GET_FILMS = gql`
    query ($id: ID!) {
      person(id: $id) {
        id
        filmConnection {
          edges {
            node {
              id
              title
              episodeID
              director
              producers
              releaseDate
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_FILMS, {
    variables: { id },
  });

  if (loading) {
    console.log(loading);
  }
  if (error) {
    console.log(error);
  }

  return (
    <StarWars>
      <h5>Characters</h5>
      <q style={{ color: "Highlight" }}>
        {loadingQ ? "Loading Quote..." : errorQ ? "Error Loading Quote" : quote}
      </q>
      <Cards>
        {data &&
          data.person.filmConnection.edges.map((film) => (
            <div className="card" key={film.node.id}>
              <h5>Title: {film.node.title}</h5>
              <p>Episode: {film.node.episodeID}</p>
              <p>Director: {film.node.director}</p>
              <div>
                {film.node.producers.map((producer, idx) => (
                  <span key={idx}>{producer}</span>
                ))}
              </div>
              <p>{film.node.releaseDate}</p>
            </div>
          ))}
        {loading && <p>loading...</p>}
        {error && <p>Opps... Something went wrong</p>}
      </Cards>
    </StarWars>
  );
};

export default CharacterDetails;

export const getStaticPaths = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query {
          allPeople {
            people {
              id
            }
          }
        }
      `,
    });

    const paths = data.allPeople.people.map((charac) => ({
      params: {
        id: charac.id.toString(),
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    return {
      props: {
        id: params.id,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
