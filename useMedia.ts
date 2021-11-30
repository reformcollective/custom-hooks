import { desktop, tablet, mobile } from 'styles/media'

export const useMedia = (fw: any, d: any, t: any, m: any) => {

  if (window.innerWidth > desktop) {
    return fw
  } else if (window.innerWidth > tablet) {
    return d
  } else if (window.innerWidth > mobile) {
    return t
  } else {
    return m
  }
}