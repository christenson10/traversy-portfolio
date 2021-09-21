import React, { useEffect, useState } from "react";

import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-white-100 min-h-screen p-5">
      <section className="container mx-auto">
        <h1 className="text-3xl font-bold flex justify-center p-1">
          Projects.
        </h1>
        <h2 className="text-md text-gray-600 flex justify-center mb-6">
          Check out my recent projects below.
        </h2>
        <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="pl-2 block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-yellow-300">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-yellow-300 p-3">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="blank"
                    rel="nooopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-sm space-x-4 p-3">
                  {/* <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span> */}
                  <span>
                    <strong className="font-bold">Type</strong>: {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Description</strong>:{" "}
                    {project.description}
                  </span>
                  {/* <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p> */}
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
