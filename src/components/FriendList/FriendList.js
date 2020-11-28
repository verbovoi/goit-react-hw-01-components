import s from "./FriendList.module.css";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <div className={s.container}>
      <ul className={s.friendlist}>
        {friends.map((friend) => (
          <FriendListItem friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
