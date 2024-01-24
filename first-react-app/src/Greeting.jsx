function Greeting({name, children}){
    return (
      <div>
        <p>Hello {name ? name : 'World'}!</p>
        <p>{children ? children : "Add some text..."}</p>
      </div>
    );
}

export default Greeting;
