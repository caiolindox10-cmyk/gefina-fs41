import express from 'express' ;

const app = express();

app.get('api/health', (request, response)=> {
    response.status(200).json({ sucess: {
        satus: 200,
        message: 'Server is running'
    }});
});

app.use((request, response) => {
    response.status(404).json({error: {
        status: 404,
        message: 'Resouce not found.'
    }});
});
app.listen(3000);