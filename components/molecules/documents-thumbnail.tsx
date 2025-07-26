import AddDocument from "../atoms/add-document";
import DocumentCard from "../atoms/document-card";
import SearchGoogleDialog from "../atoms/search-google-dialog";

type Props = {
  documents?: DocumentThumbnail[];
};

export default function DocumentsThumbnail(props: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
      <AddDocument />
      <SearchGoogleDialog />
      {props.documents?.map((document) => (
        <DocumentCard key={document.id} document={document} />
      ))}
    </div>
  );
}
