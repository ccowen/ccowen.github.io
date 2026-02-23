import ArticleWrapper from "../ArticleWrapper";

import contents from "../../directory/advocacy-communication-design/content.json"
import directory from "../../directory/contentDirectory.json"

function AdvocacyCommunicationDesign() {
    const headers = directory["content-directory"]["advocacy-communication-design"]

    return (
        <ArticleWrapper headers={headers} contents={contents.content} />
    );
}

export default AdvocacyCommunicationDesign;