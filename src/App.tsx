import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/homepage'
import AboutPage from './pages/aboutpage'
import ExperiencesPage from './pages/experiencespage'
import SkillsPage from './pages/skillspage'
import ProjectsPage from './pages/projectspage'

import './App.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/experiencias" element={<ExperiencesPage />} />
        <Route path="/habilidades" element={<SkillsPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
      </Routes>
  )
}

export default App
