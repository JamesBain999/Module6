function NamePart(props) {
  return (
    // reusable component to display part of a name from the value prop
    <span className="NamePart">{props.value}</span>
  );
}

function FullName(props) {
  return (
    // composes the NamePart component to display a full name
    <div className="FullName componentBox">
      Full name: <NamePart value={props.first} />{" "}
      <NamePart value={props.middle} /> <NamePart value={props.last} />
      <p>
        These are all my pet: <NamePart value={props.pets} /></p>
    </div>
  );
}

export {FullName, NamePart}