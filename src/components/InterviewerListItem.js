import React from "react";
import "components/InterviewerListItem.scss";
import classNames from 'classnames';

/*PROPS
id:number - the id of the interviewer
name:string - the name of the interviewer
avatar:url - a url to an image of the interviewer
selected:boolean - to determine if an interview is selected or not
onChangeInterviewer:function - sets the interviewer upon selection
*/

// ----- shows all data for a single interviewer ----- //
export default function InterviewerListItem(props) {
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  return (
    <li className={interviewerClass}>
      <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
      onClick={props.onChangeInterviewer}
      />
    {props.selected && props.name}
    </li>
  );
}