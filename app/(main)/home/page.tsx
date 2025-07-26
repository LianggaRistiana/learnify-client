'use client'

import { reqDocumentsThumbnailDummy } from "@/actions/documents-thumbnail";
import HeroGreeting from "@/components/atoms/hero-greeting";
import Skeletonthumbnail from "@/components/atoms/thumbnail-skeleton";
import DocumentsThumbnail from "@/components/molecules/documents-thumbnail";
import { useEffect, useState } from "react"
import { toast } from "sonner";

export default function Home() {
    const [documentsThumbnail, setDocumentsThumbnail] = useState<DocumentsThumbnail>();
    const [loading, setLoading] = useState(true);

    const fetchDocumentsThumbnail = async () => {
        try {
            const res = await reqDocumentsThumbnailDummy();
            setDocumentsThumbnail(res);
        } catch (err) {
            console.error("Gagal fetch dokumen", err);
            toast.error("Gagal mendapatkan dokumen");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDocumentsThumbnail();
    }, []);


    return (
        <div className="h-full">
            <HeroGreeting />
            <p className="w-full mb-4 text-md font-semibold text-primary">
                Documents
            </p>
            {
                loading
                    ? <Skeletonthumbnail />
                    : <DocumentsThumbnail documents={documentsThumbnail?.documents} />
            }
        </div>

    )
}