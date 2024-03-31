import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import hoverStyle from '../styles/hoverStyle';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', 
  ...hoverStyle,
}));

export default function Ranking({ score, ranking, isHighlighted }) {
  const iconColor = ranking === 1 ? 'gold' : ranking === 2 ? 'silver' : ranking === 3 ? 'brown' : 'inherit';
  const highlightStyle = isHighlighted ? { backgroundColor: 'lightblue', color: '#000' } : {};
  
  return (
    <Box sx={{ width: '100%' }}>
      <Item sx={{ ...highlightStyle }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 2, textShadow: '0.5px 0.5px 0px #000' }}>
              {ranking}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <AccountCircleIcon sx={{ color: iconColor }} />
          </Box>
          <Box flexGrow={1}>Name Placeholder</Box>
          <Box>{score}</Box>
      </Item>
    </Box>
  );
}