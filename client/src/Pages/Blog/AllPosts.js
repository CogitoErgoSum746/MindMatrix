import React, { useState, useEffect } from "react";
import { sanityClient } from "../../client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function AllPosts() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc)`
      )
      .then((data) => {
        setStories(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
    <Navbar />
      <div className="max-w-7xl px-5 mx-auto mt-20 mb-10">
        <h1 className="text-4xl lg:text-6xl mb-6 capitalize">All Blog Posts</h1>
      </div>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-10 text-left font-['Inter']">
        {stories.map((story) => (
          <Link to={`/successteps-blog/${story.slug.current}`} key={story.slug.current}>
            <article className="border border-slate-400 dark:border-slate-800 rounded-lg overflow-hidden hover:bg-gray-200 dark:hover:bg-gray-300 transition-all duration-200">
              {story.mainImage && (
                <img
                  src={story.mainImage.asset.url}
                  alt={story.mainImage.alt}
                  loading="lazy"
                  className="md:h-64 w-full object-cover"
                />
              )}

              <div className="p-4">
                <p className="text-sm mb-2">
                  By {story.name} &middot;{" "}
                  {format(new Date(story.publishedAt), "dd MMMM yyyy")}
                </p>
                <h2 className="text-2xl font-bold">{story.title}</h2>
                <p className="text-md leading-relaxed">
                  {`${story.body[0].children[0].text.substring(0, 200)}...`}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </section>

      <div className="max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end">
        <Link
          to="/"
          // className="bg-white dark:bg-slate-800 dark:hover:bg-slate-700 py-2 px-8 rounded shadow text-slate-800 dark:text-slate-400 tracking-wide hover:opacity-75 transition-all duration-200"
          className="p-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold hover:from-yellow-600 hover:to-orange-600 focus:outline-none w-full md:w-64 transition duration-300 ease-in-out transform hover:scale-105"
          >
          Back to Homepage
        </Link>
      </div>
    </>
  );
}