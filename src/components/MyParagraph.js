import { Typography } from "@mui/material";

function MySectionTitle(props) {
    return (
        <Typography variant="h5" gutterBottom style={props.style}>
            {props.children}
        </Typography>
    )
}

function MyParagraph({header, content, style}) {

    let variant = "body1"
    let sx={"marginBottom":"15px", "lineHeight": '155%'}

    if (style == "aside_subtitle") {
        variant = "subtitle2"
        sx={}
    }

    return (
        <>
            {header != null ? <MySectionTitle>{header}</MySectionTitle> : null}
            {Object.keys(content).map((key, index) => (
                <Typography key={index} variant={variant} sx={sx}>
                    {content[key]}
                </Typography>
            ))}
        </>
    )
}

export default MyParagraph;