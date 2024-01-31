
function ProfilePicture(){
    const imageUrl='./src/assets/r9.webp';

    const handleClick=(e) => e.target.style.display="none";

    return(
        <img src={imageUrl} alt="profile-picture" className="profile-picture" onClick={(e) => handleClick(e)}/>
    );
}

export default ProfilePicture;