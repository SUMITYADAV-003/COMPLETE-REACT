import React from 'react'
import "./Dock.scss"

const Dock = () => {
  return (
    <footer className='dock'>
      <div className='icon github'><img src="/doc-icons/github.svg" alt="" /> </div>
      <div className='icon pdf'><img src="/doc-icons/pdf.svg" alt="" /></div>
      <div className='icon calendar'><img src="/doc-icons/calendar.svg" alt="calendar" /></div>
      <div className='icon spotify'><img src="/doc-icons/spotify.svg" alt="spotify" /></div>
      <div className='icon sticky'><img src="/doc-icons/note.svg" alt="sticky" /></div>
      <div className='icon terminal'><img src="/doc-icons/cli.svg" alt="terminal" /></div>
      <div className='icon mail'><img src="/doc-icons/mail.svg" alt="mail" /></div>
      <div className='icon links'><img src="/doc-icons/link.svg" alt="links" /></div>
     
    </footer>
  )
}

export default Dock