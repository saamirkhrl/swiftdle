import { Analytics } from "@vercel/analytics/react";
function Quote(props) {
  console.log("Quote received:", props.lyrics);

  if (!props.lyrics || props.lyrics === "") {
    return <h1>Loading song... please wait</h1>;
  } else {
    const formattedQuote = props.lyrics
      .split("/")
      .map((line, index) => <p key={index}>{line}</p>);

    return (
      <div className="quote">
        Lyrics: <span>{formattedQuote}</span>
      </div>
    );
  }
}

export default Quote;
