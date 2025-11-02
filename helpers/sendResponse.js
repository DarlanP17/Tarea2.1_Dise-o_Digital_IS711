

export default function sendResponse({ res, message = '', data = null, statusCode = 200 }) {
  return res.status(statusCode).json({
    success: statusCode >= 200 && statusCode < 400,
    message,
    data
  })
}
