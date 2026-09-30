# Hritvik Mohan - Portfolio Website

A modern, responsive portfolio website showcasing my work as a full-stack developer. Built with React, Vite, and Bootstrap, featuring a clean design with smooth navigation and interactive project displays.

## 🚀 Live Demo

Visit the live portfolio at: [hritvik.vercel.app](https://hritvik.vercel.app/)

## 📋 Features

- **Modern Design**: Clean, minimal interface with responsive layout
- **Interactive Navigation**: Smooth routing between sections
- **Project Showcase**: Dynamic project cards with live demo links
- **Skills Display**: Categorized technical skills and expertise
- **Professional Bio**: Comprehensive about section with education and experience
- **Social Links**: Direct links to GitHub, Twitter, LinkedIn, and Behance
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **Styling**: Bootstrap 5.2.3, Bootstrap Icons, Custom CSS
- **Deployment**: Netlify (configured with `_redirects` for SPA routing)

## 🏗️ Project Structure

```
hm-portfolio/
├── public/
│   ├── _redirects          # Netlify routing configuration
│   └── vite.svg           # Favicon
├── src/
│   ├── components/
│   │   ├── About/         # Home page: bio + embeds Skills, Experience, Education
│   │   ├── Education/     # Education background (rendered inside About)
│   │   ├── Experience/    # Work experience (rendered inside About)
│   │   ├── Header/        # Navigation header
│   │   ├── ProjectCard/   # Individual project cards
│   │   ├── Projects/      # Projects showcase page
│   │   └── Skills/        # Technical skills (rendered inside About)
│   ├── App.jsx            # Main application component
│   ├── data.json          # Project data and content
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Hritvik-Mohan/hm-portfolio.git
cd hm-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📝 Customization

### Adding Projects

Projects are managed in `src/data.json`. Each project follows this structure:

```json
{
  "type": "web app",
  "stack": "ReactJS NodeJS",
  "title": "Project Name",
  "description": "Project description",
  "platform": "GitHub",
  "link": "https://github.com/username/repo",
  "deploy": "https://live-demo-url.com",
  "style": {
    "border": "2px solid #53BF9D"
  },
  "color": {
    "color": "#53BF9D"
  },
  "buttonCSS": {
    "border": "1px solid #53BF9D"
  }
}
```

### Updating Personal Information

- **Bio**: Edit `src/components/About/About.jsx`
- **Skills**: Update `src/components/Skills/Skills.jsx`
- **Social Links**: Modify `src/components/Header/Header.jsx`
- **Education**: Edit `src/components/Education/Education.jsx`
- **Experience**: Update `src/components/Experience/Experience.jsx`

### Styling

- Global styles: `src/index.css` and `src/App.css`
- Component-specific styles: Each component has its own CSS file
- Bootstrap classes and custom CSS are used throughout

## 🎨 Design Features

- **Typography**: Inter font family for clean, readable text
- **Color Scheme**: Minimal color palette with accent colors for projects
- **Icons**: Bootstrap Icons for social links and UI elements
- **Layout**: Flexbox and CSS Grid for responsive layouts
- **Animations**: Smooth transitions and hover effects

## 📱 Sections

The header nav has two pages:

1. **Home** (`/`): Bio, plus embedded Skills, Experience, and Education sub-sections
2. **Projects** (`/projects`): Interactive project showcase with live demos

## 🌐 Deployment

The live site is hosted on Vercel ([hritvik.vercel.app](https://hritvik.vercel.app/)). A `public/_redirects` file for Netlify-style SPA routing is also present in the repo — if you deploy to Netlify instead, it'll pick that up; on Vercel it's unused.

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: [Email me](mailto:hritvik5005@gmail.com?subject=Hello&body=I%20wanted%20to%20connect%20with%20you.)
- **LinkedIn**: [linkedin.com/in/hritvik-mohan-33162b131](https://www.linkedin.com/in/hritvik-mohan-33162b131/)
- **Twitter**: [@hritvik_io](https://twitter.com/hritvik_io)
- **GitHub**: [github.com/Hritvik-Mohan](https://github.com/Hritvik-Mohan)

---

⭐ Star this repository if you found it helpful!
