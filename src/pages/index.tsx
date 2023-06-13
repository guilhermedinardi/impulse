import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Layout } from '../layout/Main';

import items from '../data/data';
import { VideoCard } from '../components/VideoCard/VideoCard';
import { Grid } from '@mui/material';

export default function Home() {
  return (
    <Layout title="Impulse">
      <Box>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          fontWeight="700"
          paddingBottom={6}
        >
          Bem-Vindos à Plataforma Impulse
        </Typography>
        <Grid container spacing={4}>
          {items.map((item) => (
            <Grid
              container
              key={item.id}
              item
              xl={4}
              lg={6}
              md={6}
              sm={8}
              xs={12}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <VideoCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
