type Props = {
  document: DocumentThumbnail;
};

export default function DocumentCard(props: Props) {
  return (
    <div className="w-full h-40 p-4 bg-sidebar overflow-hidden rounded-lg shadow-md cursor-pointer border hover:border-primary transition-all duration-300 ease-in-out">
      <p className="font-semibold text-lg truncate">{props.document.title}</p>
      <p className=" text-muted-foreground text-sm truncate">{props.document.date}</p>
    </div>
  );
}
