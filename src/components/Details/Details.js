function Details(props) {
  const { text, description, date, finishDate, id } = props.task;
  return (
    <>
      <h1>{text}</h1>
      <p>Szczegóły zadania: {description} </p>
      <h3>Data wprowadzenia zadania:</h3>
      <p>{date}</p>
      <h3>Data zakończenia zadania:</h3>
      <p>{finishDate}</p>
      <button onClick={() => props.closeDetails(id)}>Zamknij</button>
    </>
  );
}

export default Details;
