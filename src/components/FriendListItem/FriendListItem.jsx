// import css from './FriendListItem.module.css';

// const FriendListItem = ({ avatar, name, isOnline }) => {
//   return (
//     <div className={css.item}>
//       <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
//       <p className={css.name}>{name}</p>
//       <p className={css[`${isOnline ? 'online' : 'offline'}`]}>
//         {isOnline ? 'Online' : 'Offline'}
//       </p>
//     </div>
//   );
// };

// export default FriendListItem;
import React from 'react';


const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusColor = isOnline ? 'green' : 'red';

  return (
    <div className="friend-list-item">
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p style={{ color: statusColor }}>{statusText}</p>
    </div>
  );
};

export default FriendListItem;
