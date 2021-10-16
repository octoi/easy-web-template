# Easy Web Template 🤩

Simple easy to set up web template using HTML, CSS & JS

anyone can customize website with `data.json` in root directory

## Customization

Navigate to `data.json` you will hit up something like this

```json
{
  "name": "Rick Astley",
  "description": "Singer, Song writer, nerd",
  "image": "rick.png",
  "isAssetImage": true,
  "social": {
    "twitter": "rickastley",
    "instagram": "officialrickastley",
    "email": "sample@sample.com",
    "website": "https://www.rickastley.co.uk/"
  }
}
```

You can figure out what its from the name I guess, if not create an issue .

> Image can be direct URL or a local image, Local image should be placed in `/images` folder and `isAssetImage` should be true .
>
> I know you didn't understand this checkout out below example

For local image 

> local image should be in `/images` folder

```
- assets
- images
	- myimage.png
- data.json
- index.html
- LICENSE
- README.md
```

```json
{
  // don't forget to include the rest of properties
  "image": "myimage.png",
  "isAssetImage": true,
}
```

For network image

> It should be direct link, means when you click the link you should get into image

```json
{
  // don't forget to include the rest of properties
  "image": "https://www.w3schools.com/html/img_girl.jpg", // your image url
  "isAssetImage": false,
}
```
