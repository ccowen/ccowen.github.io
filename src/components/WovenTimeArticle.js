import { Typography } from "@mui/material";

import ArticleTextWrapper from "./ArticleTextWrapper";
import Aside from "./Aside";
import SongDataTable from "./SongDataTable";
import DataTable from "./DataTable";
import songSectionMapping from '../data/songSectionMapping.json';
import YoutubeEmbed from "./YoutubeEmbed";
import WovenTimeArticleInteractive from "./WovenTimeArticlelnteractive";


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


function WovenTimeArticle() {

  return (
    <div>
        <ArticleTextWrapper>
            <Typography variant="h3" gutterBottom>
                Thoughts on our experience of time in a mashup, 'Woven Time'
            </Typography>
            <MySectionTitle style={{marginBottom: '20px'}}>
                Caitlin Cowen, August 2022
            </MySectionTitle>
            <MyParagraph>
                Our experience of time is simplest described like this- we move forward, and 
                measure periods by units like seconds, minutes, hours, etc. But I don't really 
                think that's all it is to us.
            </MyParagraph>
            <MyParagraph>
                Time is also very not simple. As an experience, not all hours or minutes feel 
                like they are the same length. And when we reminisce about the past or flash 
                to an imagined future, it's like we are transporting ourselves to a different 
                moment. To me in some way, our brains experience that again.
            </MyParagraph>
            <MyParagraph>
                I do not mean to say that I do not live in a world where I gauge time linearly; 
                I do prepare an hour ahead of time to get ready to catch a bus to work and I do
                set my lights to turn on when it gets dark outside. What I want to do here is
                to look at these meanings -the simple and not simple- simultaneously.
            </MyParagraph>
            <MyParagraph>
                That's where I ended up in this project, exploring this question of a variable
                time in a human experience. This is about an audio mashup and I hope that the 
                data visualization itself is bound to the experience of a variable time. 
            </MyParagraph>
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
                or structurally, so I think there are many interesting ways to 
                look at this question. This project's direction 
                goes specifically into structural references, not because I think that is most 
                important because it was the thought I wanted to pursue.
            </MyParagraph>
            <MyParagraph>
                I choose to look at this question for this mashup by the time position of 
                the tracks. What is our experience of time when we have experienced 
                the source material in time previously? Could I quantify samples by time 
                placement and what would that show? The direction of this visualization is 
                focused on the global position of the samples, or where they are in 
                relation to the entire song. However, it would also be interesting to focus 
                more locally, on where the samples are relative to a phrase or song section.
            </MyParagraph>
            <MySectionTitle>
                Method
            </MySectionTitle>
            <MyParagraph>
                In this exercise, I looked at 'The United State of Pop 2008', a mashup by DJ 
                Earworm that samples the top 25 songs in the United States in 2008. 
                The source material is chosen by popularity in a region, so familiarity 
                with the sourced songs is probably intended for the millions of people
                who streamed the songs.
            </MyParagraph>
            <MyParagraph>
                I collected data on placement to connect the use of the 
                sample in the mashup to the sample from the original song. This was based 
                on my ordered experience of listening to song tracks 
                repeatedly, and then later to the mashup.
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
                I reviewed where the samples appeared in the original song. This wasn't 
                always a one-to-one match. For example, if a sample appeared in a chorus, it would 
                repeat again (all of these songs have choruses, a pop song section).
                I therefore had some choices in how I collected the data. How would 
                I discern where a sample appeared in the source song? I decided that 
                order was important, because the experience of time is, as I understand, 
                unstoppably moving forwards, so I decided to look for the samples in the source song 
                in the same order that they appeeared in the mashup. 
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
                I wanted to transform start times across the songs, 
                because a sample appearance at 0:25 would mean something 
                different depending on the length of the song (which typically ranged from 3 to 4 minutes).
            </MyParagraph>
            <MyParagraph>
                Using a proportion appeared to be a solution, 
                though it would be more precise than I wanted. As a percentage, values 
                would range from 1-100. Rounding and grouping could be done, 
                but I was not confident that the meaning would make sense across songs.
            </MyParagraph>
            <MyParagraph>
                Instead, I looked at the songs' other indicators of points of time. The songs consisted 
                of similar sections, a journey familiar to pop music listeners.
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
                The next part of this project transitioned to a data visualization.
                This data vis syncs the data to a visual of the sun at different points of the day. 
                I thought it was a good unconscious relationship to a relative point in time&mdash;the beginning, 
                middle, or end of a cycle.
            </MyParagraph>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    Essentially, the position of the sun is 'the time of day' of the sample in 
                    the source song. This is a rough translation, because the transformed data uses only 7
                    sun positions.
                </Typography>
            </Aside>
            <MyParagraph>
                Pictured below, are the seven sections of the day used in the visual, left to right, 1 to 7.
            </MyParagraph>
            <MyParagraph>
                There are two sun colors used. The first (more blue/white sun color) is used 
                for instrumental samples, and the second (more orange sun color) is used for vocal samples.
            </MyParagraph>
            <Aside>
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
                With this framework, this data visualization becomes a video. The sun visuals are synced to the mashup audio.
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
                Each song has a visual representation of the data, for example 
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
                <Typography variant="subtitle2"> (+) not pictured, popups with sample info are visible on mouse hover for sections in C and D </Typography>

            </Aside>

        </ArticleTextWrapper>

        <WovenTimeArticleInteractive/>

    </div>
  );
}

export default WovenTimeArticle;
