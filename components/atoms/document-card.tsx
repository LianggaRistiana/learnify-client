'use client'

import { useRouter } from "next/navigation"; 

type Props = {
    document: DocumentThumbnail;
};

export default function DocumentCard({ document }: Props) {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/document/${document.id}`)}
            className="w-full h-40 p-4 bg-sidebar overflow-hidden rounded-lg shadow-md cursor-pointer border hover:border-primary transition-all duration-300 ease-in-out"
        >
            <p className="font-semibold text-lg truncate">{document.title}</p>
            <p className="text-muted-foreground text-sm truncate">{document.summary}</p>
        </div>
    );
}
