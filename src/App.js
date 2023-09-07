import Header from "./sections/Header/Header";
import Intro from "./sections/Intro/Intro";
import HowHelp from "./sections/HowHelp/HowHelp";
import Testing from "./sections/Testing/Testing";
import Feedback from "./sections/Feedback/Feedback";
import About from "./sections/About/About";
import WorkTogether from "./sections/WorkTogether/WorkTogether";
import Questions from "./sections/Questions/Questions";
import Contacts from "./sections/Contacts/Contacts";
import MakeSafe from "./sections/MakeSafe/MakeSafe";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main-content">
        <Intro/>
        <HowHelp/>
        <Testing/>
        <Feedback/>
        <About/>
        <WorkTogether/>
        <Questions/>
        <Contacts/>
        <MakeSafe/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
