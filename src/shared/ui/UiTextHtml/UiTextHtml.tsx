import DOMPurify from "dompurify";

interface UiTextHtml {
  children: string;
  className?: string;
}

const UiTextHtml = ({ children: text, className }: UiTextHtml) => {
  const sanitiziedHtmlText = DOMPurify.sanitize(text);

  return <div className={className} dangerouslySetInnerHTML={{ __html: sanitiziedHtmlText }} />;
};

export default UiTextHtml;
