import { NodeViewProps } from "@tiptap/react";
import { useEffect, useState } from "react";
import mermaid from "mermaid";
import { v4 as uuidv4 } from "uuid";
import classes from "./code-block.module.css";

mermaid.initialize({
  startOnLoad: false,
  suppressErrorRendering: true,
});

interface MermaidViewProps {
  props: NodeViewProps;
}

export default function MermaidView({ props }: MermaidViewProps) {
  const { node } = props;
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    const id = `mermaid-${uuidv4()}`;

    if (node.textContent.trim.length > 0) {
      mermaid
        .render(id, node.textContent)
        .then((item) => {
          setPreview(item.svg);
        })
        .catch((err) => {
          if (props.editor.isEditable) {
            setPreview(
              `<div class="${classes.error}">Mermaid diagram error: ${err}</div>`,
            );
          } else {
            setPreview(
              `<div class="${classes.error}">Invalid Mermaid Diagram</div>`,
            );
          }
        });
    }
  }, [node.textContent]);

  return (
    <div
      className={classes.mermaid}
      contentEditable={false}
      dangerouslySetInnerHTML={{ __html: preview }}
    ></div>
  );
}
