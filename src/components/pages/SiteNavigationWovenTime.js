import ArticleWrapper from "../ArticleWrapper";

import contents from "../../directory/site-navigation-woven-time/content.json"
import directory from "../../directory/contentDirectory.json"

function SiteNavigationWovenTime() {
    const headers = directory["content-directory"]["site-navigation-woven-time"]

    return (
        <ArticleWrapper headers={headers} contents={contents.content} />
    );
}
  
export default SiteNavigationWovenTime;