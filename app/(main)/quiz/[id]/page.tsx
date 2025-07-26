'use client'

import DocumentSkeleton from "@/components/atoms/document-skeleton";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import QuizRoom from "@/components/organisms/quiz-room";
import { getQuiz } from "@/actions/get-quiz-service";

export default function Quiz() {
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;

    const [documentQuiz, setDocumentQuiz] = useState<QuizResponse>();
    const [loading, setLoading] = useState(true);

    const fetchQuiz = async () => {
        setLoading(true);
        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("Token tidak ditemukan. Silakan login kembali.");
            setLoading(false);
            return;
        }

        try {
            // const res = await reqDocumentQnaDummy(id);
            const res = await getQuiz(Number(id), token);
            if (res.data) {

                setDocumentQuiz(res.data);
            } else {
                toast.error(res.message || "Quiz not found");
            }

        } catch (err) {
            console.error("Failed fetch quiz", err);
            toast.error("Failed to get quiz");
            router.push("/document" + id);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchQuiz();
        }
    }, [id]);

    if (loading) return <div>
        <DocumentSkeleton />
        <DocumentSkeleton />
        <DocumentSkeleton />
        <DocumentSkeleton />
    </div>
        ;

    if (!document) return <div>Dokumen tidak ditemukan.</div>;

    return (
        <div className="w-full relative">
            {
                documentQuiz &&
                <QuizRoom quiz={documentQuiz} />
            }
        </div>
    );
}
