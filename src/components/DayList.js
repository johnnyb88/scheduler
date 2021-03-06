import React from "react";
import DayListItem from "./DayListItem";

/* PROPS
days:Array a list of day objects (each object includes an id, name, and spots)
day:String the currently selected day
setDay:Function accepts the name of the day eg. "Monday", "Tuesday" 
*/

// ----- renders list all individual day items ---- //
export default function DayList(props) {

    return (
      <ul>
        {props.days.map((day) => {
          return (
              <DayListItem
              key={day.id}
              name={day.name}
              spots={day.spots}
              selected={day.name === props.day}
              data-testid="day"
              setDay={() => {
                return props.setDay(day.name);
              }}
              />
          )
        })}
      </ul>
    );
}


