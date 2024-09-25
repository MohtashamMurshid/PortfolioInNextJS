import Link from "next/link";
import type { ArticleItem } from "../types";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

interface Props {
  category: string;
  articles: ArticleItem[];
}

const ArticleItemList = ({ category, articles }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5 text-lg">
        {articles.map((article, id) => (
          <Card
            key={id}
            className="transition duration-150 hover:scale-105 bg-transparent text-white border-none"
          >
            <Link
              href={`/${article.id}`}
              className=" p-4 flex justify-between items-center"
            >
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">{article.title}</h3>
                {/* Optionally, you can add more details about the article */}
               <p className="text-gray-600">{article.date}</p>
              </div>
              <Badge
                key={article.category} // Use article.category to display the category
                variant="outline"
                className="text-gray-300 transition-transform transform hover:scale-110"
              >
                {article.category}{" "}
                {/* Display the category name for each article */}
              </Badge>
            </Link>

            <Separator />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArticleItemList;
