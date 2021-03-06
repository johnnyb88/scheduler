import React from "react";
import "components/DayListItem.scss";
import classNames from 'classnames';


/* props
name: String - the name of the day
spots: Number - the number of spots remaining`
selected: Boolean - true or false declaring that this day is selected
setDay: Function accepts the name of the day
*/


// ----- shows all the data for a single weekday ----- //
export default function DayListItem(props) {

  let dayClass = classNames('day-list__item', {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
 });

 const formatSpots = function() {
      switch (props.spots) {
        case 0:
          return `no spots remaining`;
          
        case 1:
          return `1 spot remaining`
          
        default:
          return `${props.spots} spots remaining`;
      }
    }

  return (
    <li data-testid="day" className={dayClass} onClick={props.setDay}>
      <h2>{props.name}</h2>
      <h3>{formatSpots()}</h3>
    </li>
  );
}



