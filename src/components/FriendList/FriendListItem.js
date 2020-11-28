import s from "./FriendList.module.css";

export default function FriendListItem({ friend }) {
  return (
    <li className={s.item}>
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
  );
}
