import React from "react";
import { AffairType } from "./HW2";
import s from './Affairs.module.css'
type AffairPropsType = {
  affair: AffairType; 
  deleteAffairCallback: (_id: number) => void; 
};

function Affair(props: AffairPropsType) {
  const deleteCallback = (_id: number) => {
    props.deleteAffairCallback(_id);
  };

  return (
    <div className={s.affair}>
      <span>
        {props.affair.name} (priority:{props.affair.priority})
      </span>

      <button className={s.removeBtn}
        onClick={() => {
          deleteCallback(props.affair._id);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Affair;
