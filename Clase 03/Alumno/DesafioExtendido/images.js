const { get } = require('request')
const { writeFile } = require('fs')

async function getPage (id){
  return new Promise((resolve, reject) => {
    get(`https://www.pexels.com/popular-photos/`, (error, response, body) => {
      resolve(body)
    })
  })
}

getPage()
  .then((body) => new Set(body.match(/data-photo-id="(\d+)"/gi)))
  .then((s) => Array.from(s.values(), (attr) => Number(attr.slice('data-photo-id="'.length, -1))))
  .then((ids) =>
    ids.map(
      (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?w=1920&amp;auto=compress&amp;cs=tinysrgb`
    )
  )
  .then((result) => console.log(result))
