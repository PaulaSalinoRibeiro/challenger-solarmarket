import { ErrorRequestHandler } from 'express';

export const errorMiddleware: ErrorRequestHandler = async (err, _req, res, _next) => {
  const { status, message } = err;
  if (!status) {
    return res.status(500).json({ message: 'internal error! =/' });
  }
  return res.status(status).json({ error: message });
};
