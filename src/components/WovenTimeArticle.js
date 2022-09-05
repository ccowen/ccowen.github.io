import { Typography } from "@mui/material";

import ArticleTextWrapper from "./ArticleTextWrapper";
import Aside from "./Aside";
import SongDataTable from "./SongDataTable";
import DataVisSection from "./DataVisSection";
import songData from '../data/songData.json';

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
                focused on the global position of the samples, or like where they are in 
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
                I discern frpm where a sample appeared in the source song? I decided that 
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
                I then wanted to normalize start times across the songs, because 
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
                    'No Air' with normalized section data
                </Typography>
                <SongDataTable songId='song3' columns={['lyrics', 'sample_song_start', 'sample_song_section']}/>
            </Aside>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    'Bleeding Love' with normalized section data
                </Typography>
                <SongDataTable songId='song13' columns={['lyrics', 'sample_song_start', 'sample_song_section']}/>
            </Aside>
            <Aside>
                <Typography variant="caption" gutterBottom>
                    I chose a method with a goal of being objective, but definitely had discretion 
                    based on what I thought was important. This work is focused on the global position 
                    of the samples, or where they are in relation to the entire song. It also considers 
                    order as an important factor.
                </Typography>
            </Aside>
            <MySectionTitle>
                Data Visualization
            </MySectionTitle>
            <MyParagraph>
                todo transition note, wanted to display this data in easier way, good data vis tries to do this
                This data visualization syncs the data points to a visual of a sun at points of the day. 
                I thought it was a good unconscious relationship to a relative point in time, beginning, 
                middle, or end of a cycle.
            </MyParagraph>
            <Aside>
                note about seven sections, normalized data
                put picture strips of sun, vocal and instrumental
            </Aside>

            <MyParagraph>
                With this framework, this data visualization is a video. The sun visuals are synced to the mashup audio.
                It is named 'Woven Time', likening the composer's role to sewing time together.
            </MyParagraph>
            <MySectionTitle>
                Visual Representations for Sample Songs
            </MySectionTitle>
            <MyParagraph>
                There are visual representations for each sample song, for example the picture below.
            </MyParagraph>
            <Aside>
                <Typography variant="subtitle2">(A) song title</Typography>
                <Typography variant="subtitle2">(B) song artist</Typography>
                <Typography variant="subtitle2">(C1) song raw data horizontal linear track</Typography>
                <Typography variant="subtitle2">(C2) song sections divided by black dashed lines </Typography>
                <Typography variant="subtitle2">(C3) samples highlighted in purple</Typography>
                <Typography variant="subtitle2">(D1) song sample data normalized in horizontal track</Typography>
                <Typography variant="subtitle2">(D2) normalized data section (1 of 7) divided by black dashed lines</Typography>
                <Typography variant="subtitle2">(D3) active sections show sun picture</Typography>
            </Aside>

        </ArticleTextWrapper>

        <div style={{margin: '25px 0px'}}>
            <DataVisSection/>
        </div>

        <ArticleTextWrapper>
            <MySectionTitle>
                Notes
            </MySectionTitle>
            <MySectionTitle>
                Extension of vocal samples
            </MySectionTitle>

            <MySectionTitle>
                thoughts about 'overtime'
                {/* frame edge */}
            </MySectionTitle>
            <MySectionTitle>
                lyrics that reference time
            </MySectionTitle>
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
