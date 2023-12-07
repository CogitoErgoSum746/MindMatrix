import React, { useState, useEffect } from "react";
import { sanityClient } from "../../client";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import BlogList from "../../components/BlogList";

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
    <BlogList />
    </>
  );
}