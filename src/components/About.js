import React, { useEffect, useState } from "react";
import SanityClient from "../client.js";
import mountainsphoto from "../black-and-white-mountain-photo-l.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(SanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
    )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main>
      <img src={mountainsphoto} alt="Mountains" className="absolute object-cover w-full h-full" />
      <div className="p-6 items-center justify-center h-screen lg:pt-12 container mx-auto relative">
        <section className="bg-yellow-300 bg-opacity-90 rounded-lg shadow-2xl lg:flex p-6 pb-0">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-60 lg:h-60 mr-5"
            alt={author.name}
          />
          <div className="max-w-screen-2xl text-lg flex flex-col justify-center">
            <h1 className="pt-4 text-5xl text-black font-bold mt-0">
              Hi, I'm {""}
              <span className="text-black">
                {author.name}.
              </span>
            </h1>
            <div className="p-1 text-black prose lg:prose-lg">
              <BlockContent
                blocks={author.bio}
                projectId="yfjejyjc"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
