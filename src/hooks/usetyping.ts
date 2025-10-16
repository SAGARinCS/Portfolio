import { useState, useEffect } from "react";

export function useTyping(words: string[], typeSpeed = 120, eraseSpeed = 60, delay = 1500) {
  const [index, setIndex] = useState(0); // current word index
  const [subIndex, setSubIndex] = useState(0); // current letter index
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[index];
    let timeout: NodeJS.Timeout;

    if (!deleting && subIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
        setText(currentWord.substring(0, subIndex + 1));
      }, typeSpeed);
    } else if (deleting && subIndex > 0) {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
        setText(currentWord.substring(0, subIndex - 1));
      }, eraseSpeed);
    } else if (!deleting && subIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), delay);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typeSpeed, eraseSpeed, delay]);

  return text;
}
