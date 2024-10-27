import fs from 'fs';
import path, { extname } from 'path';
import matter from 'gray-matter';

function getMdxFiles(dir: string){
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMdxFile(filepath: fs.PathOrFileDescriptor){
    let rawData = fs.readFileSync(filepath, 'utf-8');
    return matter(rawData);
}

function getMdxData(dir: string){
    const mdxFiles = getMdxFiles(dir);

    return mdxFiles.map((file) => {
        const {data:metadata, content} = readMdxFile(path.join(dir, file));
        let slug = path.basename(file, extname(file));
        return {
            metadata,
            slug,
            content,
        }
    });
}

export function getBlogPosts(){
    return getMdxData(path.join(process.cwd(), 'src', 'app', 'blogs', 'content'));
}
export function getTermsOfServices(){
    return getMdxData(path.join(process.cwd(), 'src', 'app', 'terms-of-services'));
}
export function getPrivacyPolicy(){
    return getMdxData(path.join(process.cwd(), 'src', 'app', 'privacy-policy'));
}

export function formatDate(date: string, isRelative = true){
    const currDate = new Date();
    if(!date.includes('T')) date = `${date}T00:00:00`;
    const targetDate = new Date(date);

    const yearsAgo = currDate.getFullYear() - targetDate.getFullYear();
    const monthsAgo = currDate.getMonth() - targetDate.getDate();
    const daysAgo = currDate.getDate() - targetDate.getDate();

    let formattedDate = "";

    if(yearsAgo > 0) formattedDate = `${yearsAgo}y ago`
    else if(monthsAgo > 0) formattedDate = `${monthsAgo}mo ago`
    else if(daysAgo > 0) formattedDate = `${daysAgo}d ago`
    else formattedDate = `today`


    let fullDate = targetDate.toLocaleString("en-us", {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    if(!isRelative) return fullDate;

    return `${fullDate} (${formattedDate})`;
}