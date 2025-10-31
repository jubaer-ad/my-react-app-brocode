

function Button() {
    const handleOnClick = () => {
        alert("Button clicked!");
    }

    const handleOnDoubleClick = (e) => {
        e.target.textContent = "Double Clicked!";
    }
  return (
    <>
    <button onDoubleClick={(e) => handleOnDoubleClick(e)}  className="btn-primary">
      Click Me
    </button>
    </>
  );
}
export default Button;