import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { TextUnderline } from '@/components/TextUnderline';

const STEPS = [
  {
    title: 'Enter your Destination',
    text: 'Destination location and other details.',
  },
  {
    title: 'Enter your Pick-up Details',
    text: 'Location, date, and time of pick-up.',
  },
  {
    title: 'Submit & Get Instant Reply',
    text: 'Click submit and get a price instantly.',
  },
];

export const GettingStarted = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>
        <Heading as={'h3'} textAlign={'center'} mb={{ base: 14, sm: 16 }}>
          Getting started in <TextUnderline>3 easy steps</TextUnderline>
        </Heading>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={'space-between'}
          align={{ base: 'center', md: 'flex-start' }}>
          {STEPS.map((step, index) => (
            <Stack
              textAlign={{ base: 'left', md: 'center' }}
              align={{ base: 'flex-start', md: 'center' }}
              spacing={4}
              key={step.title}
              maxW={{ base: 'full', md: 'xs' }}
              mt={{ base: 10, md: 0 }}
              _first={{
                mt: 0,
              }}
              px={4}>
              <Flex
                w={10}
                h={10}
                bg={useColorModeValue('green.100', 'green.900')}
                color={useColorModeValue('green.700', 'green.300')}
                fontWeight={700}
                align={'center'}
                justify={'center'}
                fontSize={'sm'}
                rounded={'md'}>
                0{index + 1}
              </Flex>
              <Text
                fontFamily={'heading'}
                fontSize={'xl'}
                color={useColorModeValue('gray.700', 'white')}>
                {step.title}
              </Text>
              <Text color={'gray.500'}>{step.text}</Text>
            </Stack>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};
