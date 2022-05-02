<img src="https://s3-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/397/400/original/Build-With-Assembly-Logo-black.png?1619213119" width="500" />

---

# Build With Assembly Take Home Task

An interactive & fully responsive web application to search github database for users and organizations. 🚀

## 🔗 Live Demo

[Click For Live Demo](https://buildwithassembly-harshitbehl.vercel.app)

## 💻 Run Locally

Clone the project

```bash
  git clone https://github.com/harshitbehl/buildwithassembly-harshitbehl.git
```

Go to the project directory

```bash
  cd buildwithassembly-harshitbehl > cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## 🔖 Features

- Interactive sticky header with an animated github source code button & links.
- Beautiful and interactive landing page showcase with animations.
  - Network nodes live motion background.
  - Spring animated "Assembly" text on hover.
  - SVG Illustration animation on first render.
  - A delayed animated attention grabbing button, which will guide towards the task section.
  - SVG waves section divider for modern look and feel.
- Task section with background inspired from build with assembly's website.
  - Modern & attractive form design.
  - Form is interactive and change as we enter inputs.
  - Form validations & errors.
  - Select search criteria based on "Users" & "Organizations".
  - Live API data fetching status updates for "Initial", "Success", "In Progress" & "No Results Found".
- Stunning display component for rendering results.
  - Results list in a form of beatiful cards.
  - Each result card contains Avatar, Login & Button with a link to github profile.
  - Blue border card for "Users" & Green border card for "Organizations".
- Modern footer with material themed icons and text.
  - Animated links on hover.
  - Flat material & minimalistic themed icons.
- Responsive UI
  - Only supported for mobile devices at the moment.

**Note:** Most of the links are dummy links at the moment.

## 📸 Screenshots

**Landing Page & Showcase**

![Landing Page & Showcase](/assets/readmeImages/landingPage.png)

**Form Initial**

![Form Initial](/assets/readmeImages/formInitial.png)

**User Results Display**

![User Results](/assets/readmeImages/userResults.png)

**Organization Results Display**

![Organization Results](/assets/readmeImages/organizationResults.png)

**Footer**

![Footer](/assets/readmeImages/footer.png)

**Smartphone Version**

![Smartphone Version](/assets/readmeImages/phoneVersion.png)

## 📌 Tasks Performed

**Requirement Gathering & Analysis**

- Select tech stack to solve the task.
- Setup project boilerplate and install packages, libraries and dependencies.
- Create a scalable directory structure with separation of concerns.

**Design**

- Select & wireframe application layout & design, take inspiration from build with assembly website.
- Select application theme, color pallette & typography.
- Break application into components while ensuring it stays scalable.

**Development (Coding & Implementation)**

- Develop major components: header, showcase, task, footer.
- Add styling, transitions & animations to application components.
- Implement form & form validation according to possible scenarios.
- Implement redux toolkit for global state management for data to be used in other components.
- Implement react routing for easier navigation within the app.
- Add responsiveness to the user interface for smartphone breakpoints.

**Testing**

- Manual test each and every field using every possible input and values.
- Add more validations according to possible scenarios.
- Perform unit testing using jest & react testing library.

**Deployment**

- Create a final build of application.
- Deploy on vercel.

## 📄 Form Fields & Validations

- Initially "Users" value radio button will be selected by default.
- Search input field validation to check if user has entered any data before search term submission.
- If there is any error in fetching API data it will redirect to 404 page.
- If there are no results found in API response it will redirect to 404 page and status will be updated accordingly.

## 🚀 API Reference

- Get Users (GET): https://api.github.com/search/users?q=john
- Get Organizations (GET): https://api.github.com/search/users?q=facebook+type:org

## ⚙️ Tech Stack

**Development:** React, JavaScript, Redux Toolkit, React Router, Axios, Material UI

**Forms & Form Validations:** Formik, Yup

**Styling:** SASS, CSS

**Animations & Transitions:** Framer Motion, CSS Animations

**Icons:** React Icons

**Testing:** Jest, React Testing Library

**Package Manager:** NPM

**Deployment:** Vercel

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## 👨🏽‍💻 Author

- [@harshitbehl](https://github.com/harshitbehl)
