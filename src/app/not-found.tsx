import Link from "next/link";

export default function NotFound() {
    return(
        <section className="grid place-content-center h-dvh">
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                404 - Page Not Found
            </h1>
            <p className="mb-4">
                The Page you are looking for does not exist.
            </p>
            <Link href={"/"} className="bg-gray-100 dark:bg-gray-900 p-2 w-fit rounded-md hover:shadow-lg">
                Go Home
            </Link>
        </section>
    )
}