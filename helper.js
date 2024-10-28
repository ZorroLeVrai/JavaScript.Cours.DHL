export class NavigationLink {
  /**
   * @param {string} link name
   * @param {string} url
   */
  constructor(tag, url) {
    this.tag = tag;
    this.url = url;
  }
}

export class SecondaryNavBarData {
  /**
   * @param {string} directory 
   * @param {NavigationLink[]} links 
   */
  constructor(directory, links) {
    this.directory = directory;
    this.links = links;
  }
}

/**
 * recupère le nom du répertoire
 * @param {string} path
 * @param {((string) => string) | null} transform
 * @returns {string}
 */
export function getDirectoryName(path, transform) {
  const lastIndex = path.lastIndexOf("/");
  const currentDirectory = (lastIndex < 0) ? path : path.substring(lastIndex + 1);
  if (transform) {
    return transform(currentDirectory);
  }

  return currentDirectory;
}

/**
 * Create a navigation link
 * @param {string} directoryName 
 * @param {string} fileName
 * @returns {NavigationLink}
 */
export function createLinkWithDirectory(directoryName, fileName = "index.html") {
  return new NavigationLink(directoryName, `${directoryName}/${fileName}`);
}

/**
 * 
 * @param {number} from 
 * @param {number} to (included)
 * @param {(number) => string} format 
 */
export function generateSeries(from, to, format) {
  const lst = [];
  for (let i = from; i <= to; ++i) {
    lst.push(format(i));
  }

  return lst;
}
