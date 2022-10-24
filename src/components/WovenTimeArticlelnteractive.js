import { Typography } from "@mui/material";

import ArticleTextWrapper from "./ArticleTextWrapper";
import Aside from "./Aside";
import SongDataTable from "./SongDataTable";
import DataTable from "./DataTable";
import DataTableExtendedSamples from "./DataTableExtendedSamples";
import DataVisSection from "./DataVisSection";
import songData from '../data/songData.json';
import songSectionMapping from '../data/songSectionMapping.json';
import lyricsExtendedm31to36 from '../data/lyricsExtendedm31to36.js'
import YoutubeEmbed from "./YoutubeEmbed";

function MyParagraph(props) {
    return(
        <Typography variant="body1" sx={{"marginBottom":"15px", "lineHeight": '155%'}}>
            {props.children}
        </Typography>
    )
}

function MySectionTitle(props) {
    return(
        <Typography variant="h5" gutterBottom style={props.style}>
            {props.children}
        </Typography>
    )
}


function WovenTimeArticleInteractive() {

  return (
    <div>
        <ArticleTextWrapper>

            <MySectionTitle style={{marginBottom: '20px'}}>
                Interactive section of 'Woven Time'
            </MySectionTitle>

            <MyParagraph>
                The information about a song is synced to show up when it appears in the video. 
                The song detail is synced to measure number, a music term for chunks of time.
                The timing of the sun in the video will be more precise than the entry of the song visual.
            </MyParagraph>
            <MyParagraph>
                Press play below the video, which is below on the left, to start. Use the video controls 
                to scroll through the video. You can pause with the video controls too.
            </MyParagraph>
        </ArticleTextWrapper>



        <div style={{margin: '25px 0px'}}>
            <DataVisSection/>
        </div>

        <ArticleTextWrapper>
        <MySectionTitle style={{marginBottom: '20px'}}>
            Some Extra Notes
        </MySectionTitle>
            <MySectionTitle>
                Extending samples that aren't heard, m32-36
            </MySectionTitle>
            <MyParagraph>
                I think the section of the mashup from 1:50 to 2:04, or measures 32-36,
                particularly plays on our memories of the sample songs. There is a harmonious
                melodic relationship between the unheard extended samples and the heard samples.
            </MyParagraph>
            <MyParagraph>
                I hypothesized about this from my experience; though a sample ends, I had thoughts 
                about the next phrase from the original song. 
            </MyParagraph>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    Below is a table with the lyrics, seperated by [song]/[song] extended.
                </Typography>
                <DataTableExtendedSamples data={lyricsExtendedm31to36}/>
            </Aside>
            <MyParagraph>
                To observe this musically, I created a version of this section, with heard 
                and unheard samples. I transcribed it as sheet music, and exported this as an audio file.
            </MyParagraph>
            <Aside>
                <div
                    title="transcription of the mashup from meeasures 32-36"
                    style={{
                        height: '375px',
                        maxWidth: '750px',
                        backgroundImage:  "url('/transcriptionExtendedm31to36.png')",
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}
                />
            </Aside>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    Below are audio exports of my trancription, at two different speeds.
                </Typography>                
                <iframe 
                    width="100%" 
                    height="350" 
                    scrolling="no" 
                    frameborder="no" 
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1499846797&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
                <div style={{
                    fontSize: '10px', 
                    color: '#cccccc',
                    lineBreak: 'anywhere',
                    wordBreak: 'normal',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis', 
                    fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                    fontWeight: 100,
                }}>
                    <a 
                        href="https://soundcloud.com/caitlin-cowen-1" 
                        title="Caitlin Cowen" 
                        target="_blank" 
                        style={{color: "#cccccc", textDecoration: 'none'}}
                    >
                        Caitlin Cowen
                    </a>
                    <a 
                        href="https://soundcloud.com/caitlin-cowen-1/sets/woven-time-m32-26-samples-extended" 
                        title="Woven Time, m32-26 samples extended" 
                        target="_blank" 
                        style={{color: "#cccccc", textDecoration: 'none'}}
                    >
                        Woven Time, m32-26 samples extended
                    </a>
                </div>
            </Aside>

            <MySectionTitle>
                Lyrics that reference time
            </MySectionTitle>
            <MyParagraph>
                The mashup's lyrics and visual content are linked to references 
                to a linear timeframe, a work with a beginning, middle, and end.

                Most literally connected to the edges of a linear story, the visual 
                content of the <a href='https://www.youtube.com/watch?v=XLaZ-8IMtt0'>mashup</a>  signals 
                beginnings and endings at the start and end of the track.
            </MyParagraph>
            <MyParagraph>
                The video opens with a flower blooming and ends with digital clock 
                counting down a remaining few seconds to 0:00- a flower blooming 
                referencing a beginning or start, and the ending timer signifying an end.
            </MyParagraph>
            <MyParagraph>
                The repetition of 'please don't stop the' rebels against the upcoming 
                ending repeatedly, pushing to the height of the song's excitement. When 
                the loop breaks, we enter a slower phase with a sense of mourning at 
                the track's ending. Rihanna sings 'but it's over now', and Ryan Tedder 
                from One Republic sings 'it's too late'. 
            </MyParagraph>
            <MyParagraph>
                The energetic rebellion against the ending heightens a transition when 
                we transition to the end. This end has suddenly lost its energy 
                and to quote 'it's over now' and 'it's too late'. It's also interesting
                that this rebellious sample uses the most 'overtime'.
            </MyParagraph>
            <MyParagraph>
                The trailing 'tonight [tonight]' throughtout the middle of the song
                feels grounding to me, a call to the present moment.
            </MyParagraph>
            <MyParagraph>
                I wanted to point these lyrics out because I'm curious about DJ Earworm's role 
                as a creator and if he thought about time in this work. If it was a
                thought he had, did it translate and influence me and this visualization?
            </MyParagraph>
            <MySectionTitle>
                Raw Data
            </MySectionTitle>
            <Aside>
                <div><pre>{JSON.stringify(songData['records']['sample_songs'], null, 2) }</pre></div>)
            </Aside> 
        </ArticleTextWrapper>

    </div>
  );
}

export default WovenTimeArticleInteractive;
