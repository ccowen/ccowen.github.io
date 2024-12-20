import ArticleWrapper from "../ArticleWrapper";

import contents from "../../directory/woven-time/content.json"
import directory from "../../directory/contentDirectory.json"

function WovenTimeArticleNew() {
    const headers = directory["content-directory"]["woven-time"]

    return (
        <ArticleWrapper headers={headers} contents={contents.content} />
    );
  }
  
  export default WovenTimeArticleNew;