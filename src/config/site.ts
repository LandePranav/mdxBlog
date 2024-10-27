type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        twitter: string;
        github: string;
    };
};

export const siteConfig:SiteConfig ={
    name: "Ronin's Lore",
    description: "An Open source technical blog platform with Next.js 15with shadcn , prisma and markdown support.",
    url: "https://xeronin.vercel.app/",
    ogImage: "https://xeronin.vercel.app/og",
    links: {
        twitter: "https://twitter.com/",
        github: "https://github.com/LandePranav"
    }
}