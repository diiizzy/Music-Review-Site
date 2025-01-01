import fs from "fs"
import matter from "gray-matter"
import path from "path"

export const getAllPosts = (baseDir) => {
    const fileNames = fs.readdirSync(baseDir);
    return fileNames.map((fileName) => {
        const filePath = path.join(baseDir, fileName);
        const fileContents = fs.readFileSync(filePath, "utf8");

        const {content, data} = matter(fileContents);

        return {
            content,
            ...data,
        }
    })
};