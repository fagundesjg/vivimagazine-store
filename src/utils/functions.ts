function getBodyFormData(body: Record<string, any>) {
  const params: string[] = [];
  Object.entries(body).forEach(([key, value], _) => {
    params.push(key + '=' + encodeURIComponent(value));
  });
  return params.join('&');
}

export { getBodyFormData };
