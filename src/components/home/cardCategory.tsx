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
            <Card className="w-[350px] h-[290px] shadow-lg">
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