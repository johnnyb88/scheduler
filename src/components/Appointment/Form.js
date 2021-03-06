import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

/* -----
  User inputs their information, saves it and edits it.
  tracks state of two elements (current text input as string and
  selected interviewer as a number).
----- */
export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, onChangeInterviewer] = useState(props.value || null);
  const [error, setError] = useState("");

  // ----- Clears the form values ----- //
  const reset = () => {
    setName("");
    onChangeInterviewer(null);
    props.onCancel();
  }

  function validate() {
    if (!name) {
      setError("Student name cannot be blank");
      return;
    }
    if (!interviewer) {
      setError("You must choose an Interviewer");
      return;
    }
    setError("");
    props.onSave(name, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        data-testid="student-name-input"
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </form>
    <section className="appointment__validation">{error}</section>
    <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={onChangeInterviewer} />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={reset}>Cancel</Button>
      <Button confirm onClick={() => validate()}>Save</Button>
    </section>
  </section>
</main>
  )
}