/*================ Users =======================*/
export { getUsers, createUser, getUser, changePassword } from "./user";
export { authenticate, updatePassword } from "./user";
export { activeAcount, profile, googleAuth } from "./user";
export { googleCallback, onePostsUser } from "./user";
/*================ Posts =======================*/
export { getPosts, getPost, createPost } from "./post";
export { getPostsUser, deletePost } from "./post";
/* function arregloDeObjetos(num, pal, arr = [], i = 1) {
  if (arr.length >= [num]) return arr;
  return arregloDeObjetos(num, pal, [...arr, { [pal]: i }], i + 1);
} */

export { allPromises, onePromise, routeNext, findPost } from "./functions";
