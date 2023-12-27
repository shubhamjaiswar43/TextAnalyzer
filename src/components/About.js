import React from "react";

export default function About() {
  return (
    <div className="container" id="about">
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1 className="bd-title" id="content">About</h1>
        <p className="bd-lead">
          <ul>
            <li>Text Analyzer is a Web Application To Analyze And Modify Your Text</li>
            <li>You Can Change Your Text To : 
              <ul>
                <li>Uppercase</li>
                <li>Lowercase</li>
                <li>Capatalize It</li>
                <li>Remove Extra Spaces</li>
                <li>Listen It As Voice</li>
              </ul>
            </li>
          </ul>
        </p>
        <hr style={{height:'2px'}}/>
        <h2 id="team">Team</h2>
          <ul>
            <li>It is Created By Solo Work</li>
          </ul>
        <hr style={{height:'2px'}}/>
        <h2 id="history">History</h2>
          <ul>
            <li>Development Of This Website Started On 31/07/2023</li>
            <li>Published On 04/08/2023</li>
          </ul>
        <hr style={{height:'2px'}}/>
      </main>
    </div>
  );
}
