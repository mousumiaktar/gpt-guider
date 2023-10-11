import AudioVideo from "./AudioVideo";
import ChatWithPdf from "./ChatWithPdf";
import DiagramPlugin from "./DiagramPlugin";
import DocumentAi from "./DocumentAi";
import Featurs from "./Featurs";
import Hero from "./Hero";
import PlugIn from "./PlugIn";
import Prof from "./Prof";
import Transcription from "./Transcription";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Featurs />
            <PlugIn />
            <Prof />
            <DocumentAi />
            <ChatWithPdf />
            <AudioVideo />
            <DiagramPlugin />
            <Transcription />
        </div>
    );
};

export default HomePage;