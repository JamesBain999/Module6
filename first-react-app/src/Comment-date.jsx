function Date(props) {
  return (
    <div className="Comment-date">
      {" "}
      {/* the comment date is another aspect */}
      {props.date.toLocaleString()}
    </div>
  );
}

export default Date