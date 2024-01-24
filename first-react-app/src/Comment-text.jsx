function Text(props) {
  return (
    <div className="Comment-text">
      {" "}
      {/* the actual comment text is another aspect */}
      {props.text}
    </div>
  );
}

export default Text
