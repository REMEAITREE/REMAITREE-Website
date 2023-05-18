import React, { useEffect, useState } from 'react'
const Transcript = () => {
  const [transcript, setTranscript] = useState("");
  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    const language = "en-US"; // Change this to your desired language
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.start();
    recognition.onresult = (event) => {
      console.log("asdasdaafas");
      console.log(event.results[event.results.length - 1][0].transcript);
      setTranscript(transcript + event.results[event.results.length - 1][0].transcript);
    }
  })
  return (
    <div>
        {transcript}
    </div>
  )
}

export default Transcript
