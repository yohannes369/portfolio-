import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "yohannes yeneakal",
  },
  {
    label: "Age",
    value: "23",
  },
  {
    label: "Address",
    value: "ethiopia",
  },
  {
    label: "Email",
    value: "yohannesyeneakal1@gmail.com",
  },
  {
    label: "Contact No",
    value: "+251987294511",
  },
];

const jobSummary =
  "Hi there! I’m Yohannes Yeneakal , an intermediate-level Web  developer specializing in web and mobile app development . With 1 year of hands-on experience , I’ve built a solid foundation in modern technologies like React, Node.js, Express, React Native, Python, PHP, Tailwind CSS , and even Prompt Engineering . Beyond my technical expertise, I pride myself on strong soft skills , including clear communication and effective collaboration , making me a dependable asset to any team.  Project Experience : Developed a Student Attendance System Mobile App using React Native , designed to simplify attendance tracking for educational institutions.Built an Inventory Management System with the SERN stack (Node.js, Express, React, MYSQL) , helping businesses streamline their stock management processes.Created a Pharmacy Management System , ensuring secure and efficient operations for pharmacies with user-friendly features.I’m passionate about crafting innovative, scalable, and user-centric solutions that solve real-world problems. Whether it’s building dynamic web applications or intuitive mobile apps, I’m committed to delivering high-quality results that exceed expectations. If you’re looking for a dedicated developer to bring your ideas to life—whether it’s web development anything in between I’d love to hear from you! Feel free to reach out, and let’s discuss how I can contribute to your next exciting project. Together, we can create impactful solutions that drive success and innovation. Let’s connect and explore the possibilities!";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>full stack webdeveloper</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
