import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Ranking from './Ranking';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider'; 
import ProgressBar from './ProgressBar';
import hoverStyle from "../styles/hoverStyle";
import { fetchTrainingEntries } from '../helpers/fetchData';

export default function ReusableBox({ boxWidth, boxHeight, boxText, showStack, courseData }) {
    const [trainingEntries, setTrainingEntries] = React.useState([]);
    const [isFetching, setIsFetching] = useState(false);

    
    useEffect(() => {
        fetchMoreEntries();
    }, []);

    const fetchMoreEntries = async () => {
        if (isFetching) return;
        setIsFetching(true);
        
        try {
            const newEntries = await fetchTrainingEntries();
            setTrainingEntries(prevEntries => {
                const filteredEntries = prevEntries.concat(newEntries).filter((entry, index) => index + 1 !== 15);
                const fifteenthEntry = prevEntries.concat(newEntries).find((entry, index) => index + 1 === 15);
                return [...filteredEntries, fifteenthEntry].filter(Boolean);
            });    
        } catch (error) {
            console.error('Error fetching training entries:', error);
        } finally {
            setIsFetching(false);
        }
    };

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) fetchMoreEntries();
    };

    return (
        <Container maxWidth={false} disableGutters sx={{ width: `${boxWidth}vw`, paddingLeft: 0, paddingRight: 0, borderRadius: 5, overflow: 'hidden', border: '1px solid blac'}}>
            {courseData ? (
            <>
                <Box sx={{ ...hoverStyle, bgcolor: 'white', height: `${boxHeight}vh`, color: 'black' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 2,
                        width: '100%', 
                        fontWeight: 'bold', 
                        pt: 2,
                        pb: 1, 
                        boxSizing: 'border-box',
                        backgroundColor: '#EAFCC5', 
                    }}>
                        {courseData.course_name}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <ProgressBar perc={courseData.progress}/>
                    </Box>
                    <Divider sx={{ borderStyle: 'dotted', mt:6 }} />
                    <Box sx={{
                        position: 'relative', 
                        pt: 2, pb: 2, pr: 2, 
                    }}>
                        <Box sx={{
                            position: 'absolute', 
                            bottom: 0, 
                            right: 0, 
                            fontWeight: 'bold', 
                            fontSize: '0.75rem',
                            p: 1, 
                        }}>
                            {courseData.course_duration}
                        </Box>
                    </Box>
                </Box>
            </>
            ) : (
            <>
                <Box sx={{ bgcolor: 'white', height: `${boxHeight}vh`, color: 'black', overflowY: 'scroll' }} onScroll={handleScroll}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, fontWeight: 'bold' }}>
                        {boxText}
                    </Box>
                    {showStack && (
                    <Stack spacing={2}>
                        {trainingEntries.map((entry, index) => (
                            <Ranking key={index} score={entry} ranking={index + 1} isHighlighted={index + 1 === 15}/>
                        ))}
                    </Stack>
                )}
                </Box>
            </>
            )}
        </Container>
    );
}
