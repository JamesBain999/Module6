import Img from "./Img"

function UserInfo(props){
    return (
        <div className="UserInfo">
        {" "}
        {/* the user info is one aspect of the comment component */}
        <Img author={props.author}/>
        {/*<div className="UserInfo-name">{props.author.name}</div> */}
        </div>
    )
}

export default UserInfo