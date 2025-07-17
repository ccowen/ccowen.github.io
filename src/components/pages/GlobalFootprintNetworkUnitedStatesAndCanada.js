import ArticleWrapper from "../ArticleWrapper";

import contents from "../../directory/global-footprint-network-united-states-and-canada/content.json"
import directory from "../../directory/contentDirectory.json"

function GlobalFootprintNetworkUnitedStatesAndCanada() {
    const headers = directory["content-directory"]["global-footprint-network-united-states-and-canada"];

    return (
        <ArticleWrapper headers={headers} contents={contents.content} />
    );
}
  
export default GlobalFootprintNetworkUnitedStatesAndCanada;