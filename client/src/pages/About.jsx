import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Navbar from '../components/Navbar'
const team = [
  {
    name: 'Moulya',
    role: 'Lead Developer',
    github: 'https://github.com/Moulya-Hegde',
    linkedin: 'https://www.linkedin.com/in/moulya-r-hegde-343a53259',
    image: "https://tse3.mm.bing.net/th?id=OIP.-5bB4gYcn8NnhTT2rdw2kwAAAA&pid=Api&P=0&h=180",
  },
  {
    name: 'Manu S',
    role: 'ML Engineer',
    github: ' https://github.com/Manushivuz',
    linkedin: 'https://linkedin.com/in/manushivuz',
    image: 'https://wallpapercave.com/wp/wp11287327.jpg',
  },
  {
    name: 'Jayanthan P',
    role: 'ML Engineer',
    github: 'https://github.com/jaycodes2',
    linkedin: 'https://www.linkedin.com/in/jayanthan-p-b1037a259',
    image: 'https://tse4.mm.bing.net/th?id=OIP.dLBz8qresJwek15OVBzJVAHaFj&pid=Api&P=0&h=180',
  },
  {
    name: 'Jayant',
    role: 'UI/UX Designer',
    github: 'https://github.com/jay1535',
    linkedin: 'https://www.linkedin.com/in/jayant-habbu-12713725a',
    image: 'https://tse3.mm.bing.net/th?id=OIP.ovbj39V-GhuyvJ8kOzwihgHaJQ&pid=Api&P=0&h=180',
  },
]

const About = () => {
  return (
    <> 
    <main className="bg-night-bg text-night-text min-h-screen px-6 py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-5xl font-serif font-bold text-night-heading mb-4">About Us</h1>
        <p className="text-xl font-mono text-night-muted">
          Building transparent, intelligent systems for smarter financial decisions.
        </p>
      </motion.div>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg md:text-xl text-night-muted leading-relaxed font-light"
        >
          Our mission is to create explainable and fair AI models that empower financial analysts
          with clear, trustworthy insights. We believe that technology should work hand-in-hand
          with human understanding to support ethical, effective decision-making in banking and beyond.
        </motion.p>
      </section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-night-heading font-bold mb-3">Meet the Team</h2>
          <p className="text-night-muted text-lg font-mono">
            Passionate innovators driving our vision forward.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-night-card p-8 rounded-2xl shadow-card flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full border-4 border-night-accent mb-4"
              />
              <h3 className="text-2xl font-serif text-night-heading font-bold mb-1">
                {member.name}
              </h3>
              <p className="text-night-muted text-base mb-4">{member.role}</p>
              <div className="flex gap-5">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-night-accent hover:text-night-heading transition"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-night-accent hover:text-night-heading transition"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
    </>
  )
}

export default About;
