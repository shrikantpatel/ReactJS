function ProfileCard({ title, handle, image, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="logo images"></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="media-contect">
          <div className="tile is-4">{title}</div>
          <div className="subtitle is-6">{handle}</div>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
