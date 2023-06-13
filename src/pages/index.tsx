import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Layout } from '../Layout/Main';

import items from '../data/data'
import { VideoCard } from '../components/VideoCard/VideoCard';
import { Grid } from '@mui/material';

export default function Home() {
  return (
    <Layout title="Impulse">
      <Box p={2}>
        <Typography 
          variant="h3" 
          gutterBottom
          align="center"
          fontWeight="700"
        >
          Bem-Vindos à Plataforma Impulse 
        </Typography>
        <Grid container spacing="4">
          {items.map((item) => (
            <Grid key={item.id} item xl={4} lg={4} md={4} sm={6} xs={12}>
              <VideoCard {...item}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
