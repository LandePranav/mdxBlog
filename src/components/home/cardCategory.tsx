import { formatDate } from "@/app/blogs/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function CardCategory({title,summary,publishedAt}:{title:string; summary:string; publishedAt:string;}) {
    return(
            <Card className="w-[80%] h-auto mx-auto md:w-full md:mx-0 md:h-[250px] shadow-lg overflow-auto">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{summary}</p>
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-gray-400">{formatDate(publishedAt)}</p>
                </CardFooter>
            </Card>
    );
}