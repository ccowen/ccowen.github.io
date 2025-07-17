import MyAside from "./MyAside";
import MyParagraph from "./MyParagraph";
import DynamicComponent from "./DynamicComponent";
import MyImage from "./MyImage";

/* function parsing each item in content, rendering by type */
function ContentParser({contents}) {
    const renderedContent = [];
  
    {contents.map((item, i) => (
      renderedContent.push(
        (item.type.includes("text") || item.type === "aside_subtitle" ?
            <MyParagraph key={i} header={item.header} content={item.content} style={item.type}/>
          : item.type === "aside" ?
            <MyAside key={i} content={item.content}/>
          : item.type === "component" ?
            <DynamicComponent key={i} componentName={item.content[0]} {...item.content[1]}/>
          : item.type === "image" ?
            <div key={i} {...item.content} />
          : item.type === "image2" ?
            <MyImage images={item.content} maxWidth={item.maxWidth || 600}/>
          : null
        )
      ))
    )}
    return renderedContent
  }

export default ContentParser;