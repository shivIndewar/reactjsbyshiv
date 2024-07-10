const UserFunctional = ({ name, location }) => {
  return (
    <div className="user-card top-margin">
      <div className="user-card-inner">
            <h1>{name}</h1>
            <h2>{location}</h2>
      </div>
    </div>
  );
};
export default UserFunctional;
