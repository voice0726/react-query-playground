import { useState } from 'react';

import { usePeople } from '@/features/people/api/list-people';

import Pagination from '@/components/Pagination';

const People = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, data, isFetching, isPreviousData } =
    usePeople(page);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Something went wrong!</div>
      ) : (
        <div>
          {data.records.map((person) => (
            <p key={person.id}>{person.name}</p>
          ))}
        </div>
      )}
      <span>Current Page: {page}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        Previous Page
      </button>{' '}
      <button
        onClick={() => {
          if (!isPreviousData && data?.hasMore) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
      {data && (
        <Pagination
          current={page}
          setPage={setPage}
          total={data.total}
          perPage={data.pageSize}
        />
      )}
    </div>
  );
};
export default People;
