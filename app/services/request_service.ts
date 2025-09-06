import env from '#start/env'
import router from '@adonisjs/core/services/router'

export default class RequestService {
  static getForwardUrl(forward?: string) {
    if (!forward) return null

    try {
      const url = new URL(forward, env.get('APP_DOMAIN'))
      const route = router.match(url.pathname, 'GET')

      if (route) {
        return url.pathname + url.search
      }
    } catch (e) {}

    return null
  }
}
