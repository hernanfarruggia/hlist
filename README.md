# hlist
A work in progress todo app but with a huge ambition :)

### Initial features:

- Add new TODO by pressing + button ot hitting Enter key
- Set TODO as Done by pressing Check button
- Set TODO as Pending by pressing Undo button
- Delete TODO by pressing Trash button
- Load TODO's in different sections depending on their state ['pending' || 'done']

### Coming soon features:

- ~~Integration with MongoDB~~ :heavy_check_mark:
- ~~CSS Improvements (Bootstrap implemented)~~ :heavy_check_mark:
- ~~Font Awesome support for better styling~~ :heavy_check_mark:
- Update TODO content, with the ability of adding more information to it as description or tags (?)
- Multi user to allow login and private TODO lists
- Some other stuffs I didn't have the time yet to decide... :D

### Code Improvements

- Better error handling
- Cleanup small remaining bad code, example:
```javascript
const myConst = (param) => {}

// Convert to:

const myConst = param => {}
```