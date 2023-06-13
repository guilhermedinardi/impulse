import { Box, Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { VideoCardProps } from '../../types/video';

export const VideoCard = ({
  title,
  description,
  image,
  instructor,
  rating,
}: VideoCardProps) => {
  return (
    <Box>
      <img alt={title} src={image} width={450} height={300} />
      <Box>
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            color="textPrimary"
            fontWeight={600}
          >
            {title}
          </Typography>
          <Typography
            display="block"
            variant="body2"
            color="textSecondary"
            text-align="left"
            paragraph={true}
            width={280}
          >
            {description}
          </Typography>
          <Typography display="block" variant="subtitle1" color="textSecondary">
            <b>Por:</b> {instructor}
          </Typography>
          <Box
            sx={{
              width: 250,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              display="block"
              variant="subtitle1"
              color="textSecondary"
              fontWeight={600}
              lineHeight={'inherit'}
            >
              Avaliação:
              <Rating
                name="text-feedback"
                readOnly
                value={rating}
                precision={0.5}
                sx={{
                  paddingLeft: 1,
                  fontSize: 20,
                  marginTop: 1,
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
