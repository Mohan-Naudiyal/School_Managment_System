import React from 'react';
import Navbar from './navbar';


const About = () => {
  return (
    <div>
      <Navbar/>
      <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About Our School</h1>
        <p style={styles.subtitle}>
          Welcome to our school, where we nurture young minds to grow, learn, and succeed in a dynamic and supportive environment.
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Who We Are</h2>
        <p style={styles.text}>
          Established in 1995, our school has been at the forefront of educational excellence for nearly three decades. With a commitment to holistic development, we offer a rich curriculum that blends academics, arts, sports, and community engagement.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.text}>
          To inspire every student to reach their highest potential by fostering a culture of curiosity, critical thinking, and creativity.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Vision</h2>
        <p style={styles.text}>
          To build a community of lifelong learners who are equipped with the knowledge, skills, and values to positively impact the world.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Core Values</h2>
        <ul style={styles.valuesList}>
          <li style={styles.valueItem}>Excellence in Education</li>
          <li style={styles.valueItem}>Inclusivity and Diversity</li>
          <li style={styles.valueItem}>Integrity and Respect</li>
          <li style={styles.valueItem}>Innovation and Creativity</li>
          <li style={styles.valueItem}>Community Engagement</li>
        </ul>
      </section>

      <section style={styles.teamSection}>
        <h2 style={styles.sectionTitle}>Meet Our Leadership</h2>
        <div style={styles.teamGrid}>
          {teamData.map((member) => (
            <div key={member.id} style={styles.card}>
              <img src={member.image} alt={member.name} style={styles.image} />
              <h3 style={styles.name}>{member.name}</h3>
              <p style={styles.role}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Facilities and Infrastructure</h2>
        <p style={styles.text}>
          Our campus is equipped with state-of-the-art facilities, including modern classrooms, science and computer labs, a library, sports fields, and art studios, all designed to provide a comprehensive learning experience.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Get in Touch</h2>
        <p style={styles.text}>
          We welcome you to visit our campus and learn more about our programs and philosophy. Feel free to reach out to us for any queries.
        </p>
        <p style={styles.contact}>
          📞 Phone: +123 456 7890 | ✉️ Email: info@ourschool.com
        </p>
      </section>
    </div>
    </div>
  );
};

// Updated team data
const teamData = [
  { id: 1, name: 'Dr. Emily Carter', role: 'Principal', image: 'https://images.firstpost.com/wp-content/uploads/2017/04/Akshay-Kumar-Copy.jpg?im=FitAndFill=(596,336)' },
  { id: 2, name: 'Mr. Andrew Lee', role: 'Vice Principal', image: 'https://cdn.dnaindia.com/sites/default/files/2024/12/04/2665166-image-2024-12-04t061354.614.jpg?im=FitAndFill=(1200,900)' },
  { id: 3, name: 'Ms. Sarah Johnson', role: 'Head of Science Department', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg' },
  { id: 4, name: 'Mr. Daniel Brown', role: 'Athletic Director', image: 'https://img.etimg.com/thumb/msid-92570973,width-650,height-488,imgsize-46526,resizemode-75/aditya-roy-kapur.jpg' },
];

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    backgroundColor: '#white',
    color: '#333',
    lineHeight: '1.6',
    
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    marginTop : "40px" ,
    
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1d3557',
  },
  subtitle: {
    fontSize: '1.3rem',
    color: '#457b9d',
  },
  section: {
    marginBottom: '2.5rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#1d3557',
  },
  text: {
    fontSize: '1rem',
    color: '#555',
  },
  valuesList: {
    paddingLeft: '1.5rem',
    color: '#333',
  },
  valueItem: {
    marginBottom: '0.5rem',
  },
  teamSection: {
    textAlign: 'center',
    marginTop: '3rem',
  },
  teamGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    textAlign: 'center',
    width: '200px',
  },
  image: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    marginBottom: '1rem',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  role: {
    fontSize: '1rem',
    color: '#777',
  },
  contact: {
    marginTop: '1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#1d3557',
  },
};

export default About;
