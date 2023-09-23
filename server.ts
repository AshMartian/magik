const id = 'rT8hEC3uZyzJfJ718';

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/pw[^"]*)"/g
function extractPhotos(content) {
  const links = new Set()
  let match
  while (match = regex.exec(content)) {
    links.add(match[1])
  } 
  return Array.from(links)
}
// Lambda function to extract photos from Google Photos album
export const handler = async (event?, context?) => {
  const response = await fetch(
    `https://photos.app.goo.gl/${id}`
  );

  const data = await response.text();

  const photos = extractPhotos(data);

  console.log(photos);
  return {
    statusCode: 200,
    body: JSON.stringify(photos),
    // cors headers
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  };
};

handler();