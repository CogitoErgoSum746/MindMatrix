import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { sanityClient } from "../../client";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import Navbar from "../../components/Navbar";
// import Profile from "../components/Profile";

export default function SinglePost() {
  const [blogpost, setBlogpost] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
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
      }`
      )
      .then((data) => {
        setBlogpost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    document.title = `Reading | ${blogpost.title}`;
  }, [blogpost.title]);

  return (
    <>
    <Navbar />
      {blogpost && (
        <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-12 xl:px-24 max-w-6xl mx-auto text-left">
          {blogpost.mainImage && (
            <img
              src={blogpost.mainImage.asset.url}
              alt={blogpost.mainImage.alt}
              className="h-auto w-full object-cover rounded-lg shadow"
            />
          )}
          <h1 className="text-4xl my-8 xl:text-4xl font-bold font-">{blogpost.title}</h1>
          <p className="font-bold text-sm mb-8">
            By {blogpost.name}{" "}
            {blogpost.publishedAt && (
              <>
                &middot;{" "}
                {format(new Date(blogpost.publishedAt), "dd MMMM yyyy")}
              </>
            )}
          </p>
          <div className="text-left text-lg leading-relaxed">
          <PortableText value={blogpost.body} />
          </div>
          
          <div className="max-w-7xl mx-auto px-5 mb-20 mt-10 flex items-end justify-end">
          <Link
              to="/facilitator"
              // className="bg-white dark:bg-slate-800 dark:hover:bg-slate-700 py-2 px-8 rounded shadow text-slate-800 dark:text-slate-400 tracking-wide hover:opacity-75 transition-all duration-200"
              className="p-2 mx-2 text-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold hover:from-yellow-600 hover:to-orange-600 focus:outline-none w-full md:w-48 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Author's Profile
            </Link>
            <Link
              to="/successteps-blog"
              // className="bg-white dark:bg-slate-800 dark:hover:bg-slate-700 py-2 px-8 rounded shadow text-slate-800 dark:text-slate-400 tracking-wide hover:opacity-75 transition-all duration-200"
              className="p-2 text-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold hover:from-yellow-600 hover:to-orange-600 focus:outline-none w-full md:w-48 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Read More Blog posts
            </Link>
          </div>

          {/* <Profile /> */}
        </section>
      )}
    </>
  );
}