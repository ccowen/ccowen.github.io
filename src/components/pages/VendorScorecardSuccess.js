import ArticleWrapper from "../ArticleWrapper";

import contents from "../../directory/vendor-scorecard-success/content.json"
import directory from "../../directory/contentDirectory.json"

function VendorScorecardSuccess() {
    const headers = directory["content-directory"]["vendor-scorecard-success"]

    return (
        <ArticleWrapper headers={headers} contents={contents.content} />
    );
}
  
export default VendorScorecardSuccess;