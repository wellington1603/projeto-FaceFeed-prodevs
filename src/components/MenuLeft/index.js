import React from "react";

import {FaUserFriends, FaStore, FaSave} from 'react-icons/fa'
import {GrGroup} from 'react-icons/gr'
import {BsPlayBtnFill, BsClockHistory, BsFlagFill, BsCalendarEvent} from 'react-icons/bs'
import { MdKeyboardArrowDown } from "react-icons/md";

export default function MenuHeader() {
  return (
    <div>
      <div className="MenuLeft">
        <div>
          <FaUserFriends color="blue" size={33} />
          <p>Amigos</p>
        </div>
        <div>
          <GrGroup color="blue" size={33} />
          <p>Grupos</p>
        </div>
        <div>
          <FaStore color="blue" size={33} />
          <p>Marketplace</p>
        </div>
        <div>
          <BsPlayBtnFill color="blue" size={33} />
          <p>Watch</p>
        </div>

        <div>
          <BsClockHistory color="blue" size={33} />
          <p>Lembranças</p>
        </div>

        <div>
          <FaSave color="blue" size={33} />
          <p>Salvos</p>
        </div>

        <div>
          <BsFlagFill color="blue" size={33} />
          <p>Páginas</p>
        </div>

        <div>
          <BsCalendarEvent color="blue" size={33} />
          <p>Eventos</p>
        </div>

        <div>
          <MdKeyboardArrowDown color="blue" size={33} />
          <p>Ver mais</p>
        </div>
      </div>
    </div>
  );
}
