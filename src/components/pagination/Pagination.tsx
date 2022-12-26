import React, { Dispatch, SetStateAction } from 'react';
import Button from 'src/components/common/Button';
import * as Styled from './Pagination.style';

type PaginationPropType = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  hasMore: boolean | undefined;
  totalPages: number | undefined;
};

const Pagination = (props: PaginationPropType) => {
  const { currentPage, setCurrentPage, hasMore, totalPages } = props;

  return (
    <Styled.Container>
      <Button
        isBorder={true}
        themeId={'grey'}
        marginRight={'0px'}
        size={'MEDIUM'}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        이전 페이지
      </Button>
      {new Array(totalPages).fill('').map((num, i) => (
        <Button
          themeId={'grey'}
          marginRight={'0px'}
          size={'MEDIUM'}
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          isActive={Boolean(currentPage === i + 1)}
        >
          {i + 1}
        </Button>
      ))}
      <Button
        isBorder={true}
        themeId={'grey'}
        marginRight={'0px'}
        size={'MEDIUM'}
        disabled={!hasMore}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        다음페이지
      </Button>
    </Styled.Container>
  );
};

export default Pagination;