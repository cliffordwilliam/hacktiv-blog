import React from "react";
import Card from "./Card";

export default function BlogList({ blogs, currentPage, totalPage, totalRows }) {
  return (
    <div className="vf wf">
      <div className="g">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            title={blog.title}
            content={blog.content}
            imgUrl={blog.imgUrl}
            category={blog.Category}
          />
        ))}
      </div>
      <div className="pagination">
        <p>
          Page {currentPage} of {totalPage}, Total Blogs: {totalRows}
        </p>
      </div>
    </div>
  );
}
