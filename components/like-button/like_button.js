"use strict";

const e = React.createElement;

class BotonFormularios extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (!this.state.liked) {
      return e(
        "button",
        { onClick: () => this.setState({ liked: true }) },
        "Desplegar Formulario"
      );
      /*  e(
        "button",
        { onClick: () => this.setState({ liked: true }) },
        "Desplegar Formulario"
      ); */
    } else {
      return e(
        "section",
        {
          class: "",
        },
        e(
          "form",
          {
            action: "",
          },
          e(
            "div",
            {
              class: "row d-flex justify-content-center ",
            },
            e(
              "div",
              {
                class: "col-auto",
              },
              e(
                "p",
                {
                  class: "pt-2",
                },
                e("strong", null, "Nombre")
              )
            ),
            e(
              "div",
              {
                class: "col-md-5 col-12",
              },
              e(
                "div",
                {
                  class: "form-outline form-white mb-4",
                },
                e("input", {
                  type: "text",
                  id: "name",
                  class: "form-control",
                }),
                e(
                  "label",
                  {
                    class: "form-label",
                    for: "name",
                  },
                  "Nombre Completo"
                )
              )
            )
          ),
          e(
            "div",
            {
              class: "row d-flex justify-content-center",
            },
            e(
              "div",
              {
                class: "col-auto",
              },
              e(
                "p",
                {
                  class: "pt-2",
                },
                e("strong", null, "Correo")
              )
            ),
            e(
              "div",
              {
                class: "col-md-5 col-12",
              },
              e(
                "div",
                {
                  class: "form-outline form-white mb-4 ",
                },
                e("input", {
                  type: "email",
                  id: "form5Example21",
                  class: "form-control",
                }),
                e(
                  "label",
                  {
                    class: "form-label",
                    for: "form5Example21",
                  },
                  "Correo Electr\xF3nico"
                )
              )
            )
          ),
          e(
            "div",
            {
              class: "row d-flex justify-content-center",
            },
            e(
              "div",
              {
                class: "col-auto",
              },
              e(
                "p",
                {
                  class: "pt-2",
                },
                e("strong", null, "Asunto")
              )
            ),
            e(
              "div",
              {
                class: "col-md-5 col-12",
              },
              e(
                "div",
                {
                  class: "form-outline form-white mb-4",
                },
                e("input", {
                  type: "text",
                  id: "text",
                  class: "form-control",
                }),
                e(
                  "label",
                  {
                    class: "form-label",
                    for: "text",
                  },
                  "Informaci\xF3n del asunto"
                )
              )
            )
          ),
          e(
            "div",
            {
              class: "row d-flex justify-content-center",
            },
            e(
              "div",
              {
                class: "col-auto",
              },
              e(
                "p",
                {
                  class: "pt-2",
                },
                e("strong", null, "Descripci\xF3n")
              )
            ),
            e(
              "div",
              {
                class: "col-md-5 col-12",
              },
              e(
                "div",
                {
                  class: "form-outline form-white mb-4",
                },
                e("input", {
                  type: "text",
                  id: "text",
                  class: "form-control",
                }),
                e(
                  "label",
                  {
                    class: "form-label",
                    for: "text",
                  },
                  "Detalle del mensaje"
                )
              )
            )
          )
        ),
        e(
          "a",
          {
            class: "btn btn-outline-light btn-lg",
            href: "#!",
            role: "button",
          },
          "Enviar"
        )
      );
    }
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll(".like_button_container").forEach((domContainer) => {
  // Read the comment ID from a data-* attribute.
  const commentID = parseInt(domContainer.dataset.commentid, 10);
  const root = ReactDOM.createRoot(domContainer);
  root.render(e(BotonFormularios, { commentID: commentID }));
});
