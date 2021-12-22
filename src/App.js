import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const URL = "https://course-api.com/react-tabs-project";
  // const URL = "https://course-api.com/react-tours-project";
  function fetchData() {
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  const { title, dates, duties, company } = data[value];
  return (
    <section className="App">
      <header>
        <h1>Experience</h1>
      </header>
      <div className="underline"></div>
      <div className="section-center">
        <div className="btn-container">
          {data.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={index === value ? `active-btn` : ``}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="article">
          <h3 className="title">{title}</h3>
          <h4>{company}</h4>
          <p className="dates">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index}>
                <p className="details">{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}
