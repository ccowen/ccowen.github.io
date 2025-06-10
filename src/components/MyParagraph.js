import { Link, Typography } from "@mui/material"

function MySectionTitle(props) {
    return (
        <Typography variant="h5" gutterBottom style={props.style}>
            {props.children}
        </Typography>
    )
}

function parseText(text) {
    // Create an array to store the parts
    const result = [];
    let currentIndex = 0;
    
    // First, look for <b> tags
    const boldRegex = /<b>(.*?)<\/b>/g;
    let boldMatch;
    
    while ((boldMatch = boldRegex.exec(text)) !== null) {
        // Add any text before the match
        if (boldMatch.index > currentIndex) {
            result.push(text.substring(currentIndex, boldMatch.index));
        }
        
        // Add the bold text as a React element
        const boldContent = boldMatch[1];
        result.push(<b key={`bold-${result.length}`}>{boldContent}</b>);
        
        // Update the current index
        currentIndex = boldMatch.index + boldMatch[0].length;
    }
    
    // Add any remaining text after the last bold match
    let remainingText = text.substring(currentIndex);
    
    // Now process <link> tags in the remaining text
    const linkRegex = /<link>(.*?)<\/link>/g;
    currentIndex = 0;
    let linkParts = [];
    let linkMatch;
    
    while ((linkMatch = linkRegex.exec(remainingText)) !== null) {
        // Add any text before the match
        if (linkMatch.index > currentIndex) {
            linkParts.push(remainingText.substring(currentIndex, linkMatch.index));
        }
        
        // Add the link as a React element
        const url = linkMatch[1];
        linkParts.push(<Link key={`link-${linkParts.length}`} href={url}>{url}</Link>);
        
        // Update the current index
        currentIndex = linkMatch.index + linkMatch[0].length;
    }
    
    // Add any remaining text after the last link match
    if (currentIndex < remainingText.length) {
        linkParts.push(remainingText.substring(currentIndex));
    }
    
    // If we processed any links, add them to the result
    if (linkParts.length > 0) {
        result.push(...linkParts);
    } else {
        result.push(remainingText);
    }
    
    return result;
}

function MyParagraph({header, content, style}) {

    let variant = "body1"
    let sx={"marginBottom":"20px", "lineHeight": '155%'}

    // change text style for text in my aside
    //TODO reettire aside
    if (style == "aside_subtitle") {
        variant = "subtitle2"
        sx={"marginBottom":"8px"}
    }
    else if (style === "text_list") {
        sx={"marginBottom":"8px"}
    }

    return (
        <>
            {header != null ? <MySectionTitle>{header}</MySectionTitle> : null}
            { style === "text_list" ? 
                <ul>
                    {Object.keys(content).map((key, index) => (
                        <Typography key={index} variant={variant} sx={sx}>
                            <li>
                                {parseText(content[key])}
                            </li>
                        </Typography>
                    ))}
                </ul>
                :
                Object.keys(content).map((key, index) => (
                    <Typography key={index} variant={variant} sx={sx}>
                        {parseText(content[key])}
                    </Typography>
                ))

            }
            
        </>
    )
}

export default MyParagraph;