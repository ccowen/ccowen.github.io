import ArticleWrapper from "../ArticleWrapper";

import contents from "../../directory/future-friday-may-2025/content.json"
import directory from "../../directory/contentDirectory.json"

function FutureFridayMay2025() {
    const headers = directory["content-directory"]["future-friday-may-2025"];

    return (
        <ArticleWrapper headers={headers} contents={contents.content} />
    );
}
  
export default FutureFridayMay2025;