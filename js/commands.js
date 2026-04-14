var twitter = "https://twitter.com/";
var linkedin = "https://www.linkedin.com/in/";
var instagram = "https://www.instagram.com/edyyzy";
var github = "https://github.com/edysojog";
var sudo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
var email = "mailto:paypaldumy@gmail.com";

let banner = [
  `<div id="banner-section" class="banner">
 Welcome to my portfolio! — Type <span class="command">help</span> for a list of supported commands.
  </div>`,
];

let aboutme = [
  "<br>",
  `<div id="aboutme-section">`,
  `<span class=’underline’>Hey, I’m Edy! 👋</span>`,
  "<br>",
  `<li>🎓 2nd year student at ASE Cybernetics and Economic Informatics, building a solid foundation in analytical thinking and digital systems.</li>`,
  `<li>💪 Hardworking and detail-driven — I don’t let go of a subject until I truly understand it.</li>`,
  `<li>🔐 Aspiring cybersecurity professional, focused on understanding systems at a deep level in order to protect them.</li>`,
  `<li>🖥️ Passionate about computers in every form — from hardware diagnostics and software optimization to side-projects and self-hosted services.</li>`,
  `<li>📂 Use the <span class="command">projects</span> command to check out what I’ve built!</li>`,
  `<li>📫 Contact: <a href="mailto:paypaldumy@gmail.com">paypaldumy@gmail.com</a></li>`,
  "</div>",
  "<br>",
];

let social = [
  "<br>",
  'github         <a href="' +
    github +
    '" target="_blank">github/edysojog</a>',
  'instagram      <a href="' +
    instagram +
    '" target="_blank">instagram/edyyzy</a>',
  "<br>",
];

let help = [
  `<br><div id="help-section"><pre class="whitespace-pre-wrap">
<span class="command">aboutme</span>
↳ Displays who I am?
<span class="command">social</span>
↳ Lists social networks.
<span class="command">projects</span>
↳ View coding projects.
<span class="command">email</span>
↳ To send me an email.
<span class="command">history</span>
↳ View command history.
<span class="command">help</span>
↳ Displays this help message.
<span class="command">sudo</span>
↳ Try it out for yourself.
<span class="command">snake</span>
↳ Run Snake Game.
<span class="command">music</span>
↳ Play/pause background music.
<span class="command">clear</span>
↳ Clear the terminal.
<span class="command">exit</span>
↳ Close the terminal tab.
</pre></div><br>`,
];
let projects = [
  "<br>",
  `<div id="projects-section">`,
  `<a href="https://github.com/cosmicwanderer7/google-clone" target="_blank"><span class='underline'>Google Search Clone</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Functional Google homepage replica using Tailwind CSS and Next.js.
Live: <a href="https://google-clone-cosmicwanderer7.vercel.app/" target="_blank">google-clone.vercel.app</a>
Built With:
- Next.js
- Tailwind CSS
- Programmable Search API
</pre>`,

  `<a href="https://github.com/cosmicwanderer7/contactform" target="_blank"><span class='underline'>Contact Form with Google Sheets</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Next.js contact form storing data to Google Sheets via API, sends confirmation emails.
Live: <a href="https://contactform-psi.vercel.app/" target="_blank">contactform-psi.vercel.app</a>
Built With:
- Next.js
- Tailwind CSS
- Google Sheets API
- IFTTT
</pre>`,

  `<a href="https://cosmicwanderer7.github.io/Terminal-Portfolio/" target="_blank"><span class='underline'>Terminal-Styled Portfolio</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
A responsive portfolio that mimics a Linux terminal interface.
Built With:
- Vanilla JS
- Tailwind CSS
- Yarn
</pre>`,

  `<a href="https://github.com/cosmicwanderer7/github-script" target="_blank"><span class='underline'>GitHub Init Script</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Bash script that automates GitHub repo creation and initial commit setup.
Built With:
- Bash
- GitHub API
</pre>`,

  `<a href="https://github.com/cosmicwanderer7/guacamole-deploy" target="_blank"><span class='underline'>Apache Guacamole on OCI</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Remote desktop gateway deployment for secure access on Oracle Cloud.
Built With:
- Apache Guacamole
- Oracle Cloud
- Linux
</pre>`,

  `<a href="https://github.com/cosmicwanderer7/mumble-deploy" target="_blank"><span class='underline'>Mumble Server on OCI</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Voice chat server deployed on cloud for low-latency communication.
Built With:
- Mumble
- Oracle Cloud
- Linux
</pre>`,
  "</div>",
  "<br>",
];
