import './FancyBox.css'

function FancyBox(props) {
  return (
    <div className={"FancyBox FancyBox-" + props.color}>
      <span>I love being fancy</span>
      {props.children}{" "}
      {/* everything in between the opening <FancyBox> and closing </FancyBox> tags */}
    </div>
  );
}

function Callout(props) {
  return (
    <FancyBox color="blue">
      <h1 className="Callout-title">{props.title}</h1>
      <p className="Callout-message">{props.message}</p>
      <p>I am so damn fancy</p>
      {props.children}{" "}
      {/* everything in between the opening <Callout> and closing </Callout> tags */}
    </FancyBox>
  );
}

export { Callout, FancyBox };
