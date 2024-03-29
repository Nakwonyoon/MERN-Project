import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


// 이부분 한번더 확인하고 공부할것... 왜 postRoutes를 사용하는지.. import하지않는데 어떻게 사용하는지..
app.use('/posts', postRoutes);


const CONNECTION_URL = 'mongodb+srv://sexy:sexy123@cluster0.cwstmkx.mongodb.net/'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // to avoid warnings
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);

