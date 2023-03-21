import { useSelector } from "react-redux";
import "../styles/profile.css";
import { Link } from "react-router-dom";
const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  return (
    <div>
      <figure>{userInfo.user?.name.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{userInfo.user?.name}!</strong>
        Welcome <strong>{userInfo.user?.email}!</strong>
      </span>
      <Link to="/updatePassword">Update Password</Link>
      <Link to="/updateProfile">Update Profile</Link>
    </div>
  );
};

export default ProfileScreen;
