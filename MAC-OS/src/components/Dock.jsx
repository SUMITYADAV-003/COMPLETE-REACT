import React from "react";
import "./Dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: true }));
        }}
        className="icon github">
        <img src="/doc-icons/github.svg" alt="" />{" "}
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: true }));
        }}
        className="icon pdf">
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>
      <div onClick={()=> {window.open("https://calendar.google.com/calendar/u/0/r?pli=1", "_blank")}}
      className="icon calendar">
        <img src="/doc-icons/calendar.svg" alt="calendar" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify">
        <img src="/doc-icons/spotify.svg" alt="spotify" />
      </div>

      <div  onClick={() => {
          setWindowsState((state) => ({ ...state, note: true }));
        }}
       className="icon sticky">
        <img src="/doc-icons/note.svg" alt="sticky" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, cli: true }));
        }}
        className="icon terminal">
        <img src="/doc-icons/cli.svg" alt="terminal" />
      </div>
      <div onClick={()=> {window.open("mailto:sumitkumaryadav9608700@gmail.com", "_blank")}}
      className="icon mail">
        <img src="/doc-icons/mail.svg" alt="mail" />
      </div>
      <div onClick={()=> {window.open("https://www.linkedin.com/in/sumit-kumar-360693289/", "_blank")}}
      className="icon links">
        <img src="/doc-icons/link.svg" alt="links" />
      </div>
    </footer>
  );
};

export default Dock;
