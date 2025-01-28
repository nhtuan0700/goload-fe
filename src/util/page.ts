export function getTotalPage(totalCount: number, limit: number) {
  return Math.ceil(totalCount/ limit)
}
