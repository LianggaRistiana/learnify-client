type Props = {
    document : DocumentThumbnail
}


export default function DocumentCard( props : Props){
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer border-2 hover:border-primary hover:border-primary transition-all duration-300 ease-in-out">
            <p>{props.document.title}</p>
        </div>
    )
}