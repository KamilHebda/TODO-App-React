import "./Details.scss";

function Details(props) {
  console.log(props.tasks.text);
  return (
    <div className="details__container">
      <h1>Nazwa Zadania: </h1>
      {/* <p>Szczegóły zadania: </p>
      <h3>Data wprowadzenia zadania:</h3>
      <p>2022-09-16</p>
      <h3>Data zakończenia zadania:</h3>
      <p>2022-09-30</p>
      <button>Zamknij</button> */}
    </div>
  );
}
export default Details;
