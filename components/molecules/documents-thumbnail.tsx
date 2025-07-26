import DocumentCard from "../atoms/document-card";

type Props = {
    documents : DocumentThumbnail[]
}

export default function DocumentsThumbnail(props: Props) {
    return (
        <div>
            {
                props.documents.map((document) => (
                    <DocumentCard key={document.id} document={document} />
                ))
            }
        </div>
    )
}
