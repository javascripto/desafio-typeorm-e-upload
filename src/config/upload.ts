import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tempFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tempFolder,
  storage: multer.diskStorage({
    destination: tempFolder,
    filename(request, file, callback) {
      const fileHase = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHase}-${file.originalname}`;
      return callback(null, fileName);
    },
  }),
};
