export default (params) => {
  const query = {};

  if (params.sorting.popular) {
    query.order_by = 'popular';
  } else if (params.sorting.oldest) {
    query.order_by = 'oldest';
  } else {
    query.order_by = 'latest';
  }

  query.query = params.header;
  query.page = params.paging.page;
  query.per_page = params.paging.pageSize;

  return query;
};
