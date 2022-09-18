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
        <Typography variant="h5" gutterBottom>
            {props.children}
        </Typography>
    )
}


function WovenTimeArticle() {

  return (
    <div>
        <ArticleTextWrapper>
            <Typography variant="h2"> 
                Woven Time
            </Typography>
            <Typography variant="h3" gutterBottom>
                thoughts on our experience of time in a mashup
            </Typography>
            <MySectionTitle style={{marginBottom: '150px'}}>
                work by Caitlin Cowen, August 2022
            </MySectionTitle>
            <MySectionTitle>
                Overview
            </MySectionTitle>
            <MyParagraph>
                This project explores our experience listening to an audio mashup.
                Mashups bring material together from different sources, and in this
                example, intended for an audience familiar with the source material.
                How do we process the pieces of this material brought together in a
                new form?
            </MyParagraph>
            <MyParagraph>
                A listener may relate to the source material emotionally, socially, 
                or structurally. So I think there are many interesting ways to 
                look at this question. This project's direction 
                goes specifically into structural references. I do not think it is most 
                important; I went this way because it was the thought I wanted to pursue.
            </MyParagraph>
            <MyParagraph>
                I choose to look at this question for this mashup by the time position of 
                the tracks. What is our experience of time when we have experienced 
                the source material in time previously? Could I quantify samples by time 
                placement and what would that show? The direction of this visualization is 
                focused on the global position of the samples, or where they are in 
                relation to the entire song. It could also be interesting to review this 
                more locally, where they are in a phrase or song section.
            </MyParagraph>
            <MySectionTitle>
                Method
            </MySectionTitle>
            <MyParagraph>
                In this excercise, I looked at 'The United State of Pop 2008', a mashup by DJ 
                Earworm that samples the top 25 songs in the United States in 2008. 
                The source material is chosen by popularity in a region, so familiarity 
                with the sourced songs is probably intended for the millions of people
                who streamed the songs.
            </MyParagraph>
            <MyParagraph>
                I collected data based on placement to connect the use of the 
                sample in the mashup to the sample from the original song. This was based 
                on my ordered experience of listening to song tracks 
                repeatedly, and then later the mashup when released.
            </MyParagraph>
            <MyParagraph>
                Song tracks are set to play for a period of time. The track begins, 
                plays, and ends; this process can repeat in exactly the same order. I 'could' 
                have formed some kind of memory of these songs over the course of the year, 
                because I listened to the radio in the United States and heard the chart-topping songs many times. 
                With this theory, I wanted to quantify then visualize how a mashup draws on 
                existing experiences to create a new experience from references. Specifically 
                based on ordered, time references from the original song tracks.
            </MyParagraph>
            <MySectionTitle>
                Data Collection
            </MySectionTitle>
            <MyParagraph>
                First I notated the segments of the mashup to gather each samples 
                information, eg the song source, lyrics, and stop/start points. 
                Then for each song source, I noted the number of samples and the order 
                they were used in the mashup. I added this info in an Excel document 
                manually. I used ELAN to store precise start and stop times, which so 
                far has been used as a reference and not programatically. 
            </MyParagraph>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    At this point in data collection, this information was gathered
                    for the song 'No Air' by Jordin Sparks and Chris Brown.
                </Typography>
                <SongDataTable songId='song3' columns={['lyrics']}/>
            </Aside>
            <MyParagraph>
                I then reviewed where the samples were in the original song. This isn't 
                always a one-to-one match. For example, if a sample appears in a chorus, it will 
                repeat again (all of these songs have choruses, a pop song section).
                At this point I had some choices in how I collected the data. How would 
                I discern from where a sample appeared in the source song? I decided that 
                order was important, because the experience of time is, as I understand, 
                unstoppably moving forwards. In the order that the samples appeared in the 
                mashup, I looked for them in that order in the source song. 
            </MyParagraph>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    At this point in data collection, this information was gathered
                    for the song 'No Air' by Jordin Sparks ft Chris Brown.
                </Typography>
                <SongDataTable songId='song3' columns={['lyrics', 'sample_song_start']}/>
            </Aside>
            <MyParagraph>
                I would not go backwards, which could result in not finding a sample, 
                running out of bounds, going ‘overtime’.
            </MyParagraph>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    For example, this happened in the song 'Bleeding Love'.
                </Typography>
                <SongDataTable songId='song13' columns={['lyrics', 'sample_song_start']}/>
            </Aside>
            <MyParagraph>
                I then wanted to transform start times across the songs, because 
                across songs, a sample appearance at eg 0:25 would mean something 
                different. These song tracks are generally 3/4 minutes, but vary in 
                length. Using the proportion that it appeared could be a solution, 
                though it would be more precise than I wanted. As a percentage, values 
                would range from 1-100. Rounding and grouping could be done from here, 
                but I was not confident that its meaning made sense across songs; the 
                songs had another indicator of its points of time. The songs consisted 
                of similar sections, and this was a journey familiar to pop music listeners.
            </MyParagraph>
            <MyParagraph>
                These pop songs flow through a pattern of pop song sections. They feature 
                song sections like verses and choruses. There can be more 
                nuanced sections like pre-chorus, post-chorus, and a refrain. I tracked 
                intros, verses, choruses, bridges, and outros. I did not track for example 
                a pre-chorus; I grouped it in another section if I heard it.
            </MyParagraph>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    'No Air' with transformed section data
                </Typography>
                <SongDataTable songId='song3' columns={['lyrics', 'sample_song_start', 'sample_song_section']}/>
            </Aside>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    'Bleeding Love' with transformed section data
                </Typography>
                <SongDataTable songId='song13' columns={['lyrics', 'sample_song_start', 'sample_song_section']}/>
            </Aside>
            <MyParagraph>
                I chose a method with a goal of being objective, but definitely had discretion 
                based on what I thought was important. This work is focused on the global position 
                of the samples, or where they are in relation to the entire song. It also considers 
                order as an important factor.
            </MyParagraph>
            <MySectionTitle>
                Data Visualization
            </MySectionTitle>
            <MyParagraph>
                The next part of this project transitions to using this data in a data visualization.
                This data vis syncs the data to a visual of a sun at points of the day. 
                I thought it was a good unconscious relationship to a relative point in time, beginning, 
                middle, or end of a cycle.
            </MyParagraph>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    Essentially, the position of the sun is 'the time of day' of the sample in 
                    the source song. This is a rough translation, because the transformed data uses only 7
                    sun positions.
                </Typography>
            </Aside>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    Pictured below, are the seven sections of the day used in the visual, left to right, 1 to 7.
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    There are two sun colors used. The first (more blue/white sun color) is used 
                    for instrumental samples, and the second (more orange sun color) is used for vocal samples.
                </Typography>
                <Typography variant="overline">
                    instrumental sample images
                </Typography>
                <div
                    title="Seven pictures of the white/blue sun, spaced at seven equal points of the day"
                    style={{
                        height: '50px',
                        backgroundImage:  "url('/all_sun_positions_instrumental.png')",
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}
                />
                <Typography variant="overline">
                    vocal sample images
                </Typography>
                <div
                    title="Seven pictures of the orange/yellow sun, spaced at seven equal points of the day"
                    style={{
                        height: '50px',
                        backgroundImage:  "url('/all_sun_positions_vocal.png')",
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}
                />

            </Aside>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    This is the mapping of the song sections to sun position (1-7). These are song sections
                    that the samples are in, and then ordered based on the order of the "Viva la Vida" track. 
                    This track is the 
                    main instrumental track and is sourced entirely, so I followed that order. 
                    It is also a common order of the sample songs.
                </Typography>
                <DataTable data={songSectionMapping} />
            </Aside>
            <MyParagraph>
                With this framework, this data visualization is a video. The sun visuals are synced to the mashup audio.
                It is named 'Woven Time', likening the composer's role to sewing time together.
            </MyParagraph>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    Below is an excerpt of the video without audio.
                </Typography>
                <YoutubeEmbed embedId="Du1K_IehRCM" />
            </Aside>
            <MySectionTitle>
                Visual Representations for Sample Songs
            </MySectionTitle>
            <MyParagraph>
                On this webpage, the video is linked to information about the sample songs.
                Each song has a visual representations of the data, for example 
                the picture below.
            </MyParagraph>
            <Aside>
                <div
                    title="'Disturbia' by Rihanna song breakout with labels"
                    style={{
                        height: '250px',
                        maxWidth: '500px',
                        backgroundImage:  "url('/song_breakout_mapping.png')",
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}
                />
                <Typography variant="subtitle2">(A) song title</Typography>
                <Typography variant="subtitle2">(B) song artist</Typography>
                
                <Typography variant="subtitle2">(C) song's sample data transformed, sections 1-7 on horizontal linear track</Typography>
                <Typography variant="subtitle2"> -- sections (1 of 7) divided by black lines</Typography>
                <Typography variant="subtitle2"> -- sections show sun picture if the mashup uses a sample from this song at that time of day</Typography>
                
                <Typography variant="subtitle2">(D) song's raw data, start to end on horizontal linear track</Typography>
                <Typography variant="subtitle2"> -- song sections are divided by black lines </Typography>
                <Typography variant="subtitle2"> -- samples are highlighted in purple and samples currently played in the video are green</Typography>
            </Aside>
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

export default WovenTimeArticle;
