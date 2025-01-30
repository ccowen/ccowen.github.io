import ArticleWrapper from "../ArticleWrapper";

import contents from "../../directory/western-music-notation/content.json"
import directory from "../../directory/contentDirectory.json"

function MusicNotation() {
    const headers = directory["content-directory"]["western-music-notation"]

    return (
        <ArticleWrapper headers={headers} contents={contents.content} />
    );
}
  
export default MusicNotation;