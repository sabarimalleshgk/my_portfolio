import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "Angular.js",
    "TypeScript",
    "TailwindCSS,",
    "Html",
    "CSS",
    "Next.js"
  ];

  const backendSkills = ["Node.js", "Python",  "MongoDB", ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            I’ve built a solid foundation in front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end technologies such as Node.js, Express, and MongoDB. Through self-study and hands-on practice,
             I’ve developed a deep understanding of full-stack development principles and best practices."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Electrical and Electronics </strong> - RGM University
                  (2017-2021)
                </li>
                <li>
                  <strong>CGPA </strong> :7.1
                </li>
                <li>
                  <strong>Reason for Career Gap </strong> :preaped for competative EXAMS
                </li>
              
                <li>
                <strong>Relevant Coursework: </strong>UI/UX, Web Development, linux and unix server monitoring..
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    <strong>HANDS -ON- PRACTICE </strong>{" "}
                  </h4>
                  <p>
                    Developed and maintained portfolio, e-commerce website and renewable energy website.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Looking for intern or full time employeee{" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
