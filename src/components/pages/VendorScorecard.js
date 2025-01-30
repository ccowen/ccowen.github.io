import ArticleWrapper from "../ArticleWrapper";

import contents from "../../directory/vendor-scorecard/content.json"
import directory from "../../directory/contentDirectory.json"

function VendorScorecard() {
    const headers = directory["content-directory"]["vendor-scorecard"]

    return (
        <ArticleWrapper headers={headers} contents={contents.content} />
    );
}
  
export default VendorScorecard;