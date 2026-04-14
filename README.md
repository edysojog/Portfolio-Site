# Interactive Terminal Portfolio

A personal portfolio site styled as an interactive Linux terminal. Visit it live at **[edysojog.github.io/Portfolio-Site](https://edysojog.github.io/Portfolio-Site)**.

---

## Project Purpose & Goals

This project serves as a personal portfolio website with a unique twist — the entire interface is modelled after a Linux terminal. Instead of clicking through a traditional site, visitors interact with it by typing commands, making the experience engaging and memorable for anyone with a developer background.

**Goals:**
- Present personal information, projects, and social links in a fun, interactive way
- Showcase front-end development skills using only vanilla HTML, CSS, and JavaScript (no frameworks)
- Provide an in-browser terminal experience complete with autocomplete, command history, easter eggs, and a mini Snake game

---

## Preview

*(Screenshot coming soon — open `index.html` in a browser to see the site live)*

---

## Technology Stack & Dependencies

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Styling, themes, animations, and responsive layout |
| **Vanilla JavaScript** | All interactivity — no frameworks required |
| **Web Audio API** | Procedurally generated keyboard click sounds |
| **Font Awesome** (CDN) | Icons in the header and profile section |
| **Fantasque Sans Mono** (local font) | Terminal-style monospace font |

**External dependencies (CDN only — no `npm install` needed):**
- Font Awesome kit loaded via `https://kit.fontawesome.com`

**No build tools, bundlers, or package managers are required.** The `.gitignore` includes `/node_modules` as a precaution, but the project has no npm dependencies.

---

## Repository Structure

```
Portfolio-Site/
├── index.html          # Entry point — single-page application
├── styles.css          # All styles: layout, themes, animations, responsive
├── js/
│   ├── commands.js     # Command data: banner, aboutme, projects, social, help text
│   ├── main.js         # Core terminal logic: input handling, command dispatcher,
│   │                   #   autocomplete, history, Snake game, music player
│   ├── caret.js        # Cursor/caret positioning and typeIt() input mirroring
│   └── cursor.js       # Animated Bocchi gif cursor follower (mouse & touch)
├── assets/
│   ├── fonts/
│   │   └── fantasquesansmonoregular.woff   # Self-hosted terminal font
│   ├── bocchi.gif                          # Animated cursor-follower image
│   ├── 438198.webp                         # Default background (Cyber theme)
│   ├── Stardew Valley OST - Stardew Valley Overture.mp3  # Background music
│   └── favicon.png                        # Browser tab icon
├── .gitignore
├── licence                                 # Licence file
└── README.md
```

---

## Main Features & Functionality

### Interactive Terminal Emulator
The page presents a styled terminal window. Keystrokes are captured globally and reflected in a hidden `<input>`, with the visible display updating in real time (`caret.js` / `typeIt()`).

### Commands
Type any of the following commands and press **Enter**:

| Command | Description |
|---|---|
| `help` | List all available commands |
| `aboutme` | Who I am |
| `projects` | My projects with links and tech stack details |
| `social` | GitHub and Instagram links |
| `email` | Contact email address |
| `music` | Toggle background music (Stardew Valley Overture) |
| `snake` | Play a Snake game inside the terminal |
| `history` | View previously entered commands |
| `sudo` | Easter egg |
| `clear` | Clear terminal output |
| `exit` / `logout` / `quit` | Close the browser tab |

### Tab Autocomplete
Pressing `Tab` completes the current input to the closest matching command. When the input is empty, Tab cycles through all available commands as a ghost-text hint.

### Fuzzy Command Suggestions
Mistyped commands are matched against known commands using a **Levenshtein distance** algorithm. If a close match is found, the terminal asks *"Did you mean 'X'? (y/n)"* before executing.

### Keyboard Click Sounds
Every keypress triggers a short noise burst synthesised in real time via the **Web Audio API** — no audio files needed for this effect.

### Background Music Player
The `music` command toggles a looping MP3 (`Stardew Valley Overture`). Volume is set to 50% by default.

### Animated Cursor Follower
A small animated GIF (`bocchi.gif`) follows the mouse cursor (and touch position on mobile) around the screen with throttled touch handling for smooth performance.

### Dual Themes
Two CSS custom-property themes are defined:
- **Cyber** (default) — dark purple background with teal/cyan accents
- **Anime** — lighter palette with a cherry blossom street scene background

### Snake Game
Fully playable ASCII Snake game rendered inside the terminal using `<pre>` elements. Use arrow keys to steer, `q` or `Esc` to quit.

### Command History Navigation
Use the **Up/Down arrow keys** to cycle through previously entered commands. **Ctrl+R** triggers a reverse-search prompt.

---

## Build & Deployment

### Deployment
The site is deployed via **GitHub Pages** directly from the repository. Any push to the default branch automatically updates the live site at:

> **https://edysojog.github.io/Portfolio-Site**

No CI pipeline or build step is required — GitHub Pages serves the static files as-is.

### Local Serving Tips
Although you can open `index.html` directly as a `file://` URL, some browsers block local audio playback or fonts that way. For the best experience, serve it over HTTP:

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080

# Node.js (npx)
npx serve .
# then open the printed URL
```

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/edysojog/Portfolio-Site.git
cd Portfolio-Site

# 2. Open in browser (simplest — file:// URL)
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows

# OR serve locally for full audio/font support
python3 -m http.server 8080
# Open http://localhost:8080 in your browser

# 3. Try a command in the terminal, e.g.
#    > help
#    > aboutme
#    > snake
```

**No build step, no package manager, no dependencies to install.**

---

## Built With

- **HTML / CSS / Vanilla JavaScript** — no frameworks
- **Web Audio API** — keyboard click sounds
- **Font Awesome** — icons (CDN)
- **Fantasque Sans Mono** — terminal font (self-hosted)
