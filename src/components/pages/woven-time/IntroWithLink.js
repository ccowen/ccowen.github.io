import { Link, Typography } from "@mui/material"

function IntroWithLink() {

    return (
        <>
            <Typography variant="body1" sx={{"marginBottom":"15px", "lineHeight": '155%'}}>
                I am proud to say that this article was published in Nightingale Magazine. It can be accessed online at this link,{" "}
                <Link href={"https://nightingaledvs.com/woven-time/"}>https://nightingaledvs.com/woven-time/ </Link>
            </Typography>
        
        </>
    )
}

export default IntroWithLink;