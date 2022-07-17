# Image resize API

This is an ExpressJS based API which returns resized images from a list of saved images.

## Usage

`/api/images?filename=Filename&width=Width&height=Heigth`

list of query params:

- filename: required
  Name of the image to be returned
- width: optional
  Width of the image we need resized
- height: optional
  Height of the image we need resized

If width and height are not specified, it returns the default image.
If both width and height params are specified, it saves the resized image as `[Filename]_[Width]_[Height]`.
If one of width or height is not specified, it retains the option not specified and only alters the specified parameter. The option missing is replaced by the letter `n` (natural) when saving the file

## Scripts

- Start local development server

```
npm run dev
```

- Run Unit Tests

```
npm run test
```

- Create build

```
npm run build
```

- Run build

```
npm start
```
