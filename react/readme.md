## YouQuest - React Edition

### Setup

The project's dependencies should all be setup via the Node `package.json` file so there should be no need to install anything other than Node/NPM. The application is setup to use `http://localhost:8098/#/` but if that port is already in use, you can change it in `/config/index.js` by setting `dev.port` to a new value.

To install the project run:

> _npm install_

And then:

> _npm run dev_

Running the project will _not_ automatically open the browser, so you'll need to open the URL in the browser yourself. The app has been tested in the latest versions of:

* Chrome
* Firefox
* Opera

It doesn't work in `Microsoft Edge` and I haven't yet had the chance to find out what the problem is yet.

### Dependencies

There are many dependencies used throughout the project (all of which can be identified via the `package.json` file), however, there are a few primary libraries used throughout the code:

* `Redux` - Application state-management
* `Styletron` - Atomic CSS-in-JS library for styling components.
* `React Router` - URL routing library

### Project Structure

The project is structured as follows:

> - `/build` - _WebPack build configuration_
> - `/config` - _Configuration settings for dev (no production setup yet)_
> - `/node_modules` - _..._
> - `/src` - _The project's source_
>   - `/assets` - _Static assets (fonts, global CSS, etc)_
>   - `/elements` - _Common UI components (i.e. buttons, form elements, panels, etc...). These components are largely composed of `Styletron` CSS-in-JS elements_
>   - `/store` - _`Redux` store files_
>   - `/utils` - _Utility files_
>   - `/views` - _Application view components_
>      - `/blah` - _A nonsense component for demonstrating layered windows._
>      - `/pages` - _Page components used with `React Router`_
>      - `/quests` - _Components related to user's character quests (currently only includes 'habit'-type quests_
>      - `/widgets` - _Floating 'widget' components containing primary user interaction and navigation access_
>      - `/app.jsx` - _The root application component (basically just a shell for other components)_
>      - `/index.js` - _The entry point for the application. Includes setup for 3rd-party dependencies like `Redux`, `Styletron`, and `React Router`, as well as the main `ReactDOM.render(...)` invocation_

### Functionality

At present, YouQuest does... well, not much. 

It is intended to be a type of Role Playing Game which is based upon your real-life actions and experiences. You will be able to:
* Perform and track quests
* Grow your experience and level your character (self) up
* Interact with other players/users
* Receive rewards and gain achievements
* Chat globally and with other players
* Etc...

For now though, it doesn't do any of that. Currently, you can open the _Habits_ window and, subsequently, the _Create Habit_ window (_Habits_ are one of the forms of quests you will be able to perform). The _actual_ habits in the app, presently, are simple fake data and the _Create Habit_ form doesn't yet actually _save_. 

The windows are stackable and draggable - so you can open a window and re-locate it within the main screen by dragging on the title and, if you have more than one window open at a time, you can bring a background window to the front by clicking on it. 

It should also be noted that, with the exception of the drag-and-drop functionality, every UI component is custom-made for this project. There are no 3rd party component libraries used in YouQuest. The project is, after-all, meant to be a playground/hobby project for learning React. That is to say that all of the following components are built-from-scratch:

* Layers (modal and windows)
* Form elements (buttons, text inputs, radio lists, drop-down boxes, on-off-switches, etc...)
* Structural UI elements (panels, control strips, tool bars, etc...)

Lastly, the background image carousel is just an incomplete experiment, feel free to ignore it (or, if you prefer, disable it in `/src/index.js` by commenting lines `19` - `21`)