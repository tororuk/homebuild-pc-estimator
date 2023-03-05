import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { memo, FC } from 'react';

type Props = {
  id: number;
  imageUrl: string;
  name: string;
  onClick: () => void;
};

export const PartsTypeCard: FC<Props> = memo((props) => {
  const { id, imageUrl, name, onClick } = props;
  return (
    <>
      <Box
        w="260px"
        h="260"
        bg="white"
        borderRadius="10px"
        shadow="md"
        p={4}
        _hover={{ cursor: 'pointer', opacity: 0.8 }}
        onClick={() => onClick()}
      >
        <Stack textAlign="center">
          <Image
            borderRadius="full"
            boxSize="160px"
            src={imageUrl}
            alt={name}
            m="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="sm" color="gray">
            {name}
          </Text>
        </Stack>
      </Box>
    </>
  );
});
