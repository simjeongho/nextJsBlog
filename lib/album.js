import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
const albumDirectory = path.join(process.cwd(), "album");

export function getSortedAlbumData() {
  //get file names under /album
  const fileNames = fs.readdirSync(albumDirectory);
  const allAlbumData = fileNames.map((filename) => {
    //Remove.md from file name to get id
    const id = filename.replace(/\.md$/, "");

    //Read markdown file as so
    const fullPath = path.join(albumDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    //Use gray-maatter to parse the album metadata section
    const matterReselt = matter(fileContents);

    //Combine the data with the id
    return {
      id,
      ...matterReselt.data,
    };
  });
  //sort posts by data
  return allAlbumData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
export function getAllAlbumIds() {
  const fileNames = fs.readdirSync(albumDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getAlbumData(id) {
  const fullPath = path.join(albumDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
