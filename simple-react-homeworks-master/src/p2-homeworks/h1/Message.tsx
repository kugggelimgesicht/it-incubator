
import React from "react";
import s from'./Message.module.css'
type propsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};
function Message(props: propsType) {
  return (
    <div className={s.message}>
      <div className={s.avatarCont}>
        
        <img  src={props.avatar} />
      </div>
      <div className={s.speechBubble}>
  <h4>{props.name}</h4>
  <p className={s.text}>{props.message}</p>
  <p className={s.time}>{props.time}</p>
      </div>
    </div>
  );
}

export default Message;
