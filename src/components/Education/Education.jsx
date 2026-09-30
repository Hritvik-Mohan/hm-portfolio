import "./Education.css";

function Education() {
  return (
    <div className="edu" id="education">
      <h2 className="tabs-heading">Education</h2>
      <div className="">
        <h2 className="edu-title">Master of Computer Applications</h2>
        <p className="edu-institute">Vellore Institute of Technology</p>
        {/* <p className="edu-uni">Mahatma Gandhi Kashi Vidyapith University</p> */}
        <p className="edu-duration">2025 - 2027 (In progress)</p>
        <p className="edu-company-desc">
          Relevant coursework: Data Structures &amp; Algorithms, Database Systems,
          Discrete Mathematical Structures, Operating Systems, Python Programming,
          Artificial Intelligence, Computer Networks, Programming in Java,
          Software Engineering, Statistics for Data Science, Big Data Analytics,
          Computer Architecture, Cyber Security, Data Mining Techniques,
          Machine Learning, and Blockchain Technologies.
        </p>
      </div>
      <div className="">
        <h2 className="edu-title">Bachelor of Computer Applications</h2>
        <p className="edu-institute">School Of Management Sciences, Varanasi</p>
        <p className="edu-uni">Mahatma Gandhi Kashi Vidyapith University</p>
        <p className="edu-duration">2019 - 2022</p>
        <p className="edu-company-desc">
          Relevant coursework: C, C++, Java, Python, Object-Oriented Programming,
          Data Structures, Algorithms, Operating Systems, Computer Networks,
          Database Management Systems, Computer Organization, Computer Architecture, Digital Electronics,
          Discrete Mathematics, Software Engineering, Web Design &amp; Web Development,
          Software Projects, Artificial Intelligence, Data Science, Cloud Computing,
          Cyber Security, and Optimization Techniques.
        </p>
      </div>
    </div>
  );
}

export default Education;
