

function Button(){
    const styles = {
        background_color: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        border_radius: "5px",
        border: "none",
        cursor: "pointer"
    }
    return (<button style={styles}>Click Me!</button>);
}
export default Button;