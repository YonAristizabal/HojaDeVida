"use strict";

const app = document.getElementById("app");
const estados = React.useState;
const cElement = React.createElement;
const root = ReactDOM.createRoot(app);

function RenderImg({ id, name, size }) {
    const validador = estados(true);
    const [enabled, setEnabled] = validador;
    const src = `https://randomuser.me/api/portraits/women/${id}.jpg`;

    let pictureClassName = "";

    if (size === "small") {
        pictureClassName = "is-small";
    } else if (size === "large") {
        pictureClassName = "is-large";
    }

    const imgClassName = enabled ? "" : "disabled";
    return cElement(
        "picture",
        {
            className: pictureClassName,
        },
        id
            ? cElement("img", {
                onClick: () => {
                    setEnabled(!enabled);
                },
                className: imgClassName,
                src: src,
            })
            : cElement("i", null, "Sin imagen"),
        cElement("strong", null, enabled ? name : "Desactivada")
    );
}

root.render(
  cElement(
    "div",
    null,
    cElement(RenderImg, {
      id: "2",
      size: "small",
      name: "JSXlady",
    }),
    cElement(RenderImg, {
      id: "3",
      name: "Layla",
    }),
    cElement(RenderImg, {
      id: "1",
      size: "large",
      name: "Emma",
    })
  )
);
