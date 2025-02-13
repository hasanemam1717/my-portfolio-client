"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export interface TBlog {
  title: string;
  content: string;
  category: string;
  image?: string;
  like: number;
  createdAt: string; // Added createdAt field
}

const BlogCard = ({ blog }: { blog: TBlog }) => {
  // Format the createdAt date
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" py-4 lg:py-12 px-4 sm:px-6 lg:px-8   transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden   hover:shadow-xl transition-shadow duration-300">
        {/* Blog Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full h-64 relative"
        >
          <Image
            src={blog?.image as string}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Blog Content */}
        <div className="p-6 border border-gray-50/20">
          {/* Category and Created Date */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-semibold px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Created: {formattedDate}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {blog.title}
          </h1>

          {/* Content */}
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {blog.content}
          </p>

          {/* Likes */}
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mr-2 cursor-pointer"
            >
              ❤️
            </motion.span>
            <span>{blog.like} Likes</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
