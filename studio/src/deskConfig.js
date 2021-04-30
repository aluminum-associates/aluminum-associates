import S from "@sanity/desk-tool/structure-builder"
import {
  AiFillHome,
  AiFillInfoCircle,
  AiOutlineQuestionCircle,
  AiOutlineTeam,
} from "react-icons/ai"
import { FaToolbox } from "react-icons/fa"
import { IoMdImages, IoMdSettings } from "react-icons/io"

const hiddenDocTypes = listItem =>
  ![
    "siteSettings",
    "index",
    "about",
    "services",
    "gallery",
    "faq",
    "team",
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(IoMdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
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
      S.listItem()
        .title("Gallery Page")
        .icon(IoMdImages)
        .child(
          S.editor().id("gallery").schemaType("gallery").documentId("gallery")
        ),
      S.listItem()
        .title("FAQ Page")
        .icon(AiOutlineQuestionCircle)
        .child(S.editor().id("faq").schemaType("faq").documentId("faq")),
      S.divider(),
      S.listItem()
        .title("Team")
        .icon(AiOutlineTeam)
        .child(S.editor().id("team").schemaType("team").documentId("team")),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
