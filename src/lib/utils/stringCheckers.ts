export function passwordChecker(password: string): boolean {
  const expression = /[a-zA-Z0-9\W^`]{8,12}/;

  return checker(expression, password);
}

export function emailChecker(email: string): boolean {
  const expression =
    /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;

  return checker(expression, email);
}

export function urlChecker(url: string): boolean {
  const expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

  return checker(expression, url);
}

function checker(expression: RegExp, value: string): boolean {
  const regex = new RegExp(expression);

  return value.match(regex) ? true : false;
}
