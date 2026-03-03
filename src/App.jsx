import "./App.css";
import Projects from './components/Projects'

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Daniel Figueroa</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#studies">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>


      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Daniel</h1>
        <p>Full-Stack Developer | Data Engineer | Problem Solver</p>
        <a href="#projects" className="btn">View My Work</a>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p className="about_des">
          I’m a Full Stack Developer driven by a passion for AI development and research. As a Data Engineer, I specialize in designing scalable data pipelines and building systems that turn complex datasets into actionable insights. I’m deeply enthusiastic about data science and enjoy working at the intersection of backend systems, analytics, and intelligent applications. My goal is to leverage data and AI to create innovative, high-impact solutions.
        </p>
      </section>

      {/* Some Edication */}
      <section id="studies" className="section">
        <h2>Education</h2>
        <div className="institutions">
          <h3 className="left_align">University of Utah</h3>
          <p className="about_des">MS in Computer Science. Developed end-to-end data pipelines and preprocessing frameworks, engineered database systems for efficient ML workflow management, and applied scalable machine learning techniques to large-scale datasets.</p>
          {/* <a className='left_align' href='some'>View Thesis</a> */}
        </div>
        <div className="institutions">
          <h3 className="left_align">Universidad Industrial de Santander </h3>
          <p className="about_des">BS in Mathematics. Conducted in-depth research on Turing patterns, applying finite element methods to simulate and analyze instability patterns, enhancing expertise in numerical modeling and research methodology.</p>
          <a className='left_align' href='https://drive.google.com/file/d/1AYGrhW4SZsFghysnwzasLcK2zXVaZm5B/view?usp=sharing'>View Thesis</a>
        </div>
        <div className="institutions">
          <h3 className="left_align">Universidad Autonoma de Bucaramanga</h3>
          <p className="about_des">BS in Energy Engineering. Engineered a pre-cleaning data filter integrated with a mathematical model for neural network training, significantly advancing knowledge in artificial neural networks, data preprocessing, and computational thermodynamics.</p>
          <a className='left_align' href='https://drive.google.com/file/d/1l_qUGzdkHndsWEunqKl2s95HCuF_FSH8/view?usp=sharing'>View Thesis</a>
        </div>
      </section>

      <Projects />
      
      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: danie033@hotmail.com</p>
          <a href='https://www.linkedin.com/in/daniel-figueroa-machinelearning/'>
          Linkedin</a> 

          <a href='https://github.com/danie033?tab=repositories'>
          GitHub</a> 
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Daniel Figueroa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;