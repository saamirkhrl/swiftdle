import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import React from "react";
import Quote from "./components/Quote";
import UserInput from "./components/UserInput";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
function App() {
  const [lyric, setLyric] = useState("");
  const [song, setSong] = useState("");
  const [album, setAlbum] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://qkpjs6-3000.csb.app/get");

        if (!res.ok) {
          throw new Error("Error fetching data. Try again later");
        }

        const data = await res.json();
        setLyric(data.quote);
        setSong(data.song);
        setAlbum(data.album);
        // console.log(jsonData);
      } catch (error) {
        // do something here (not needed since everyting works fine)
        console.log(data);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <h1 className="title">Swiftdle - A Taylor Swift lyrics guesing game</h1>
      <Quote lyrics={lyric} />
      <UserInput song={song} album={album} />
      <Analytics />
    </div>
  );
}

export default App;
