import { Box, ImageList, Typography } from "@mui/material";

type VideoCardProps = {
  id: number,
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  instructor: string;
  rating: number;
};

export const VideoCard = ({
  id,
  title,
  description,
  image,
  category,
  duration,
  instructor,
  rating,
}: VideoCardProps) => {
  return (
    <Box>
      <img alt={title} src={image} width={300} height={300} />
      <Box display="flex" mt="1">
        <Box>
          <Typography 
            gutterBottom 
            variant="body1" 
            color="textPrimary"
          >
            {title}
            {description}
          </Typography>
          <Typography 
            display="block" 
            variant="body2" 
            color="textSecondary"
          >
            Por: {instructor}
          </Typography>
          <Typography 
            display="block" 
            variant="body2" 
            color="textSecondary"
          >
            {rating}
          </Typography>
        </Box>
      </Box>

    </Box>
  );
}
