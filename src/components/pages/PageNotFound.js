import ArticleWrapper from "../ArticleWrapper";

import contents from "../../directory/page-not-found/content.json"
import directory from "../../directory/contentDirectory.json"

function PageNotFound() {
    const headers = directory["content-directory"]["page-not-found"]

    return (
        <ArticleWrapper headers={headers} contents={contents.content} />
    );
}
  
export default PageNotFound;