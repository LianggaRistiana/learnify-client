export default function HeroGreeting() {
    const name = localStorage.getItem("name");
    return (
        <div className="flex justify-center items-center py-32">
            <p className="text-6xl font-bold text-primary">Hello <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">{name}</span></p>
        </div>
    );
}
