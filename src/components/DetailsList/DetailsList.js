import Details from "../Details/Details";
import "./DetailsList.scss";

function DetailsList(props) {
  const details = props.tasks.filter((task) => task.details);
  const taskDetails = details.map((task) => (
    <Details key={task.id} task={task} closeDetails={props.closeDetails} />
  ));
  return <div className="details__container">{taskDetails}</div>;
}
export default DetailsList;
