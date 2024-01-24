import UserInfo from "./Userinfo";
import Text from "./Comment-text";
import Date from "./Comment-date"

function ComposedComment(props) {
  return (
    <div className="Comment componentBox">
      <UserInfo author={props.author}/>
      <Text text={props.text}/>
      <Date date={props.date}/>
    </div>
  );
}

export default ComposedComment;