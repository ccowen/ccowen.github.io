import ArticleWrapper from "../ArticleWrapper";

import contents from "../../directory/petal-progress/content.json"
import directory from "../../directory/contentDirectory.json"

function PetalProgress() {
    const headers = directory["content-directory"]["petal-progress"]

    return (
        <ArticleWrapper headers={headers} contents={contents.content} />
    );
}
  
export default PetalProgress;