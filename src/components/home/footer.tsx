import { Icon } from "lucide-react";
import { Icons } from "../ui/icon";
import { posts } from "@/lib/constants";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
    return(
        <footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Icons.logo className="h-6 w-6" />
                            <span className="text-md font-semibold">Ronin's Lore</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Stay Up to Date with the latest news and insights from our Blog.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Icons.twitter className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
                            </a>
                            <a href="https://github.com/LandePranav" target="_blank" rel="noopener noreferrer" aria-label="Github">
                                <Icons.git className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"  />
                            </a>
                            <a href="mailto:pranavlande1@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
                                <Icons.gmail className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"  />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-md font-semibold">Blogs</h3>
                        <ul className="space-y-2 text-sm">
                            {posts.map((post)=>  (
                                <li key={post.title}>
                                    <Link href={post.href} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                        {post.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-md font-semibold">Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href={'/mailto:pranavlande1@gmail.com'} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href={'/terms-of-services'} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                    Terms-Of-Services
                                </Link>
                            </li>
                            <li>
                                <Link href={'/privacy-policy'} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                            <h3 className="text-md font-semibold">News Letter</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Subscribe to our news letter to get latest updates.
                            </p>
                            <form>
                                <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2">
                                    <Input type="email" placeholder="email.." className="bg-white dark:bg-gray-900" />
                                    <Button type="submit" className="w-fit lg:w-auto dark:font-semibold" >
                                        Subscribe
                                    </Button>
                                </div>
                            </form>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:text-gray-400 dark:border-gray-700">
                    &copy; 2024 Ronin's Lore. All rights reserved.
                </div>
            </div>
        </footer>
    )
}