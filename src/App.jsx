import { useEffect, useState } from "react";
import "./App.css";
import Spinner from "./Spinner";

// about api
// api is a way to communicate with server
// api is a way to communicate with database
// api is a way to communicate with other services
// api is a way to communicate with other applications
// api is a way to communicate with other users
// api end point is a url
// api end point is a url which is used to communicate with server
// fetch is a function which is used to communicate with server

// promise is a way to handle async code

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const api = "dbaa6ccd47a9496d995be37804136254";
  const url = "https://newsapi.org/v2/top-headlines?country=in";
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": api,
    },
  };
  const getData = () => {
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json.articles);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setData(json);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((json) => {
  //     setData(json);
  //   });

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "red",
        }}
      >
        News App
      </h1>

      {loading ? null : (
        <button
          className="btn"
          onClick={() => {
            setLoading(true);
            getData();
          }}
        >
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/office/40/000000/refresh--v1.png"
            alt="refresh--v1"
          />
        </button>
      )}
      <div className="news-container">
        {loading ? (
          <Spinner />
        ) : (
          data.articles.map((item, index) => {
            return (
              <div key={index} className="news-item">
                <h2>{item.title}</h2>
                <p>
                  Published at{" "}
                  {item.publishedAt.slice(11, 19) +
                    "  " +
                    item.publishedAt.slice(0, 10)}
                </p>
                <img src={item.urlToImage} alt={item.title} />
                <p>{item.description}</p>

                <a href={item.url} target="_blank">
                  Read More
                </a>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
