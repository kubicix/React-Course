import profilePic from './assets/r9.webp'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} />
            <h2 className='card-title'>Kubicix</h2>
            <p className='card-text'>I write code and play football for fun</p>
        </div>
    );
}

export default Card