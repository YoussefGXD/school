export function badResponse(res, message) {
  return res.status(400).json({
    message: message,
    data: data,
  });
}

export function okResponse(res, message, data = {}) {
  return res.status(200).json({
    message: message,
    data: data,
  });
}
