import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is a sample description for card 1",
      filesize: "2.5 MB",
      close: true,
      tag: { isOpen: true, tagtitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Это образец описания для карточки 2",
      filesize: "0.5 MB",
      close: false,
      tag: { isOpen: true, tagtitle: "Скачайте сейчас", tagColor: "sky" },
    },
    {
      desc: "Ceci est un exemple de description pour la carte 3",
      filesize: "9.5 MB",
      close: true,
      tag: { isOpen: false, tagtitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full  flex gap-5 flex-wrap p-7"
    >
      {data.map((item) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
