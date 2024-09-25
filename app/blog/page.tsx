import ArticleItemList from "@/components/ArticleListItems";
import DynamicHeading from "@/components/DynamicHeading"; // Import the DynamicHeading component
import { getCategorisedArticles } from "@/lib/articles";

const names = [
  "مدوناتي",
  "Мои блогови",
  "我的部落格",
  "私のブログ",
  "Moje blogi",
  "My Blogs",
];

const BlogsPage = () => {
  const articles = getCategorisedArticles(); // Ensure this is properly defined

  return (
    <div className="bg-[--background] flex flex-col items-center gap-4">
      <DynamicHeading names={names} />

      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles && Object.keys(articles).length > 0 ? (
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </section>
    </div>
  );
};

export default BlogsPage;
