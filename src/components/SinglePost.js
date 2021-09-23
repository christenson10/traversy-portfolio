import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
// import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

export default function Post() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": author->name,
        "authorImage": author->image
      }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="bg-white-100 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-yellow-300 rounded-lg">
        <header className="relative">
          <div className="absolute w-full flex items-center justify-start p-4">
            <div className="bg-yellow-300 bg-opacity-80 rounded px-2 py-2">
              <h1 className="text-center font-bold text-3md lg:text-xl">{singlePost.title}</h1>
              {/* <div className="flex justify-center text-black">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                />
                <p className="flex items-center pl-2 text-xl">
                  {singlePost.name}
                  </p>
              </div> */}
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-12 lg:px-16 py-6 lg:py-10 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="yfjejyjc"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
