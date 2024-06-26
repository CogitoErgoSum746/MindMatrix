import React, { useState, useEffect } from "react";
// import Profile from "../components/Profile";
import { sanityClient } from "../client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import aptpurple from "../images/aptpurple.png";

export default function Homepage() {
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

    useEffect(() => {
        document.title = "Dr Antony's Blog";
    }, []);

    return (
        <>
            {!stories ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    {stories[0] && (
                        <Link to={`/successteps-blog/${stories[0].slug.current}`}>
                            <section className="max-w-7xl mx-auto my-20 px-5 text-left">
                                <article className="relative">
                                    {stories[0].mainImage && (
                                        // <img
                                        //   src={stories[0].mainImage.asset.url}
                                        //   alt={stories[0].mainImage.alt}
                                        //   className="h-96 w-full object-cover rounded-2xl"
                                        // />
                                        <img
                                            src={aptpurple}
                                            className="h-96 w-full object-cover rounded-2xl"
                                        />
                                    )}
                                    <div className="absolute bottom-8 left-8">
                                        <h1 className="text-4xl lg:text-5xl mb-6 text-white capitalize">
                                            {stories[0].title}
                                        </h1>

                                        <Link
                                            to={`/successteps-blog/${stories[0].slug.current}`}
                                            className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </article>
                            </section>
                        </Link>
                    )}
                </>
            )}

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
                                {/* <p className="text-md leading-relaxed">
                  {`${story.body[0].children[0].text.substring(0, 200)}...`}
                </p> */}
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

            {/* <Profile /> */}
        </>
    );
}