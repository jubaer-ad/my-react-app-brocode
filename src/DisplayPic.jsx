

function DisplayPic() {
    let show = true;
    const handleClick = (e) => {
        show = !show;
        e.target.style.border = show ? "5px solid green" : "5px solid red";
        console.log(show);
    }
  return (
    <div>
      <img onClick={(e) => handleClick(e)}
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="Display Pic"
        style={{ width: "200px", borderRadius: "50%" }}
      />
    </div>
  );
}

export default DisplayPic;