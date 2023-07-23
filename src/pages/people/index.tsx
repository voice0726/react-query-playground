import { useState } from "react";

import { usePeople } from "@/features/people/api/list-people";

const People = () => {
  const [page, setPage] = useState(0);

  const {
    isLoading,
    isError,
    data,
    isFetching,
    isPreviousData,
  } = usePeople();

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Something went wrong!</div>
      ) : (
        <div>
          {data.records.map(person => (
            <p key={person.id}>{person.name}</p>
          ))}
        </div>
      )}
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage(old => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>
      {' '}
      <button
        onClick={() => {
          if (!isPreviousData && data?.hasMore) {
            setPage(old => old + 1)
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </div>
  )
}
export default People;
