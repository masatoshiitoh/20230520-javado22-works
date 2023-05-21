/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const movieId = url.searchParams.get('movie-id')

  // キーを指定してKVから値を取得
  let id = await YOUTUBE_LIST.get(movieId)
  // 値が存在しない場合は新しい値を設定
  if (!id) {
    id = 'youtube_video_id' // ここに保存したいYouTubeの動画IDを設定
    await YOUTUBE_LIST.put('my-key', id)
  }

  const response = new Response(id)

  // CORSヘッダーを設定
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')

  return response

//  return new Response(id)
}
