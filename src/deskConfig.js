import S from "@sanity/desk-tool/structure-builder";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { FaToolbox } from "react-icons/fa";

const hiddenDocTypes = (listItem) =>
  !["index", "about", "services"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(AiFillHome)
        .child(S.editor().id("index").schemaType("index").documentId("index")),
      S.listItem()
        .title("About Page")
        .icon(AiFillInfoCircle)
        .child(S.editor().id("about").schemaType("about").documentId("about")),
      S.listItem()
        .title("Services Page")
        .icon(FaToolbox)
        .child(
          S.editor()
            .id("services")
            .schemaType("services")
            .documentId("services")
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
