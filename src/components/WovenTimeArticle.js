import { Typography, Grid } from "@mui/material";

import Aside from "./Aside";
import SongDataTable from "./SongDataTable";
import DataVisSection from "./DataVisSection";

function WovenTimeArticle() {

  return (
    <div>
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8}>
            <Typography variant="h2" >
                Woven Time
            </Typography>
            <Typography variant="h3" gutterBottom>
                thoughts on our experience of time in a mashup
            </Typography>
            <Typography variant="h5" gutterBottom>
                Overview
            </Typography>
            <Typography variant="body1" gutterBottom>
                This project explores our experience listening to an audio mashup.
                Mashups bring material together from different sources, and in this
                example, intended for an audience familiar with the source material.
                How do we process the pieces of this material brought together in a
                new form?
            </Typography>
            <Typography variant="body1" gutterBottom>
                A listener may relate to the source material emotionally, socially, 
                or structurally remembering the source material. So I think there are 
                many interesting ways to look at this question. This project's direction 
                goes specifically into structural references. I do not think it is most 
                important; I went this way because it was the thought I wanted to pursue.
            </Typography>
            <Typography variant="body1" gutterBottom>
                I choose to look at this question for this mashup by the time position of 
                the tracks. What is our experience of time here when we have experienced 
                the source material in time previously? Could I quantify samples by time 
                placement and what would that show? The direction of this visualization is 
                focused on the global position of the samples, or like where they are in 
                relation to the entire song. It could also be interesting to review this 
                more locally, where they are in a phrase or song section.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Method
            </Typography>
            <Typography variant="body1" gutterBottom>
                Here, I looked at 'The United State of Pop 2008', a mashup by DJ 
                Earworm that samples the top 25 songs in the United States in 2008. 
                The source material is chosen by popularity in a region, so familiarity 
                with the sourced songs is probably intended for the millions of people
                who steamed the songs.
            </Typography>
            <Typography variant="body1" gutterBottom>
                I collected data based on placement to connect the use of the 
                sample in the mashup to the sample from the original song. This was based 
                on my ordered experience of listening to song tracks 
                repeatedly, and then later the mashup when released.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Song tracks are set to play for a period of time. The track begins, 
                plays, and ends; this process can repeat in exactly the same order. I 'could' 
                have formed some kind of memory of these songs over the course of the year, 
                because I listened to the radio and heard the chart topping songs many times. 
                With this theory, I wanted to quantify then visualize how a mashup draws on 
                existing experiences to create a new experience from references. Specifically 
                based on ordered, time references from the original song tracks.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Data Collection
            </Typography>
            <Typography variant="body1" gutterBottom>
                First I notated the segments of the mashup to gather each samples 
                information, eg the song source, lyrics, and stop/start points. 
                Then for each song source, I had the number of samples and the order 
                they were used in the mashup. I added this info in an Excel document 
                manually. I used ELAN to store precise start and stop times, which so 
                far has been used as a reference. 
            </Typography>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    At this point in data collection, this information was gathered
                    for the song 'No Air' by Jordin Sparks ft Chris Brown.
                </Typography>
                <SongDataTable songId='song3' columns={['lyrics']}/>
            </Aside>
            <Typography variant="body1" gutterBottom>
                Then I reviewed where the samples were in the original song. This isn't 
                always a one to one match. Like if a sample appears in a chorus, it will 
                repeat again (all of these songs have choruses, a pop song section).
                At this point I had some choices in how I collected the data. How would 
                I discern where the sample came from in the source song? I decided that 
                order was important, because the experience of time is, as I understand, 
                unstoppably moving forwards. In the order that the samples appeared in the 
                mashup, I looked for them in that order in the source song. 
            </Typography>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    At this point in data collection, this information was gathered
                    for the song 'No Air' by Jordin Sparks ft Chris Brown.
                </Typography>
                <SongDataTable songId='song3' columns={['lyrics', 'sample_song_start']}/>
            </Aside>
            <Typography variant="body1" gutterBottom>
                I would not go backwards, which could result in not finding a sample, 
                running out of bounds, going ‘overtime’.
            </Typography>
            <Aside>
                <Typography variant="subtitle2" gutterBottom>
                    For example, this happened in the song 'Bleeding Love'.
                </Typography>
                <SongDataTable songId='song13' columns={['lyrics', 'sample_song_start']}/>
            </Aside>
            <Typography variant="body1" gutterBottom>
                Then I wanted to normalize start times across the songs, because 
                across songs, a sample appearance at eg 0:25 would mean something 
                different. These song tracks are 3/4 minutes generally, but vary in 
                length. Using the proportion that it appeared could be a solution, 
                though it would be more precise than I wanted. As a percentage, values 
                would range from 1-100. Rounding and grouping could be done from here, 
                but I was not confident that it’s meaning made sense across songs; the 
                songs had another indicator of its points of time. The songs consisted 
                of similar sections, and this was a journey familiar to pop music listeners.
            </Typography>
            <Typography variant="body1" gutterBottom>
                These pop songs flow through a pattern of pop song sections. They feature 
                song sections like most generally verses and choruses. There can be more 
                nuanced sections like pre-chorus, post-chorus, and a refrain. I tracked 
                intros, verses, choruses, bridges, and outros. I did not track for example 
                a pre-chorus; I grouped it in another section if I heard it.
            </Typography>
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
                    order as important.
                </Typography>
            </Aside>
        </Grid>
    </Grid>
    <DataVisSection/>
    </div>
  );
}

export default WovenTimeArticle;
