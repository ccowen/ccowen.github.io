import { Typography } from "@mui/material";

function MySectionTitle(props) {
    return (
        <Typography variant="h5" gutterBottom style={props.style}>
            {props.children}
        </Typography>
    )
}

function parseText(text) {
    const parts = text.split(/(<b>.*?<\/b>)/g); // Split on <b> tags
    return parts.map((part, index) => {
        if (part.startsWith('<b>') && part.endsWith('</b>')) {
        return <b key={index}>{part.replace(/<\/?b>/g, '')}</b>;
        }
        return part;
    });
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