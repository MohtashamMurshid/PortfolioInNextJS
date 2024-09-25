// BlogsPage.tsx
import ArticleItemList from "@/components/ArticleListItems";
import DynamicHeading from "@/components/DynamicHeading"; // Import the DynamicHeading component
import { getCategorisedArticles } from "@/lib/articles";

// Define the array of names
const names = [
  "مدوناتي",
  "Мои блогови",
  "我的部落格",
  "私のブログ",
  "Moje blogi",
  "My Blogs",
];

const BlogsPage = () => {
  const articles = getCategorisedArticles();

  return (
    <div className="bg-[--background] flex flex-col items-center gap-4">
      <DynamicHeading names={names} /> {/* Pass names array to DynamicHeading */}

      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
      </section>
    </div>
  );
};

export default BlogsPage;
