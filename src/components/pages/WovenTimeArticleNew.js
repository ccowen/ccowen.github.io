import ArticleWrapper from "../ArticleWraper";

import contents from "../../directory/woven-time/content.json"

function WovenTimeArticleNew() {
    console.log(contents)
    return (
        <ArticleWrapper contents={contents.content} />
    );
  }
  
  export default WovenTimeArticleNew;