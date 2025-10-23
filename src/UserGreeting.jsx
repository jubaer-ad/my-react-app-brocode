
function UserGreeting({name = "Guest", isLoggedIn = false, ...rest}) {

    return (
        <>
        <h2 className={isLoggedIn ? "logged-in" : "not-logged-in"} {...rest}>
            {isLoggedIn ? `Welcome back, ${name}` : "Please sign in."}
        </h2>
        </>
    );
}
export default UserGreeting;