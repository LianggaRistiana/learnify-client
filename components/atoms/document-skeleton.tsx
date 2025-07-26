import { Skeleton } from "../ui/skeleton";

export default function DocumentSkeleton() {
    return (
        <>
            <div>
                <Skeleton className="h-40 w-full rounded-lg" />
            </div>
            <div className="flex items-center space-x-4 py-4">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[300px]" />
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </>

    )
}