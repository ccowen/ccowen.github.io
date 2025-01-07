import ArticleWrapper from "../ArticleWrapper";

import contents from "../../directory/about-me/content.json"
import directory from "../../directory/contentDirectory.json"

function AboutPage() {
    const headers = directory["content-directory"]["about-me"]

    return (
        <ArticleWrapper headers={headers} contents={contents.content} />
    );
}
  
export default AboutPage;