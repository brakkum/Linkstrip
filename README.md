# Linkstrip
## A small library for generating shorter links
#### Using the https://linkst.rip/ API

#### Install

`$ npm i linkstrip`

#### Usage

```javascript
// frontend
import { Linkstrip } from "linkstrip";
// backend
import { NodeLinkstrip as Linkstrip } from "linkstrip";
// const Linkstrip = require("linkstrip").NodeLinkstrip;

let ls = new Linkstrip("https://linkst.rip/", "linkstrip");
ls.getLinkAsync()
  .then(link => console.log(link))
  .catch(e => console.log(e));
```
The Linkstrip constructor can take up to 2 arguments, the url and the slug for the link to be generated, respectively.
There are three methods on the Linkstrip class:

`Linkstrip.setUrl(:string)` sets the url for the link to be generated.

`Linkstrip.setSlug(:string)` sets a custom slug for the linkst.rip url. Slugs must be between 5 and 100 characters, and may only contain a-z, 0-9, -_.~

`Linkstrip.getLinkAsync()` sends the url and slug info to the linkst.rip API, and returns a link if everything is acceptable. If not, an error will be thrown.
