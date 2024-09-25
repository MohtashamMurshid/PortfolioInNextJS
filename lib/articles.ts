import fs from "fs";
import matter from "gray-matter";
import path from "path";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";

import type { ArticleItem } from "../types";

const articlesDirectory = path.join(process.cwd(), "articles");

const getSortedArticles = (): ArticleItem[] => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
    };
  });

  return allArticlesData.sort((a, b) => {
    const format = "DD-MM-YYYY";
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);
    if (dateOne.isBefore(dateTwo)) {
      return -1;
    } else if (dateTwo.isAfter(dateOne)) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
  const sortedArticles = getSortedArticles();
  const categorisedArticles: Record<string, ArticleItem[]> = {};

  sortedArticles.forEach((article) => {
    if (!categorisedArticles[article.category]) {
      categorisedArticles[article.category] = [];
    }
    categorisedArticles[article.category].push(article);
  });
  return categorisedArticles;
};

export const getArticleData = async (id: string) => {
  // Decode the URL-encoded article ID
  const decodedId = decodeURIComponent(id);
  const fullPath = path.join(articlesDirectory, `${decodedId}.md`);

  // Check if the file exists
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Article not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResults = matter(fileContents);

  // Process the Markdown content into HTML
  const processedContent = await remark().use(html).process(matterResults.content);
  const contentHtml = processedContent.toString();

  return {
    id: decodedId,
    contentHtml,
    title: matterResults.data.title,
    date: moment(matterResults.data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
  };
};
