import http from '../common/http'

export function getIndexActiveList() {
  return http.get('/api/activity/home')
}