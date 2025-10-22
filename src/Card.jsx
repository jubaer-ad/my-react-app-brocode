import fbLogo from './assets/fbLogo.png'
function Card() {
    return (
        <>
            <div className="card">
                <img src={fbLogo} alt='Profile Pic PlaceHolder' className="card-img"></img>
                <h2 className="card-title">A N M JUBAER</h2>
                <p className='card-details'>I love open world rpgss</p></div>
        </>
    );
}

export default Card