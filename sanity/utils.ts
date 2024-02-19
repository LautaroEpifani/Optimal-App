interface BuildQueryParams {
  type: string;
  query: string;
  technology: string;
  page: number;
  perPage?: number;
}

export function buildQuery(params: BuildQueryParams) {
  const { type, query, technology, page = 1, perPage = 10 } = params;

  const conditions = [`*[_type=="${type}"`];

  if (query) conditions.push(`title match "*${query}*"`);

  if (technology) conditions.push(`"${technology}" in technologies`);

  const offset = (page - 1) * perPage;
  const limit = perPage;

  if (conditions.length > 1) {
    return `${conditions.join(' && ')}][${offset}...${limit}]`;
  } else {
    return `${conditions[0]}][${offset}...${limit}]`;
  }
}
