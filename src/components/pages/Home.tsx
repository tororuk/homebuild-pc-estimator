import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { memo, FC, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { PartsSelectModal } from '../organisms/user/PartsSelectModal';

import { PartsTypeCard } from '../organisms/user/PartsTypeCard';
// import { UserDetailModal } from '../organisms/user/UserDetailModal';

export const Home: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickPartsType = useCallback(() => {
    onOpen();
  }, []);

  return (
    <>
      <Wrap p={{ base: 4, md: 10 }} justify="center">
        <WrapItem key={1} mx="auto">
          <PartsTypeCard
            id={1}
            imageUrl="https://source.unsplash.com/random"
            name={'CPU'}
            onClick={onClickPartsType}
          ></PartsTypeCard>
        </WrapItem>
        <WrapItem key={1} mx="auto">
          <PartsTypeCard
            id={1}
            imageUrl="https://source.unsplash.com/random"
            name={'グラフィックボード'}
            onClick={onClickPartsType}
          ></PartsTypeCard>
        </WrapItem>
        <WrapItem key={1} mx="auto">
          <PartsTypeCard
            id={1}
            imageUrl="https://source.unsplash.com/random"
            name={'マザーボード'}
            onClick={onClickPartsType}
          ></PartsTypeCard>
        </WrapItem>
        <WrapItem key={1} mx="auto">
          <PartsTypeCard
            id={1}
            imageUrl="https://source.unsplash.com/random"
            name={'CPUクーラー'}
            onClick={onClickPartsType}
          ></PartsTypeCard>
        </WrapItem>{' '}
        <WrapItem key={1} mx="auto">
          <PartsTypeCard
            id={1}
            imageUrl="https://source.unsplash.com/random"
            name={'メモリ'}
            onClick={onClickPartsType}
          ></PartsTypeCard>
        </WrapItem>
        <WrapItem key={1} mx="auto">
          <PartsTypeCard
            id={1}
            imageUrl="https://source.unsplash.com/random"
            name={'HDD/SSD'}
            onClick={onClickPartsType}
          ></PartsTypeCard>
        </WrapItem>
        <WrapItem key={1} mx="auto">
          <PartsTypeCard
            id={1}
            imageUrl="https://source.unsplash.com/random"
            name={'ケース'}
            onClick={onClickPartsType}
          ></PartsTypeCard>
        </WrapItem>
        <WrapItem key={1} mx="auto">
          <PartsTypeCard
            id={1}
            imageUrl="https://source.unsplash.com/random"
            name={'電源'}
            onClick={onClickPartsType}
          ></PartsTypeCard>
        </WrapItem>
        <WrapItem key={1} mx="auto">
          <PartsTypeCard
            id={1}
            imageUrl="https://source.unsplash.com/random"
            name={'ケースファン'}
            onClick={onClickPartsType}
          ></PartsTypeCard>
        </WrapItem>
        <WrapItem key={1} mx="auto">
          <PartsTypeCard
            id={1}
            imageUrl="https://source.unsplash.com/random"
            name={'その他'}
            onClick={onClickPartsType}
          ></PartsTypeCard>
        </WrapItem>
      </Wrap>
      <PartsSelectModal user="partssss" isOpen={isOpen} onClose={onClose} />
    </>
  );
});
