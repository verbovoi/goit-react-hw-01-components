import s from "./FriendList.module.css";
import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <div className={s.container}>
      <ul className={s.friendlist}>
        {friends.map((friend) => (
          <li className={s.item} key={friend.id}>
            <div
              className={s.status}
              style={{ backgroundColor: friend.isOnline ? "green" : "tomato" }}
            ></div>
            <img
              className={s.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={s.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
