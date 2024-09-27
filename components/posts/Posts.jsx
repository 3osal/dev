import MainTitle from "../mainTitle/MainTitle";
import PostsCard from "./PostsCard";
import { POSTS_DATA } from "./PostsData";

const Posts = () => {
  return (
    <section>
      <MainTitle title="Blog Posts" desc="Newly Posted Articles" />
      <div className="container">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {POSTS_DATA.map((item) => (
            <PostsCard
              key={item.id}
              image={item.image}
              desc={item.desc}
              time={item.time}
              path={item.path}
              variety={item.variety}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
