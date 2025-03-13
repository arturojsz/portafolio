# Jonas Arturo - Portfolio Website

A modern, responsive portfolio website built with React for web developer Jonas Arturo.

## Features

- 🎨 Modern and clean design
- 🌓 Light and dark mode
- 📱 Fully responsive for all devices
- ⚡ Smooth animations and transitions
- 🔍 Project filtering by category
- 📝 Contact form with validation
- 🎯 Animated skill bars
- 🔄 Typing animation effect

## Technologies Used

- React
- CSS3 with custom properties
- SVG icons
- Intersection Observer API
- Local Storage for theme persistence

## Project Structure

```
jonas-portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
└── src/
    ├── components/
    │   ├── Navbar.js
    │   ├── Hero.js
    │   ├── About.js
    │   ├── Skills.js
    │   ├── Projects.js
    │   ├── Contact.js
    │   └── Footer.js
    ├── styles/
    │   ├── index.css
    │   ├── App.css
    │   ├── Navbar.css
    │   ├── Hero.css
    │   ├── About.css
    │   ├── Skills.css
    │   ├── Projects.css
    │   ├── Contact.css
    │   └── Footer.css
    ├── assets/
    │   └── images/
    ├── App.js
    └── index.js
```

## How to Use

1. Clone the repository
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Adding Projects

To add or modify projects, edit the `projects` array in the `Projects.js` component:

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description goes here',
    category: 'web', // Available categories: 'web', 'mobile', 'ui'
    technologies: ['React', 'Node.js', 'Other Technologies'],
    image: '/path-to-image.jpg',
    demoUrl: 'https://demo-link.com',
    codeUrl: 'https://github.com/your-repo' // Set to null if no code available
  },
  // Add more projects...
];
```

### Changing Skills

To modify skills, update the skill arrays in the `Skills.js` component:

```jsx
const frontendSkills = [
  { name: 'Skill Name', level: 90 }, // Level is a percentage (0-100)
  // Add more skills...
];
```

### Adding Images

1. Place your images in the `src/assets/images` directory
2. Import them in the relevant component:
   ```jsx
   import myImage from '../assets/images/my-image.jpg';
   ```
3. Use them in your JSX:
   ```jsx
   <img src={myImage} alt="Description" />
   ```

## Deployment

This project can be deployed to services like:

- Netlify
- Vercel
- GitHub Pages
- AWS Amplify

To build the project for production:

```
npm run build
```

## License

This project is open-source and available under the MIT License.

## Credits

Created by Jonas Arturo 